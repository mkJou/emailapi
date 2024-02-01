import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";
import NextCors from "nextjs-cors";
import { OtpTemplate } from "../../components/otpTemplate";
import EventTemplate from "../../components/eventTemplate";
import EventFinishTemplate from "../../components/eventFinishTemplate";
const resend = new Resend("re_ZwvRCDxH_rCBD93udyRrSiivxEzZrjBGM");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.body;

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  let emails = [];

  if (query?.otpCode == true) {
    emails.push(query?.userInfo?.email);

    try {
      const { data, error } = await resend.emails.send({
        from: "Bot de Seguridad de Cryptohuella <seguridad@cryptohuella.com>",
        to: emails,
        subject: "Código de OTP para firma electrónica en Cryptohuella",
        react: OtpTemplate({
          code: query?.code,
          user: query?.userInfo,
          hash: query?.hash,
        }),
      });

      if (error) {
        return res.status(400).json({ error });
      }

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400).json({ error });
    }
  } else {
    if (query?.type == 0) {
      emails.push(query?.data?.email);

      try {
        const { data, error } = await resend.emails.send({
          from: "Bea de Cryptohuella <notificaciones@cryptohuella.com>",
          to: emails,
          subject:
            "Un nuevo certificado/credencial se ha emitido con tu correo electrónico.",
          react: EmailTemplate({ link: query?.data?.link }),
        });

        if (error) {
          return res.status(400).json({ error });
        }

        return res.status(200).json({ data });
      } catch (error) {
        return res.status(400).json({ error });
      }
    } else if (query?.type == 1) {
      emails.push(query?.user?.email);

      if (query?.status) {
        try {
          const { data, error } = await resend.emails.send({
            from: "Cryptohuella <eventos@cryptohuella.com>",
            to: emails,
            subject:
              String(query?.user?.name).split(" ")[0] +
              ", te damos una cordial bienvenida al evento:" +
              String(query?.event?.data?.name),
            react: EventFinishTemplate({
              user: query?.user,
              event: query?.event,
            }),
          });

          if (error) {
            return res.status(400).json({ error });
          }

          return res.status(200).json({ data });
        } catch (error) {
          return res.status(400).json({ error });
        }
      } else {
        try {
          const { data, error } = await resend.emails.send({
            from: "Cryptohuella <eventos@cryptohuella.com>",
            to: emails,
            subject:
              String(query?.user?.name).split(" ")[0] +
              ", hemos confirmado correctamente tu registro en el evento: " +
              String(query?.event?.data?.name),
            react: EventTemplate({
              user: query?.user,
              event: query?.event,
              chain: query?.chain,
            }),
          });

          if (error) {
            return res.status(400).json({ error });
          }

          return res.status(200).json({ data });
        } catch (error) {
          return res.status(400).json({ error });
        }
      }
    } else {
      Array.from(query?.data).forEach((db, index) => {
        let inf = db as any;

        emails.push({
          data: inf?.data ? { ...inf?.data, hash: inf?.hash } : inf,
          chain: query?.chain_id,
        });
      });

      let blocks = [];

      const printBlocks = async () => {
        const files = Array.from(emails);

        await Promise.all(
          files.map(async (file) => {
            let newL = [];
            let newLink =
              "https://cryptohuella.com/" +
              String(file.chain) +
              "/" +
              String(file.data.hash);
            try {
              const { data, error } = await resend.emails.send({
                from: "Bea de Cryptohuella <notificaciones@cryptohuella.com>",
                to: [String(file.data.EMAIL)],
                subject:
                  "Un nuevo certificado/credencial se ha emitido con tu correo electrónico.",
                react: EmailTemplate({ link: newLink }),
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

      return res.status(200).json(blocks);
    }
  }

  //
};
