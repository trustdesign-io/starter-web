import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { AuthProvider } from '@/components/auth-provider'
import { Sidebar } from '@/components/sidebar'

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser()

  if (!authUser) {
    redirect('/sign-in')
  }

  const user = await prisma.user.findUnique({ where: { id: authUser.id } })

  if (!user) {
    redirect('/sign-in')
  }

  return (
    <AuthProvider initialUser={user}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar user={user} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </AuthProvider>
  )
}
