import Link from 'next/link'

export const Banner = () => {
  return (
    <div className="relative isolate flex items-center justify-center gap-x-6 overflow-hidden bg-[#ff5252] px-6 py-2.5 sm:px-3.5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-white font-semibold">
          Friday, 11th June 2024 @ 9:30am
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          The Smithfield Works, Stoke-on-Trent.
        </p>
        <Link
          href="#"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Get your ticket <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  )
}
