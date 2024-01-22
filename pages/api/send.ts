import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";
import NextCors from "nextjs-cors";
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
  } else {
    Array.from(query?.data).forEach((db, index) => {
      emails.push({
        data: db?.data ? { ...db?.data, hash: db?.hash } : db,
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

  //
};
