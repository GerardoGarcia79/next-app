import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text style={heading}>Hello {name}</Text>
            <Link href="https://gerardodlg-portfolio.vercel.app/">
              https://gerardodlg-portfolio.vercel.app/
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
