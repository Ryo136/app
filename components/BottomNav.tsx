'use client';

import { Home, Search, Puzzle, Building2 } from 'lucide-react';
import Link from 'next/link';
import type { Route } from 'next';
import { usePathname } from 'next/navigation';
import type { ComponentType } from 'react';

const items: Array<{ href: Route; label: string; icon: ComponentType<{ className?: string }> }> = [
  { href: '/home', label: 'ホーム', icon: Home },
  { href: '/encounters', label: 'すれちがい', icon: Search },
  { href: '/puzzle', label: 'パズル', icon: Puzzle },
  { href: '/apartment', label: '住民', icon: Building2 }
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-3xl bg-white p-3 shadow-soft">
      <ul className="flex justify-around">
        {items.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className={`flex flex-col items-center text-xs ${pathname === href ? 'text-brand-600' : 'text-slate-500'}`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
