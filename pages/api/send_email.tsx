import type { NextApiRequest, NextApiResponse } from "next";
// import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";
import NextCors from "nextjs-cors";
import NormalEmail, { CertificateEmail } from "../../components/certificate";
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
                to: String(file?.email),
                subject: String("Certificado #") + file?.hash,
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

      // try {
      //   const { data, error } = await resend.emails.send({
      //     from: "Notificación de Cryptohuella <notificacion@cryptohuella.com>",
      //     to: "joalexint@gmail.com",
      //     subject: emailInfo?.title,
      //     react: NormalEmail({ data: dataArray, emailInfo: emailInfo }),
      //   });

      //   if (error) {
      //     return res.status(400).json({ error });
      //   }

      //   console.log("listo", data);
      //   // return res.status(200).json({ data });
      // } catch (error) {
      //   return res.status(400).json({ error });
      // }
    },
  };

  emails[String(template)]();
};
