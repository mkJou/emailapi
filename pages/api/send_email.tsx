import type { NextApiRequest, NextApiResponse } from "next";
// import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";
import NextCors from "nextjs-cors";
import NormalEmail, { CertificateEmail } from "../../components/certificate";
import NewUserInternal from "../../components/newUserInternal";
import CredentialEmail from "../../components/credential";
import OtpEmail from "../../components/otpEmail";
import EventInvitationEmail from "../../components/eventInvitation";
// import { OtpTemplate } from "../../components/otpTemplate";
// import EventTemplate from "../../components/eventTemplate";
// import EventFinishTemplate from "../../components/eventFinishTemplate";
const resend = new Resend("re_ZwvRCDxH_rCBD93udyRrSiivxEzZrjBGM");
// import { Button, Tailwind } from '@react-email/components';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { template, dataArray, emailInfo } = req.body;

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  let emails = {
    certiticate_notification: async () => {
      let blocks = [];

      const printBlocks = async () => {
        const files = Array.from(dataArray?.users);

        await Promise.all(
          files.map(async (file) => {
            let newL = [];

            try {
              const { data, error } = await resend.emails.send({
                from: "Notificación de Cryptohuella <notificaciones@cryptohuella.com>",
                to: String(file["email"]),
                subject:
                  String("Certificado #") +
                  String(file["hash"]).substring(0, 8),
                react: CertificateEmail({ data: file }),
              });

              if (error) {
                return res.status(400).json({ error });
              }

              blocks.push({ data });
            } catch (error) {
              return res.status(400).json({ error });
            }
          })
        );
      };

      const loadDocuments = await printBlocks();

      return res.json(blocks);
    },
    credential: async () => {
      let blocks = [];

      const printBlocks = async () => {
        const files = Array.from(dataArray?.users);

        await Promise.all(
          files.map(async (file) => {
            let newL = [];

            try {
              const { data, error } = await resend.emails.send({
                from: "Notificación de Cryptohuella <notificaciones@cryptohuella.com>",
                to: String(file["email"]),
                subject:
                  String("Credencial #") + String(file["hash"]).substring(0, 8),
                react: CredentialEmail({ data: file }),
              });

              if (error) {
                return res.status(400).json({ error });
              }

              blocks.push({ data });
            } catch (error) {
              return res.status(400).json({ error });
            }
          })
        );
      };

      const loadDocuments = await printBlocks();

      return res.json(blocks);
    },
    new_user_internal: async () => {
      let blocks = [];

      const printBlocks = async () => {
        const files = Array.from(dataArray?.users);

        await Promise.all(
          files.map(async (file) => {
            let newL = [];

            try {
              const { data, error } = await resend.emails.send({
                from: "Notificación de Cryptohuella <notificaciones@cryptohuella.com>",
                to: String(file["email"]),
                subject:
                  String(file["chain_name"]) +
                  ", te informa que ha sido creada una cuenta nueva asociada al correo: " +
                  String(file["email"]),
                react: NewUserInternal({ data: file }),
              });

              if (error) {
                return res.status(400).json({ error });
              }

              blocks.push({ data });
            } catch (error) {
              return res.status(400).json({ error });
            }
          })
        );
      };

      const loadDocuments = await printBlocks();

      return res.json(blocks);
    },
    otp: async () => {
      let blocks = [];

      const printBlocks = async () => {
        const files = Array.from(dataArray?.users);

        await Promise.all(
          files.map(async (file) => {
            let newL = [];

            try {
              const { data, error } = await resend.emails.send({
                from: "Seguridad de Cryptohuella <notificaciones@cryptohuella.com>",
                to: String(file["email"]),
                subject: "Código de OTP para firma digital en Cryptohuella",
                react: OtpEmail({ data: file }),
              });

              if (error) {
                return res.status(400).json({ error });
              }

              blocks.push({ data });
            } catch (error) {
              return res.status(400).json({ error });
            }
          })
        );
      };

      const loadDocuments = await printBlocks();

      return res.json(blocks);
    },
    event_invitation: async () => {
      let blocks = [];

      const printBlocks = async () => {
        const files = Array.from(dataArray?.users);

        await Promise.all(
          files.map(async (file) => {
            let newL = [];

            try {
              const { data, error } = await resend.emails.send({
                from: "Notificación de Cryptohuella <notificaciones@cryptohuella.com>",
                to: String(file["email"]),
                subject:
                  String(file["name"]) +
                  " te ha invitado al evento:" +
                  String(file["eventName"]),
                react: EventInvitationEmail({ data: file }),
              });

              if (error) {
                return res.status(400).json({ error });
              }

              blocks.push({ data });
            } catch (error) {
              return res.status(400).json({ error });
            }
          })
        );
      };

      const loadDocuments = await printBlocks();

      return res.json(blocks);
    },
  };

  emails[String(template)]();
};
