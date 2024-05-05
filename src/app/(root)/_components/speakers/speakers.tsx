import Image from 'next/image'
import Link from 'next/link'

const speakers = [
  {
    name: 'Emmanuel Ogbiyoyo',
    role: 'Co Founder at Experia',
    image: '/images/hosts/IMG_7317.JPG',
    twitter: 'https://twitter.com/jbrooksuk',
    linkedin: 'https://pinkary.com/@jbrooksuk?ref=phpstoke',
  },
]

export const Speakers = () => {
  return (
    <section id="speakers" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 id="speakers-title" className="font-display text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            Speakers
          </h2>
          <p className="mt-6 text-xl text-zinc-600">
            Fancy speaking at Tech Spark Stoke? We&apos;re always looking for speakers to share their knowledge with the
            community.
          </p>
        </div>
      </div>
    </section>
  )
}
