import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
  Link,
} from '@react-email/components';
import * as React from 'react';

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
            <Section className="mt-8">
              <Img
                src={`https://res.cloudinary.com/dw6wav4jg/image/upload/v1705605313/Image_16-12-23_at_9.22_AM_xpl24s.jpg`}
                width="80"
                height="80"
                alt="Logo Example"
                className="mx-auto my-0 rounded-full"
              />
            </Section>
            <Heading className="mx-0 my-8 p-0 text-center text-2xl font-normal">
              {previewText}
            </Heading>

            <Text className=" mt-2 text-[18px] font-bold">{blogId}</Text>
            <Text className="text-sm">{comment}</Text>
            <Link href="https://reetesh.in">Reetesh.in</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default CommentEmail;
