import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="https://gerardodlg-portfolio.vercel.app/">
            https://gerardodlg-portfolio.vercel.app/
          </Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
