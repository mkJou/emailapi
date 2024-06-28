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
  link?: string;
}

const baseUrl = `https://www.firmedigital.com`;

export const EmailTemplate = ({ link }: OtpTemplateProps) => {
  return (
    <Html>
      <Head />

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
            <Text style={text}>Hola estimado.</Text>
            <Text style={text}>
              Un nuevo certificado/credencial se ha creado con este correo.
              FirmeDigital se encarga de notificarte para que estés al tanto. Si
              deseas ver dicho certificado/credencial puedes darle al botón "Ver
              certificado/credencial".
            </Text>
            <Button style={button} href={link}>
              Ver certificado/credencial
            </Button>
            {/* <Text style={{ ...text, fontWeight: "700" }}>
              Código OTP: {String(code)}
            </Text> */}
            <Text style={text}>
              Si crees que es una transacción sospechosa, por favor comunicarte
              con nosotros a través de soporte@firmedigital.com
            </Text>

            <Text style={text}>
              Un saludo. <br />
              <br /> - Bea de FirmeDigital.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

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
