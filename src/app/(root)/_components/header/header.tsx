'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Banner } from './banner/banner'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  {
    name: 'Hosts',
    url: '#',
  },
  {
    name: 'Speakers',
    url: '#speakers',
  },
  {
    name: 'Newsletter',
    url: '#newsletter',
  },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="relative z-50">
      <Banner />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 pt-3" aria-label="Global">
        <div>
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-[40px] w-auto" width={40} height={40} src="/icon_tech_sparks.png" alt="logo" />
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-6 text-zinc-800 bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 rounded-full px-3 backdrop-blur">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="px-3 py-2 font-medium leading-6 transition hover:text-[#ffb500]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex justify-end">
          <div className="flex lg:hidden mr-5">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="pointer-events-auto">
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition "
            >
              <svg
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 [@media(prefers-color-scheme:dark)]:fill-yellow-50 [@media(prefers-color-scheme:dark)]:stroke-yellow-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-yellow-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-yellow-600"
              >
                <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                <path
                  d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                  fill="none"
                ></path>
              </svg>
              {/* <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-yellow-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-yellow-500"
              >
                <path
                  d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg> */}
            </button>
          </div>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-[9999]" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z- w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                height={32}
                width={32}
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
