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

export const CredentialEmail = ({ data }) => {
  const previewText = `Has recibido un certificado de Cryptohuella.`;

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
              <strong>¡Has recibido una Credencial! 🎉</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hola Estimado Usuario,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong className="capitalize">{String(data?.name)}</strong> te ha
              enviado una credencial que se ha asociado con este correo (
              {data?.email}). Cryptohuella se encarga de notificarte para que
              estés al tanto. Si deseas ver dicha credencial puedes darle al
              botón "Ver credencial".
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-gray-900 rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={data?.link}
              >
                Ver Credencial
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              O copie y pegue esta URL en su navegador: <br />
              <Link
                href={data?.link}
                className="text-blue-600 text-xs no-underline"
              >
                {data?.link}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Si crees que es una transacción sospechosa, por favor comunícate
              con nosotros a través de{" "}
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

export default CredentialEmail;
