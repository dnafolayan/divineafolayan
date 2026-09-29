function ProjectCard({
    title,
    description,
    technologies,
    link,
}: {
    title: string;
    description: string;
    technologies: string[];
    link: string;
}) {
    return (
        <article className="group flex h-full flex-col rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b5f36b]/25 hover:bg-white/[0.04]">
            <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
                    Code
                </span>
            </div>

            <p className="mb-5 flex-1 text-sm leading-7 text-white/75">
                {description}
            </p>

            <ul className="mb-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <li
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70"
                    >
                        {technology}
                    </li>
                ))}
            </ul>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} on GitHub`}
                className="inline-flex items-center gap-2 self-start text-sm font-medium text-[#b5f36b] transition hover:text-[#d4ffac]"
            >
                View on GitHub
                <span aria-hidden="true">↗</span>
            </a>
        </article>
    );
}

export default ProjectCard;
