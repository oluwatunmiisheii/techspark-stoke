import Link from 'next/link'
import { Hero } from './_components/hero/hero'
import { Hosts } from './_components/hosts/hosts'
import { Speakers } from './_components/speakers/speakers'
import { Newsletter } from './_components/newsletter/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Hosts />
      <section id="sponsor" className="px-8 py-16 bg-zinc-800">
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center space-y-4">
          <h2 className="text-center text-white text-4xl font-bold">Interested in sponsoring our next event?</h2>
          <p className="text-lg text-zinc-50 text-center">
            We&apos;re always looking for sponsors to help us make our events even better. If you&apos;re interested in
            sponsoring Tech Spark Stoke, please get in touch.
          </p>
          <Link
            className="inline-flex justify-center rounded-2xl bg-[#ff5252] hover:text-white hover:bg-zinc-900 p-4 text-base font-semibold text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  active:text-white/70"
            href="mailto:james@alt-three.com?subject=Sponsor PHP Stoke"
            target="_blank"
            rel="noreferrer"
          >
            Get in touch
            <span className="sr-only">email</span>
            <svg className="h-6 w-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      <Speakers />
      <Newsletter />
    </>
  )
}
