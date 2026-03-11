import type { User, Role } from '@prisma/client'

export type { User, Role }

export interface ActionResult<T = undefined> {
  success: boolean
  data?: T
  error?: string
}
