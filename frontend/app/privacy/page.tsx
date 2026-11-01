import ContactLinks from '@/components/home/contact-links';
import PageShell from '@/components/home/page-shell';
import { commonMetaData } from '@/utils/utils';
import { Link } from 'next-view-transitions';
import { ReactNode } from 'react';

const EMAIL = 'rajreetesh7@gmail.com';

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    name: 'Privacy Policy',
    desc: 'What reetesh.in stores, why it stores it, and how to have it removed.',
    image: 'https://avatars.githubusercontent.com/u/101452588?v=4',
    url: '/privacy',
    keywords: ['Privacy', 'cookies', 'data'],
  });
  return {
    ...metaData,
  };
};

const SERVER_DATA = [
  {
    title: 'Comments',
    body: 'Your comment and your random visitor ID. Comments are public on the post, and they stay until you or I delete them. I also get an email when someone comments, and it can include the comment text.',
  },
  {
    title: 'Likes and views',
    body: 'Your random visitor ID against the post, so each person counts once. These stay with the post.',
  },
  {
    title: 'IP address',
    body: 'Used to limit spam on comments, likes, views and link previews. It sits in a temporary counter that deletes itself within an hour.',
  },
  {
    title: 'Link previews',
    body: 'When you hover a link in a post, the server fetches that page and caches its title, description and image for up to four days. The preview isn’t tied to you.',
  },
];

const SERVICES = [
  {
    title: 'Vercel',
    body: 'Hosts the site, and handles anonymous page analytics and temporary storage. Like most hosts, it processes your IP address to serve the site.',
  },
  {
    title: 'MongoDB Atlas',
    body: 'Stores comments, likes and view counts.',
  },
  { title: 'Resend', body: 'Sends me the comment notification emails.' },
  {
    title: 'YouTube and StackBlitz',
    body: 'Some posts embed a video or code project, which loads from those services and follows their privacy policies.',
  },
];

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="mt-10">
    <h2 className="home-title">{title}</h2>
    <div className="home-soft mt-2 space-y-3">{children}</div>
  </section>
);

const Rows = ({ rows }: { rows: { title: string; body: string }[] }) => (
  <dl className="space-y-4">
    {rows.map((row) => (
      <div key={row.title}>
        <dt className="text-foreground font-medium">{row.title}</dt>
        <dd className="mt-0.5">{row.body}</dd>
      </div>
    ))}
  </dl>
);

const Privacy = () => {
  return (
    <PageShell>
      <div className="mx-auto flex min-h-dvh max-w-[46rem] flex-col px-6 pt-14 pb-7 md:pt-[8vh]">
        <main>
          <Link
            href="/"
            className="home-rise home-soft home-link text-[0.95rem]"
            style={{ '--i': 0 } as React.CSSProperties}
          >
            Reetesh Kumar
          </Link>

          <h1
            className="home-rise post-title mt-9"
            style={{ '--i': 1 } as React.CSSProperties}
          >
            Privacy
          </h1>

          <p
            className="home-rise home-sentence mt-5"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            The short version: no ads, no accounts and no tracking cookies. This
            site only keeps what it needs to run comments, likes and view
            counts.
          </p>

          <div
            className="home-rise"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            <Section title="In your browser">
              <p>
                Your browser stores a random visitor ID. It lets the site count
                your view once and lets you delete your own comments. It
                isn&apos;t linked to your name.
              </p>
              <p>
                It also stores your theme and your recent searches. You can
                clear all of this in your browser settings, but you won&apos;t
                be able to delete comments you left with the old ID.
              </p>
            </Section>

            <Section title="On the server">
              <Rows rows={SERVER_DATA} />
            </Section>

            <Section title="Cookies">
              <p>
                This site doesn&apos;t set any cookies of its own. An embedded
                video or code project may set its own once you use it.
              </p>
            </Section>

            <Section title="Services this site uses">
              <Rows rows={SERVICES} />
              <p>
                I don&apos;t sell your data or share it with anyone beyond these
                services.
              </p>
            </Section>

            <Section title="Removing your data">
              <p>
                You can delete your own comments from the same browser you used
                to post them. For anything else, email me at{' '}
                <a href={`mailto:${EMAIL}`} className="home-link">
                  {EMAIL}
                </a>{' '}
                and I&apos;ll remove it.
              </p>
            </Section>

            <Section title="Links to other sites">
              <p>
                Posts link to other websites. This policy doesn&apos;t cover
                them, so check their own privacy policies.
              </p>
            </Section>

            <p className="home-soft mt-10 text-sm">
              Last updated November 1, 2026
            </p>
          </div>
        </main>

        <footer className="home-soft mt-auto pt-12 text-sm">
          <ContactLinks />
        </footer>
      </div>
    </PageShell>
  );
};

export default Privacy;
