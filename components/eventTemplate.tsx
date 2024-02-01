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

interface EventTemplateProps {
  user?: any;
  event?: any;
  chain?: any;
}

const baseUrl = `https://www.cryptohuella.com`;

export const EventTemplate = ({ user, event, chain }: EventTemplateProps) => {
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
              Tu registro en el evento:{" "}
              <strong>{String(event?.data?.name).toUpperCase()}</strong> se ha
              confirmado correctamente. A continuación te daremos un pequeño
              repaso de tu informació y la del evento.
            </Text>
            <Text style={text}>
              <ul>
                <li>
                  <strong>NOMBRE COMPLETO</strong>: {user?.name}
                </li>
                <li>
                  <strong>CORREO ELECTRÓNICO</strong>: {user?.email}
                </li>
                <li>
                  <strong>MÓVIL/WHATSAPP</strong>: {user?.phone}
                </li>
                <br />
                <li>
                  <strong>FECHA DEL EVENTO</strong>: {event?.data?.dateInit}{" "}
                </li>
              </ul>
            </Text>
            <Text style={text}>
              {String(user?.name).split(" ")[0]}, al momento de ir al evento
              debes presentar tu código QR que validará tu identidad, haciendole
              click a "PRESENTAR CÓDIGO QR".
              <br />
            </Text>
            <Button
              style={button}
              href={
                "https://" +
                chain?.page?.dynamic_link +
                ".cryptohuella.com/event/" +
                chain?.chain_id +
                "/" +
                event?.hash +
                "/" +
                String(user?.token)
              }
            >
              PRESENTAR CÓDIGO QR
            </Button>

            <Text style={text}>
              Este QR es infalsificable y no puede ser manipulado, solo puede
              ser consumido por quien generó el evento. Si encuentras algún
              error puedes enviarnos a través de un email a
              soporte@cryptohuella.com detallando el caso.
            </Text>

            <Text style={text}>
              Un saludo. <br />
              <br /> - Bot de Seguridad de Cryptohuella
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EventTemplate;

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
