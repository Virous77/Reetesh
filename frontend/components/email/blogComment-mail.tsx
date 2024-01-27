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
} from "@react-email/components";
import * as React from "react";

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
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-10 mx-auto p-5 w-[465px]">
            <Section className="mt-8">
              <Img
                src={`https://res.cloudinary.com/dw6wav4jg/image/upload/v1705605313/Image_16-12-23_at_9.22_AM_xpl24s.jpg`}
                width="80"
                height="80"
                alt="Logo Example"
                className="my-0 mx-auto rounded-full"
              />
            </Section>
            <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">
              {previewText}
            </Heading>

            <Text className=" text-[18px] font-bold mt-2">{blogId}</Text>
            <Text className="text-sm">{comment}</Text>
            <Link href="https://reetesh.in">Reetesh.in</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default CommentEmail;