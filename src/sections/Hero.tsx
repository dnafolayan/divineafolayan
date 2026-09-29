import portrait from "../assets/me.jpg";

function Hero() {
    return (
        <section
            id="hero"
            aria-labelledby="hero-title"
            className="relative flex min-h-[92svh] items-center overflow-hidden px-6 pb-20 pt-28 lg:px-8"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-20 h-[36rem] w-[36rem] rounded-full bg-[#a5ef57]/[0.07] blur-[130px]"
            />
            <div className="hero-in relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.1fr_.9fr] md:gap-10">
                <div>
                    <p className="mb-7 flex items-center gap-2 text-xs font-medium uppercase tracking-[.22em] text-white/70">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#b5f36b] shadow-[0_0_12px_#b5f36b]" />{" "}
                        Available for opportunities
                    </p>
                    <h1 id="hero-title" className="max-w-3xl text-[clamp(3.4rem,8vw,6.8rem)] font-semibold leading-[.96] tracking-[-.07em] text-[#f5f7f3]">
                        Building what’s{" "}
                        <span className="text-[#b5f36b]">next.</span>
                    </h1>
                    <p className="mt-7 text-lg font-medium tracking-tight text-white/80">
                        I’m Divine Afolayan, a backend engineer.
                    </p>
                    <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#a0a79f] md:text-base">
                        I build reliable APIs, thoughtful developer tools, and
                        intelligent systems that make complex things feel
                        simple.
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-3">
                        <a
                            href="#projects"
                            className="rounded-full bg-[#b5f36b] px-6 py-3 text-sm font-semibold text-[#10150b] transition duration-300 hover:-translate-y-0.5 hover:bg-[#c7fb89]"
                        >
                            Explore my work{" "}
                            <span aria-hidden="true" className="ml-1">
                                ↗
                            </span>
                        </a>
                        <a
                            href="https://github.com/dnafolayan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition duration-300 hover:border-white/30 hover:text-white"
                        >
                            GitHub
                        </a>
                    </div>
                    <p aria-hidden="true" className="mt-14 text-xs tracking-wide text-white/70">
                        GO <span className="mx-2 text-[#b5f36b]/70">·</span>{" "}
                        SYSTEMS{" "}
                        <span className="mx-2 text-[#b5f36b]/70">·</span>{" "}
                        PRODUCT
                    </p>
                </div>
                <div className="relative mx-auto w-full max-w-[390px] md:ml-auto">
                    <div className="absolute -inset-4 rounded-[2.5rem] border border-[#b5f36b]/10" />
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#151a14]">
                        <img
                            src={portrait}
                            alt="Divine Afolayan"
                            className="h-full w-full object-cover object-center opacity-90 transition duration-700 hover:scale-[1.025]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080b09]/70 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                            <div>
                                <p className="text-sm font-medium text-white">
                                    Divine Afolayan
                                </p>
                                <p className="mt-1 text-xs text-white/70">
                                    Backend engineer
                                </p>
                            </div>
                            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-sm text-white">
                                DA
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
