import Link from 'next/link'
import React from 'react'

const socials = [
  {
    name: 'Linkedin',
    url: 'https://what3words.com/next.inform.served',
    label: 'linkedin(dot)com/techsparkstoke',
  },
  {
    name: 'Discord',
    url: 'https://what3words.com/next.inform.served',
    label: 'discord(dot)com/techsparkstoke',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/phpstoke',
    label: 'twitter(dot)com/techsparkstoke',
  },
]

export const Hero = () => {
  return (
    <div className="relative pt-10 pb-20 sm:py-20">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-[#fffcf0]">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:max-w-[950px] lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-zinc-800 sm:text-7xl">
            Tech Spark Stoke
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-zinc-600">
            <p>
              Tech Spark Stoke is a community of developers, designers, and tech enthusiasts who meet up regularly to
              share knowledge, network, and learn from each other.
            </p>
            <p></p>
            <p>
              We host regular events, workshops, and talks on a variety of tech-related topics. Whether you&apos;re a
              seasoned pro or just starting out, we&apos;d love to see you, we meet regularly at{' '}
              <Link
                target="_blank"
                href="https://smithfield-works.com/?ref=techsparkstoke"
                className="underline hover:text-indigo-600"
              >
                The Smithfield Works in Hanley
              </Link>
              .
            </p>
          </div>
          <Link
            className="inline-flex justify-center rounded-2xl bg-gray-900 p-4 text-base font-semibold text-white hover:bg-gray-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 active:text-white/70 my-10 w-full sm:hidden"
            href="https://www.eventbrite.com/e/tech-spark-stoke-tickets-898152366907"
            target="_blank"
            rel="noreferrer"
          >
            Join us on Meetup
          </Link>
          <dl className="grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-8 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left pb-12">
            {socials.map((social) => (
              <div key={social.name}>
                <dt className="font-mono text-sm text-zinc-600">{social.name}</dt>
                <dd className="mt-0.5 text-2xl sm:text-xl font-semibold tracking-tighter text-zinc-900 break-words">
                  <a href={social.url} className="hover:text-zinc-600" target="_blank" rel="noreferrer">
                    {renderLabel(social.label)}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

function renderLabel(label: string) {
  const parts = label.split('(dot)')
  return (
    <span>
      {parts.map((part, index) => (
        <React.Fragment key={part}>
          <span className="underline">{part}</span>
          {index !== parts.length - 1 && <span className="text-[#ff5252]">(.)</span>}
        </React.Fragment>
      ))}
    </span>
  )
}
