import ContactLinks from '@/components/home/contact-links';
import PageShell from '@/components/home/page-shell';
import { PhraseLink, ScrambleOnLoad } from '@/components/home/phrase';

const NotFound = () => {
  return (
    <PageShell>
      <div className="mx-auto flex min-h-dvh max-w-[46rem] flex-col px-6 pt-14 pb-7 md:pt-[8vh]">
        <main className="my-auto">
          <h1 className="not-found-code home-rise">
            <ScrambleOnLoad text="404" />
          </h1>
          <p
            className="home-rise home-sentence mt-6"
            style={{ '--i': 1 } as React.CSSProperties}
          >
            This page doesn&apos;t exist, or it moved somewhere else. You could{' '}
            <PhraseLink text="go home" href="/" external={false} />,{' '}
            <PhraseLink text="read a post" href="/blogs" external={false} /> or
            see{' '}
            <PhraseLink
              text="what I've made"
              href="/#projects"
              external={false}
            />
            .
          </p>
        </main>

        <footer className="home-soft pt-8 text-sm">
          <ContactLinks />
        </footer>
      </div>
    </PageShell>
  );
};

export default NotFound;
