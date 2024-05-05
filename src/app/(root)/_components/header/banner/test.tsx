import React from 'react'

export const test = () => {
  return (
    <nav className="pointer-events-auto hidden md:block">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <li>
          <a
            className="relative block px-3 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
            href="/about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="relative block px-3 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
            href="/meetups"
          >
            Meetups
          </a>
        </li>
        <li>
          <a
            className="relative block px-3 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
            href="/blog"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className="relative block px-3 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
            href="/team"
          >
            Team
          </a>
        </li>
        <li>
          <a
            className="relative block px-3 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
            href="/code-of-conduct"
          >
            CoC
          </a>
        </li>
      </ul>
    </nav>
  )
}
