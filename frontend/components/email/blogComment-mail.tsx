import { slugify } from '@/utils/utils';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Link,
} from '@react-email/components';

type CommentEmailProps = {
  comment: string;
  blogId: string;
};

const CommentEmail = ({ comment, blogId }: CommentEmailProps) => {
  const previewText = `New comment received on Blog!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 w-[465px] p-5">
            <Heading className="mx-0 my-6 p-0 text-center text-2xl font-normal">
              {previewText}
            </Heading>

            <Section className="flex items-center justify-center">
              <Text className="mt-2 text-center text-base font-bold">
                {blogId}
              </Text>
              <Text className="-mt-1 mb-8 text-center text-sm">{comment}</Text>
              <Link
                href={`https://reetesh.in/blog/${slugify(blogId)}`}
                className="text-center text-[17px] font-bold text-blue-500"
              >
                View Blog
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default CommentEmail;
