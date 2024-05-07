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
          <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">Speakers</h2>
          <p className="mt-6 text-xl text-zinc-600">Fancy speaking at our upcoming event? submit your talk proposal</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 mt-12">
          {new Array(3).fill(null).map((_, index) => (
            <div key={index}>
              <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                <div className="absolute inset-0 bg-zinc-50 grayscale transition duration-300 rounded-t-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="text-indigo-400 transition duration-300 group-hover:scale-90"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="space-y-2 space-x-4 xl:flex xl:items-center xl:justify-between mt-8">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <div>
                    <h3 className="text-zinc-900">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          className="text-yellow-400 w-6 h-6 inline-block mr-2 -mt-1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        15-minute lightning talk
                      </div>
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-zinc-500">
                      Interested?{' '}
                      <Link
                        className="underline text-[#ff5252]"
                        href="https://forms.gle/CwbEBNdq5JsqfiNMA"
                        target="_blank"
                      >
                        Submit your talk proposal
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="hidden">
            <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
              <div className="absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6 border-indigo-400"></div>
              <div
                className="absolute inset-0 bg-indigo-50 grayscale hover:grayscale-0 transition duration-300"
                style={{ clipPath: `url(#:R1n6:-1)` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="text-indigo-400 transition duration-300 group-hover:scale-90"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="space-y-2 space-x-4 xl:flex xl:items-center xl:justify-between mt-8">
              <div className="space-y-1 text-lg font-medium leading-6">
                <div>
                  <h3 className="text-indigo-900">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="text-yellow-400 w-6 h-6 inline-block mr-2 -mt-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      15-minute lightning talk
                    </div>
                  </h3>
                  <p className="mt-1 text-base tracking-tight text-slate-500">
                    Interested?{' '}
                    <a className="underline hover:text-indigo-600" href="https://forms.gle/ZjZHE4qzmJR7FnZE8"></a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
