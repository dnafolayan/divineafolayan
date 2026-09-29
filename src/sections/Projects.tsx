import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectsdata.json";
import type { Project } from "../types/projects";

function Projects() {
    const projects: Project[] = projectData;

    return (
        <section id="projects" aria-labelledby="projects-title" className="px-6 py-28 lg:px-8 lg:py-36">
            <div className="mx-auto w-full max-w-6xl border-t border-white/10 pt-12 md:pt-16">
                <div className="mb-10">
                    <p className="mb-3 text-xs uppercase tracking-[.2em] text-[#b5f36b]">
                        Selected work
                    </p>
                    <h2 id="projects-title" className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                        Projects
                    </h2>
                    <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/70">
                        A few examples of the systems, tools, and interfaces I
                        enjoy building.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {projects.map(
                        ({ id, title, description, technologies, link }) => (
                            <ProjectCard
                                key={id}
                                title={title}
                                description={description}
                                technologies={technologies}
                                link={link}
                            />
                        ),
                    )}
                </div>

                <div className="mt-10 flex justify-center">
                    <a
                        href="https://github.com/dnafolayan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-[#b5f36b] px-8 py-3 text-sm font-semibold text-[#10150b] transition duration-300 hover:-translate-y-0.5 hover:bg-[#c7fb89]"
                    >
                        More Projects
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
