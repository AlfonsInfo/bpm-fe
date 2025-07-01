'use client';

import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="m-4">
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-6">
        <nav className="flex flex-col space-y-4">
          <Link href="/" className="rounded px-3 py-2 hover:bg-gray-100">
            Home
          </Link>
          <Link href="/Event" className="rounded px-3 py-2 hover:bg-gray-100">
           Events
          </Link>
          <Link href="/settings" className="rounded px-3 py-2 hover:bg-gray-100">
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
