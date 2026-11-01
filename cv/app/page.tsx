import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import { RESUME_DATA } from "@/components/cv/data";
import { ProjectCard } from "@/components/cv/project-card";
import { Section } from "@/components/cv/section";
import Print from "@/components/cv/print";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | CV`,
  description: RESUME_DATA.about,
  authors: [
    {
      name: "Reetesh Kumar",
      url: "https://reetesh.in/",
    },
  ],
  twitter: {
    card: "summary_large_image",
    creator: "@reetesheth",
    images: `${RESUME_DATA.avatarUrl}`,
  },
  robots: "index, follow",
  alternates: {
    canonical: `https://cv.reetesh.in`,
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `https://cv.reetesh.in`,
    title: `${RESUME_DATA.name} | CV`,
    description: `${RESUME_DATA.about}`,
    siteName: "Reetesh Kumar",
    images: [
      {
        url: `${RESUME_DATA.avatarUrl}`,
      },
    ],
  },
  assets: `${RESUME_DATA.avatarUrl}`,
  keywords: [
    "Reetesh Kumar",
    "Reetesh",
    "cv",
    "Reetesh CV",
    "Reetesh Kumar CV",
  ],
};

const { name, initials, location, about, summary, avatarUrl, contact } =
  RESUME_DATA;

const CV = () => {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12 md:py-20 print:max-w-none print:p-0">
      <header className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-5xl font-normal tracking-tight md:text-6xl print:text-[30pt]">
            {name}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground print:mt-1 print:text-[11pt]">
            {about}
          </p>
        </div>
        <Avatar className="size-20 shrink-0 md:size-24 print:size-16">
          <AvatarImage alt={name} src={avatarUrl} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </header>

      <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground print:mt-3">
        <li>{location}</li>
        <li>
          <a className="hover:text-foreground" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </li>
        <li>
          <a className="hover:text-foreground" href={`tel:${contact.tel}`}>
            {contact.tel}
          </a>
        </li>
        {contact.links.map((link) => (
          <li key={link.url}>
            <a
              className="hover:text-foreground"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10 space-y-8 print:mt-4 print:space-y-3">
        <Section title="About">
          <div className="space-y-3 leading-relaxed print:space-y-1.5">
            {summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section title="Experience">
          <div className="space-y-7 print:space-y-3">
            {RESUME_DATA.work.map((work) => (
              <article key={work.company} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-medium leading-snug print:text-[11pt]">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noreferrer"
                      className="decoration-heading underline-offset-4 hover:underline"
                    >
                      {work.company}
                    </a>
                  </h3>
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">
                    {work.start} to {work.end}
                  </span>
                </div>
                <p className="font-mono text-xs text-muted-foreground">
                  {work.title}
                </p>
                <ul className="mt-2 space-y-1 leading-relaxed">
                  {work.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Projects">
          <div className="space-y-6 print:space-y-2.5">
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                year={project.year}
                description={project.description}
                tags={project.techStack}
                link={project.link}
              />
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <dl className="space-y-1.5 print:space-y-0.5">
            {RESUME_DATA.skills.map((group) => (
              <div key={group.label} className="flex gap-x-3">
                <dt className="w-20 shrink-0 pt-px font-mono text-xs leading-relaxed text-muted-foreground">
                  {group.label}
                </dt>
                <dd className="leading-relaxed">{group.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Education">
          {RESUME_DATA.education.map((education) => (
            <div
              key={education.school}
              className="flex flex-wrap items-baseline justify-between gap-x-4"
            >
              <p>
                {education.degree}, {education.school}
              </p>
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                {education.start} to {education.end}
              </span>
            </div>
          ))}
        </Section>
      </div>

      <Print />
    </main>
  );
};

export default CV;
