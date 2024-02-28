import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

export const OtpEmail = ({ data }) => {
  const previewText = `Nueva cuenta creada en Cryptohuella.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://i.imgur.com/nEDMn0q.png`}
                style={{ display: "block" }}
                width="80px"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[18px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>Bienvenidp(a) a Cryptohuella</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hola {data?.name},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              {" "}
              A continuación este es tu código OTP para firmar electrónicamente
              el bloque con hash{" "}
              <strong className="capitalize">
                ({String(data?.hash).substring(0, 16)})
              </strong>
              .
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong className="capitalize">Código de Seguridad</strong>
            </Text>
            <Text className="text-black text-center text-[14px] leading-[24px]">
              <strong className="capitalize">{String(data?.code)}</strong>
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Si no ha solicitado este código, por favor comunícate con nosotros
              a través de{" "}
              <span className="text-black">soporte@cryptohuella.com</span>.
            </Text>
          </Container>
          <Container>
            <Text className="text-center text-[12px] text-gray-500">
              &copy; 2024 Cryptohuella. Una creación de Emprendetec S.L.A
              (www.emprendetec.es). Todos los derechos reservados a su
              respectivos dueños. <br />
              Calle Barcelonina 2, Planta 9, Pta.17. 46002 Valencia España.{" "}
              <br />
              Av. Bella Vista Esquina Calle 80 Edificio Dohmi, 4001 Maracaibo,
              Edo. Zulia Venezuela. <br />
              3350 SW 148 Th. Suite 120 FL 33027.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default OtpEmail;
