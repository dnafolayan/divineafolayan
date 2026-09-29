function About() {
    return (
        <section id="about" aria-labelledby="about-title" className="px-6 py-28 lg:px-8 lg:py-36">
            <div className="mx-auto grid max-w-6xl gap-10 border-t border-white/10 pt-12 md:grid-cols-[.55fr_1.45fr] md:pt-16">
                <div>
                    <p aria-hidden="true" className="text-xs font-medium uppercase tracking-[.2em] text-[#b5f36b]">
                        A little about me
                    </p>
                    <h2 id="about-title" className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                        Curiosity, built into code.
                    </h2>
                </div>
                <div>
                    <p className="max-w-3xl text-lg leading-8 tracking-[-.015em] text-white/65">
                        I’m a backend engineer focused on building scalable
                        systems and developer-friendly tools with Go, Python,
                        JavaScript, and modern databases. I’m passionate about
                        learning new technologies, designing reliable APIs,
                        exploring distributed systems, and growing deeper in AI
                        engineering.
                    </p>
                    <p className="mt-7 text-sm text-white/70">
                        Based in Nigeria{" "}
                        <span className="mx-2 text-[#b5f36b]">·</span> Building
                        for everywhere
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
