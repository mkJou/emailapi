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

interface EventFinishTemplateProps {
  user?: any;
  event?: any;
}

const baseUrl = `https://www.cryptohuella.com`;

export const EventFinishTemplate = ({
  user,
  event,
}: EventFinishTemplateProps) => {
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
            <Text style={text}>
              Hola {String(user?.name).split(" ")[0]}, ¿Qué tal?
            </Text>
            <Text style={text}>
              Te hemos enviado este correo para darte una cordial bienvenida al
              evento: <strong>{String(event?.data?.name).toUpperCase()}</strong>{" "}
              al que estás participando. Esperemos que la pases excelente en
              estos espacios y conozcas personas que te impulse y sean de valor
              agregado.
            </Text>

            <Text style={text}>
              Tu código QR ha dejado de ser válido y se ha marcado como
              CONFIRMADO por Cryptohuella.
            </Text>

            <Text style={text}>
              Un saludo. <br />
              <br /> - Cryptohuella
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EventFinishTemplate;

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
