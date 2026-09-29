import skillGroup from "../data/skillsdata.json";
import type { SkillGroup } from "../types/skills";

function Skills() {
    const skillGroups: SkillGroup[] = skillGroup;
    return (
        <section id="skills" aria-labelledby="skills-title" className="px-6 py-28 lg:px-8 lg:py-36">
            <div className="mx-auto w-full max-w-6xl border-t border-white/10 pt-12 md:pt-16">
                <div className="mb-10">
                    <p aria-hidden="true" className="mb-3 text-xs uppercase tracking-[.2em] text-[#b5f36b]">
                        My toolkit
                    </p>
                    <h2 id="skills-title" className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                        Skills
                    </h2>
                    <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/70">
                        I enjoy building reliable and user-friendly products
                        across the full stack, from APIs to polished interfaces.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 transition duration-300 hover:border-[#b5f36b]/25 hover:bg-white/[0.04]"
                        >
                            <h3 className="mb-5 text-base font-semibold tracking-tight text-white">
                                {group.title}
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[13px] text-white/65 transition duration-300 hover:-translate-y-0.5 hover:border-[#b5f36b]/30 hover:text-[#d4ffac]"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
