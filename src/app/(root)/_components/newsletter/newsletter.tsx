export const Newsletter = () => {
  return (
    <section id="newsletter" className="py-16 my-16 bg-zinc-50 rounded-t-3xl">
      <div className="max-w-3xl mx-auto flex flex-col space-y-8">
        <h3 className="text-center text-zinc-800 text-4xl font-bold">Follow us for updates</h3>

        <p className="text-lg text-zinc-500 text-center">
          Subscribe to our newsletter to receive updates on our upcoming events, including speaker announcements and
          more. We promise to only send you the good stuff :)
        </p>
        <form className="flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-indigo-900/5 focus-within:ring-2 focus-within:ring-zinc-300">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            className="flex-auto bg-transparent pl-6 pr-2.5 text-base text-zinc-900 placeholder:text-slate-400 focus:outline-none rounded-l-3xl"
            name="email"
          />
          <button
            className="inline-flex justify-center rounded-2xl bg-[#ff5252] p-4 text-base font-semibold text-white hover:bg-zinc-900 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 active:text-white/70"
            type="submit"
          >
            <span className="sr-only sm:not-sr-only">Subscribe</span>
            <span className="sm:hidden">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  d="m14 7 5 5-5 5M19 12H5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}
