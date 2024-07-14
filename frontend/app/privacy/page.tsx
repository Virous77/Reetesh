import DotPattern from '@/components/ui/dot-patterns';
import { cn } from '@/lib/utils';
import { commonMetaData } from '@/utils/utils';

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    name: 'Privacy Policy',
    desc: 'Privacy Policy for reetesh.in',
    image: 'https://avatars.githubusercontent.com/u/101452588?v=4',
    url: '/privacy',
    keywords: ['Privacy', 'cookies', 'ads'],
  });
  return {
    ...metaData,
  };
};

const Privacy = () => {
  return (
    <main className="fade-in-out mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="relative h-[360px]">
        <h1
          className="absolute bottom-[160px] z-10 whitespace-nowrap text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:bottom-32"
          style={{
            transform: 'translate(-50%, -50%)',
            left: '50%',
          }}
        >
          Privacy Policy
        </h1>
        <DotPattern
          className={cn(
            'mt-0 h-[50vh] rounded-full [mask-image:radial-gradient(200px_circle_at_center,white,transparent)]'
          )}
        />
      </section>

      <section className="m-auto mt-[50px] max-w-[97%] md:max-w-[800px]">
        <div className="text-default">
          <p className="text-center">
            <strong>reetesh.in </strong>
            (&quot;I&quot;) provides this Privacy Policy to inform you of our
            policies and procedures regarding the collection, use, and
            disclosure of personal information we may receive from users of our
            website (&quot;Site&quot;), accessible from{' '}
            <a
              className="font-bold text-blue-500 hover:underline"
              href="https://reetesh.in"
              aria-label="reetesh.in"
              title="reetesh.in"
            >
              reetesh.in
            </a>{' '}
            , and any other services offered by us in connection with our site
            (collectively, the &quot;Services&quot;).
          </p>

          <p className="mt-4 text-center">
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us at
            <a
              href="mailto:rajreetesh7@gmail.com"
              className="font-bold text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
              aria-label="mail"
              title="mail"
            >
              {' '}
              rajreetesh7@gmail.com
            </a>
            . This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect on{' '}
            <a
              className="font-bold text-blue-500 hover:underline"
              href="https://reetesh.in"
              aria-label="reetesh.in"
              title="reetesh.in"
            >
              reetesh.in
            </a>
            . This policy does not apply to any information collected offline or
            via channels other than this website.
          </p>
        </div>

        <Box>
          <BoxTitle>Consent</BoxTitle>
          <BoxContent>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </BoxContent>
        </Box>

        <Box>
          <BoxTitle>Links to Other Sites</BoxTitle>
          <BoxContent>
            Our services may contain links to other websites, applications, and
            online services. If you choose to visit a third-party service or
            click on another third-party link, you will be directed to that
            third party&apos;s website, application, or online service. The fact
            that we link to a website or content is not an endorsement,
            authorization, or representation of our affiliation with that third
            party, nor is it an endorsement of their privacy or information
            security policies or practices. We do not exercise control over
            third-party websites or services.
          </BoxContent>
        </Box>

        <Box>
          <BoxTitle>Third-Party Privacy Policies</BoxTitle>
          <BoxContent>
            Our Privacy Policy does not apply to other websites. Thus, we advise
            you to consult the respective Privacy Policies of these third-party
            ad servers for more detailed information. It may include their
            practices and instructions about how to opt out of certain options.
          </BoxContent>
          <BoxContent>
            You can choose to disable cookies through your individual browser
            options. More detailed information about cookie management with
            specific web browsers can be found at the browsers respective
            websites.
          </BoxContent>
        </Box>

        <Box>
          <BoxTitle>Cookies</BoxTitle>
          <BoxContent>
            Cookies are small pieces of data stored on your device by your
            browser. They serve various purposes, such as remembering your
            preferences, enhancing user experience, and facilitating ads
            experience.
          </BoxContent>
          <BoxContent>
            By using our site, you consent to the use of cookies for these
            purposes. You can manage your cookie preferences through your
            browser settings.
          </BoxContent>
        </Box>

        <Box>
          <BoxTitle>Information Collected by Third Parties</BoxTitle>
          <BoxSubTitle>Google Ads</BoxSubTitle>
          <BoxContent>
            We use Google Ads to serve ads on our Site. Google Ads may collect
            information such as your IP address, browser type, operating system,
            the web page you visited before accessing our Site, pages of our
            Site that you visit, time spent on those pages, links you click, and
            other statistics. Google Ads uses cookies and other technologies to
            collect this information.
          </BoxContent>

          <BoxContent>
            For more details on how Google uses your data, please visit the
            <a
              href="https://policies.google.com/privacy"
              className="font-bold text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Privacy Policy"
              title="Google Privacy Policy"
            >
              {' '}
              Google Privacy Policy.
            </a>
          </BoxContent>
        </Box>

        <Box>
          <p>
            <strong>Last Updated : </strong> July, 07 2024
          </p>
        </Box>
      </section>
    </main>
  );
};

export default Privacy;

const Box = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-12">{children}</div>;
};

const BoxTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-2xl font-bold">{children}</h2>;
};

const BoxContent = ({ children }: { children: React.ReactNode }) => {
  return <p className="mt-2 text-default">{children}</p>;
};

const BoxSubTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="mt-4 text-lg font-bold">{children}</h3>;
};
