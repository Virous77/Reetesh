interface Props {
  title: string;
  year: string;
  description: string;
  tags: readonly string[];
  link: { label: string; href: string };
}

export function ProjectCard({ title, year, description, tags, link }: Props) {
  return (
    <article className="break-inside-avoid">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium leading-snug print:text-[11pt]">
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="decoration-heading underline-offset-4 hover:underline"
          >
            {title}
          </a>
        </h3>
        <span className="font-mono text-xs tabular-nums text-muted-foreground">
          {year}
        </span>
      </div>
      <p className="mt-1 leading-relaxed">{description}</p>
      <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-muted-foreground">
        {tags.join(" · ")}
        <span className="hidden print:inline"> · {link.label}</span>
      </p>
    </article>
  );
}
