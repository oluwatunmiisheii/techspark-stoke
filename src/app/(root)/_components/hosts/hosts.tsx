import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const hosts = [
  {
    name: 'Ameen Alade',
    role: 'Software Engineer',
    company: 'Invisible Homes',
    companyUrl: 'https://www.invisiblehomes.co.uk/',
    image: '/images/hosts/ameen.jpeg',
    twitter: 'https://twitter.com/ameen_thegreat',
    linkedin: 'https://www.linkedin.com/in/ameen-alade-7643b5b9/',
  },
  {
    name: 'Wilson Adenuga',
    role: 'Software Engineer',
    company: 'Beyond IT SRL',
    companyUrl: 'https://beyondit.it/',
    image: '/images/hosts/tunmii.jpeg',
    twitter: 'https://twitter.com/Adenugawilson',
    linkedin: 'https://www.linkedin.com/in/wilson-adenuga/',
  },
]

export const Hosts = () => {
  return (
    <section id="hosts" aria-labelledby="hosts-title" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <div className="max-w-2xl">
            <h2 id="hosts-title" className="font-display text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
              Meet the hosts
            </h2>
            <p className="mt-6 text-xl text-zinc-600">
              Tech Spark Stoke is organised by a group of local developers who are passionate about sharing knowledge
              and building a community.
            </p>
          </div>
          <div className="mt-16">
            <ul className="space-y-4 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8 mx-auto">
              {hosts.map((host, index) => (
                <li className="rounded-xl md:rounded-5xl text-center xl:text-left" key={host.name}>
                  <div className="space-y-6 xl:space-y-10 relative w-full">
                    <div className="relative w-full h-[300px]">
                      <div className="absolute inset-0 grayscale">
                        <Image
                          alt=""
                          loading="lazy"
                          width="2270"
                          height="2272"
                          decoding="async"
                          className={`mx-auto w-full h-full object-cover rounded-t-lg ${
                            index === 1 ? 'object-top' : 'object-center'
                          }`}
                          src={host.image}
                        />
                      </div>
                      <ul className="flex space-x-3 absolute bottom-5 left-5">
                        <li>
                          <Link
                            href={host.twitter}
                            target="_blank"
                            aria-label="Twitter"
                            className="text-[#ff5252] bg-[#fffcf0] shadow rounded-full size-8 flex items-center justify-center"
                          >
                            <span className="sr-only">twitter</span>
                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={host.linkedin}
                            aria-label="Linkedin"
                            target="_blank"
                            className="text-[#ff5252] bg-[#fffcf0] shadow rounded-full size-8 flex items-center justify-center"
                          >
                            <span className="sr-only">Linkedin</span>
                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-zinc-800 text-[22px] font-bold">{host.name}</h3>
                        <p className="text-zinc-600">
                          {host.role} <span className="text-[#ff5252]">(@)</span>{' '}
                          <Link
                            className="underline font-bold text-zinc-800"
                            href={host.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {host.company}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
