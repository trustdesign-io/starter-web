import type { User, Role } from '@prisma/client'

export type { User, Role }

export type ActionResult<T = undefined> =
  | { success: true; data?: T }
  | { success: false; error: string }
