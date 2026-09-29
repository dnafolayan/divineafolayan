import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#080b09]/95 backdrop-blur-2xl">
            <div className="relative mx-auto flex min-h-[68px] max-w-6xl items-center justify-between gap-x-6 px-6 py-3 lg:px-8">
                <a
                    href="#hero"
                    className="text-sm font-semibold tracking-tight text-white"
                >
                    Divine Afolayan
                </a>

                <nav
                    aria-label="Main navigation"
                    className="flex items-center gap-3 sm:gap-8"
                >
                    <button
                        type="button"
                        className="grid size-11 place-items-center rounded-lg text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5f36b] sm:hidden"
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="primary-navigation"
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
                            <span className={`h-0.5 w-full rounded bg-current transition-transform ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                            <span className={`h-0.5 w-full rounded bg-current transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
                            <span className={`h-0.5 w-full rounded bg-current transition-transform ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                        </span>
                    </button>

                    <ul
                        id="primary-navigation"
                        className={`${isMenuOpen ? "flex" : "hidden"} absolute left-6 right-6 top-full flex-col gap-1 rounded-xl border border-white/10 bg-[#10130f] p-2 text-sm font-medium text-white/85 shadow-xl sm:static sm:flex sm:flex-row sm:items-center sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0 sm:text-[13px] sm:shadow-none lg:left-8 lg:right-8`}
                    >
                        <li className="rounded-lg transition hover:bg-white/5 hover:text-white sm:hover:bg-transparent">
                            <a className="block rounded-lg px-4 py-3 sm:p-0" href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a>
                        </li>
                        <li className="rounded-lg transition hover:bg-white/5 hover:text-white sm:hover:bg-transparent">
                            <a className="block rounded-lg px-4 py-3 sm:p-0" href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                        </li>
                        <li className="rounded-lg transition hover:bg-white/5 hover:text-white sm:hover:bg-transparent">
                            <a className="block rounded-lg px-4 py-3 sm:p-0" href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                        </li>
                        <li className="rounded-lg transition hover:bg-white/5 hover:text-white sm:hover:bg-transparent">
                            <a className="block rounded-lg px-4 py-3 sm:p-0" href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                        </li>
                    </ul>
                    <a
                        href="#contact"
                        className="inline-flex items-center rounded-full bg-[#b5f36b] px-4 py-2 text-[13px] font-semibold text-[#10150b] transition hover:bg-[#c7fb89] focus:outline-none focus:ring-2 focus:ring-[#b5f36b]"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
