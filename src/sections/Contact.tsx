import contactData from "../data/contactsdata.json";
import type { Contacts } from "../types/contacts";

function Contact() {
    const links: Contacts[] = contactData;

    return (
        <section id="contact" aria-labelledby="contact-title" className="px-6 py-28 lg:px-8 lg:py-36">
            <div className="mx-auto w-full max-w-6xl border-t border-white/10 pt-12 md:pt-16">
                <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
                    <div>
                        <p className="mb-3 text-xs uppercase tracking-[.2em] text-[#b5f36b]">
                            Let’s connect
                        </p>
                        <h2 id="contact-title" className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                            Contact
                        </h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                            I’m interested in building software, exploring new
                            technologies, and connecting with people working on
                            interesting problems.
                        </p>
                    </div>
                    <ul className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target={
                                        link.href.startsWith("mailto:")
                                            ? undefined
                                            : "_blank"
                                    }
                                    rel={
                                        link.href.startsWith("mailto:")
                                            ? undefined
                                            : "noopener noreferrer"
                                    }
                                    className="inline-flex min-h-11 items-center gap-1 rounded-full border border-transparent px-4 text-sm font-medium text-white/80 transition-colors hover:border-white/10 hover:bg-white/[0.04] hover:text-[#b5f36b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b5f36b]"
                                >
                                    {link.label}
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <footer className="mt-12 border-t border-white/[0.07] pt-5 text-xs text-white/70">
                    © {new Date().getFullYear()} Divine Afolayan
                </footer>
            </div>
        </section>
    );
}

export default Contact;
