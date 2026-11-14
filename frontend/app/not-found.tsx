import PageShell from '@/components/home/page-shell';
import { PhraseLink, ScrambleOnLoad } from '@/components/home/phrase';

const NotFound = () => {
  return (
    <PageShell>
      <main className="my-auto py-12">
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
    </PageShell>
  );
};

export default NotFound;
