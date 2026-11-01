import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: Props) {
  return (
    <section className="grid gap-x-8 gap-y-3 border-t border-border pt-6 md:grid-cols-[6.5rem_1fr] print:grid-cols-[5.5rem_1fr] print:gap-x-6 print:pt-3">
      <h2 className="pt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-heading">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
