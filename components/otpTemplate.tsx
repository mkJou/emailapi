import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface OtpTemplateProps {
  code?: string;
  user?: any;
  hash?: string;
}

const baseUrl = `https://www.firmedigital.com`;

export const OtpTemplate = ({ code, user, hash }: OtpTemplateProps) => {
  return (
    <Html>
      <Head />
      {/* <Preview>Dropbox reset your password</Preview> */}
      <Body style={main}>
        <Container style={container}>
          <img
            src="https://i.imgur.com/nEDMn0q.png"
            alt="Logo"
            title="Logo"
            style={{ display: "block" }}
            width="80px"
          />

          <Section>
            <Text style={text}>Hola {user?.name},</Text>
            <Text style={text}>
              A continuación este es tu código OTP para firmar electrónicamente
              el bloque con hash ({String(hash).substring(0, 16)})...
            </Text>
            {/* <Button style={button} href={resetPasswordLink}>
              Reset password
            </Button> */}
            <Text style={{ ...text, fontWeight: "700" }}>
              Código OTP: {String(code)}
            </Text>
            <Text style={text}>
              Si no ha solicitado este código, puedes enviar un email a
              soporte@firmedigital.com detallando el caso.
            </Text>

            <Text style={text}>
              Un saludo. <br />
              <br /> - Bot de Seguridad de FirmeDigital
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default OtpTemplate;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const button = {
  backgroundColor: "#007ee6",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "210px",
  padding: "14px 7px",
};

const anchor = {
  textDecoration: "underline",
};
