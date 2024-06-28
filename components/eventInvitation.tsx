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

export const EventInvitationEmail = ({ data }) => {
  const previewText = `Has recibido una invitación a un evento.`;

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
              <strong>¡Has recibido una invitación! 🎉</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hola {data?.pName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong className="capitalize">{String(data?.name)}</strong> te ha
              invitado a participar en el evento:{" "}
              <strong className="capitalize">{String(data?.eventName)}</strong>,
              a realizarle el <strong>{String(data?.eventDate)}</strong>.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Para finalizar tu registro solo debes darle click al botón de
              abajo que lleva por nombre <strong>CONFIRMAR REGISTRO</strong>.
              ¡Así de fácil! 😲
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Este evento cuenta con la protección de FirmeDigital, al finalizar
              el proceos te enviaremos confirmando tu registro y poniendo a
              disposición el Código QR que presentarás para ingresar al evento.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-gray-900 rounded-sm text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={data?.link}
              >
                Confirmar Registro
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
              Si tienes algún inconveniente o duda puedes contactarnos a través
              de
              <span className="text-black">soporte@firmedigital.com</span>.
            </Text>
          </Container>
          <Container>
            <Text className="text-center text-[12px] text-gray-500">
              &copy; 2024 FirmeDigital. Una creación de Emprendetec S.L.A
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

export default EventInvitationEmail;

// import {
//   Body,
//   Button,
//   Container,
//   Head,
//   Html,
//   Img,
//   Link,
//   Preview,
//   Section,
//   Text,
// } from "@react-email/components";
// import * as React from "react";

// interface EventTemplateProps {
//   user?: any;
//   event?: any;
//   chain?: any;
// }

// const baseUrl = `https://www.cryptohuella.com`;

// export const EventTemplate = ({ user, event, chain }: EventTemplateProps) => {
//   return (
//     <Html>
//       <Head />
//       {/* <Preview>Dropbox reset your password</Preview> */}
//       <Body style={main}>
//         <Container style={container}>
//           <img
//             src="https://i.imgur.com/nEDMn0q.png"
//             alt="Logo"
//             title="Logo"
//             style={{ display: "block" }}
//             width="80px"
//           />

//           <Section>
//             <Text style={text}>
//               Hola {String(user?.name).split(" ")[0]}, ¿Qué tal?
//             </Text>
//             <Text style={text}>
//               Tu registro en el evento:{" "}
//               <strong>{String(event?.data?.name).toUpperCase()}</strong> se ha
//               confirmado correctamente. A continuación te daremos un pequeño
//               repaso de tu informació y la del evento.
//             </Text>
//             <Text style={text}>
//               <ul>
//                 <li>
//                   <strong>NOMBRE COMPLETO</strong>: {user?.name}
//                 </li>
//                 <li>
//                   <strong>CORREO ELECTRÓNICO</strong>: {user?.email}
//                 </li>
//                 <li>
//                   <strong>MÓVIL/WHATSAPP</strong>: {user?.phone}
//                 </li>
//                 <br />
//                 <li>
//                   <strong>FECHA DEL EVENTO</strong>: {event?.data?.dateInit}{" "}
//                 </li>
//               </ul>
//             </Text>
//             <Text style={text}>
//               {String(user?.name).split(" ")[0]}, al momento de ir al evento
//               debes presentar tu código QR que validará tu identidad, haciendole
//               click a "PRESENTAR CÓDIGO QR".
//               <br />
//             </Text>
//             <Button
//               style={button}
//               href={
//                 "https://" +
//                 chain?.page?.dynamic_link +
//                 ".cryptohuella.com/event/" +
//                 chain?.chain_id +
//                 "/" +
//                 event?.hash +
//                 "/" +
//                 String(user?.token)
//               }
//             >
//               PRESENTAR CÓDIGO QR
//             </Button>

//             <Text style={text}>
//               Este QR es infalsificable y no puede ser manipulado, solo puede
//               ser consumido por quien generó el evento. Si encuentras algún
//               error puedes enviarnos a través de un email a
//               soporte@cryptohuella.com detallando el caso.
//             </Text>

//             <Text style={text}>
//               Un saludo. <br />
//               <br /> - Bot de Seguridad de Cryptohuella
//             </Text>
//           </Section>
//         </Container>
//       </Body>
//     </Html>
//   );
// };

// export default EventTemplate;

// const main = {
//   backgroundColor: "#f6f9fc",
//   padding: "10px 0",
// };

// const container = {
//   backgroundColor: "#ffffff",
//   border: "1px solid #f0f0f0",
//   padding: "45px",
// };

// const text = {
//   fontSize: "16px",
//   fontFamily:
//     "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
//   fontWeight: "300",
//   color: "#404040",
//   lineHeight: "26px",
// };

// const button = {
//   backgroundColor: "#007ee6",
//   borderRadius: "4px",
//   color: "#fff",
//   fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
//   fontSize: "15px",
//   textDecoration: "none",
//   textAlign: "center" as const,
//   display: "block",
//   width: "210px",
//   padding: "14px 7px",
// };

// const anchor = {
//   textDecoration: "underline",
// };
