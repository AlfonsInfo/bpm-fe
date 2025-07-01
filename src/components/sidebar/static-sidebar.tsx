'use client';

import Link from 'next/link';

export function Sidebar() {
  return (
<aside className="fixed top-0 left-0 h-screen w-48 border-r bg-primary p-6 text-white">
  <h2 className="mb-8 text-2xl font-bold">Event</h2>
  <nav className="flex flex-col space-y-4">
    <Link href="/dashboard" className="rounded px-3 py-2 hover:bg-blue-700">
      Home
    </Link>
    <Link href="/dashboard/events" className="rounded px-3 py-2 hover:bg-blue-700">
      Events
    </Link>
    <Link href="/settings" className="rounded px-3 py-2 hover:bg-blue-700">
      Settings
    </Link>
  </nav>
</aside>

  );
}
