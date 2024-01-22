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

  emails.push(query?.data?.email);

  try {
    const { data, error } = await resend.emails.send({
      from: "Bea de Cryptohuella <notificaciones@cryptohuella.com>",
      to: emails,
      subject:
        "Un nuevo certificado/credencial se ha emitido con tu correo electrónico.",
      react: EmailTemplate({ link: query?.data?.link }),
    });
    console.log();
    if (error) {
      res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};
