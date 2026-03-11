'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Settings, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { UserMenu } from '@/components/user-menu'
import type { User } from '@/types'

interface SidebarProps {
  user: User
}

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/settings', label: 'Settings', icon: Settings },
  // Add nav items here
] as const

function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1 px-3" aria-label="Main navigation">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
            pathname === item.href
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
          )}
          aria-current={pathname === item.href ? 'page' : undefined}
        >
          <item.icon className="h-4 w-4 shrink-0" aria-hidden />
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

function SidebarContent({ user }: SidebarProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-14 items-center border-b px-6">
        <span className="font-semibold">App Name</span>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <NavLinks />
      </div>
      <div className="border-t">
        <UserMenu user={user} />
      </div>
    </div>
  )
}

export function Sidebar({ user }: SidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-60 shrink-0 border-r md:flex md:flex-col">
        <SidebarContent user={user} />
      </aside>

      {/* Mobile sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed left-4 top-4 z-40 md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-60 p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SidebarContent user={user} />
        </SheetContent>
      </Sheet>
    </>
  )
}
