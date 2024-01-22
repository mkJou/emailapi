import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <table>
    <thead>
      <tr></tr>
    </thead>
    <tbody>
      <tr>
        <td>&nbsp;</td>
        <td className="container" width="600" valign="top">
          <div className="content">
            <span className="preheader" style={{ display: "none" }}>
              This is preheader text.
            </span>
            <table>
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="wrapper" valign="top">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <img
                        src="cryptohuella_logo.png"
                        width="30%"
                        alt=""
                      />
                    </div>
                    <p>¡Hola, estimado!</p>
                    <p>
                      Un nuevo certificado/credencial se ha creado con este
                      correo. Cryptohuella se encarga de notificarte para que
                      estés al tanto. Si deseas ver dicho certificado/credencial
                      puedes darle al botón "Ver certificado/credencial".
                    </p>
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                      minWidth="100%"
                    >
                      <tbody>
                        <tr>
                          <td align="left" valign="top">
                            <table
                              role="presentation"
                              border={0}
                              cellpadding={0}
                              cellspacing={0}
                            >
                              <tbody>
                                <tr>
                                  <td
                                    valign="top"
                                    align="center"
                                    bgColor="#0867ec"
                                  >
                                    <a
                                      href={"xd"}
                                      target="_blank"
                                      style={{
                                        display: "inline-block",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        margin: 0,
                                        padding: "12px 24px",
                                        textDecoration: "none",
                                        backgroundColor: "#0867ec",
                                        borderColor: "#0867ec",
                                        color: "#ffffff",
                                      }}
                                    >
                                      Ver Certificado/credencial
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      Si crees que es una transacción sospechosa, por favor
                      comunicarte con nosotros a través de
                      soporte@cryptohuella.com
                    </p>
                    <p>Un saludo, Bea.</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
);
