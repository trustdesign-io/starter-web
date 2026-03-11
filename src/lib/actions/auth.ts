'use server'

import { z } from 'zod'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import type { ActionResult } from '@/types'

const SignInSchema = z.object({
  email: z.string().email('Please enter a valid email.'),
  password: z.string().min(1, 'Password is required.'),
})

const SignUpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.').max(50),
  email: z.string().email('Please enter a valid email.'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
})

export async function signInWithEmail(_prevState: ActionResult, formData: FormData): Promise<ActionResult> {
  const result = SignInSchema.safeParse({ email: formData.get('email'), password: formData.get('password') })
  if (!result.success) return { success: false, error: result.error.issues[0].message }
  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword(result.data)
  if (error) return { success: false, error: 'Invalid email or password.' }
  redirect('/dashboard')
}

export async function signUpWithEmail(_prevState: ActionResult, formData: FormData): Promise<ActionResult> {
  const result = SignUpSchema.safeParse({ name: formData.get('name'), email: formData.get('email'), password: formData.get('password') })
  if (!result.success) return { success: false, error: result.error.issues[0].message }
  const supabase = await createClient()
  const { error } = await supabase.auth.signUp({ email: result.data.email, password: result.data.password, options: { data: { name: result.data.name } } })
  if (error) return { success: false, error: error.message }
  redirect('/dashboard')
}

export async function signOut(): Promise<void> {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/sign-in')
}
