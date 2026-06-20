import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { navn, epost, telefon, enhet, melding } = await req.json();

    // Basic server-side validation
    if (!navn || !epost || !melding) {
      return NextResponse.json(
        { error: "Navn, e-post og melding er påkrevd." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(epost)) {
      return NextResponse.json(
        { error: "Ugyldig e-postadresse." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Okka Elektro <noreply@okkaelektro.no>",
      to: "post@okkaelektro.no",
      replyTo: epost,
      subject: `Ny henvendelse fra ${navn}${enhet ? ` — ${enhet}` : ""}`,
      html: `
        <div style="font-family: monospace; max-width: 560px; color: #131820;">
          <h2 style="font-size: 18px; margin-bottom: 24px;">
            Ny henvendelse via okkaelektro.no
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #57616e; width: 100px; vertical-align: top;">Navn</td>
              <td style="padding: 8px 0; font-weight: bold;">${navn}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #57616e; vertical-align: top;">E-post</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${epost}" style="color: #0ea5c4;">${epost}</a>
              </td>
            </tr>
            ${telefon ? `
            <tr>
              <td style="padding: 8px 0; color: #57616e; vertical-align: top;">Telefon</td>
              <td style="padding: 8px 0;">
                <a href="tel:${telefon}" style="color: #0ea5c4;">${telefon}</a>
              </td>
            </tr>` : ""}
            ${enhet ? `
            <tr>
              <td style="padding: 8px 0; color: #57616e; vertical-align: top;">Enhet</td>
              <td style="padding: 8px 0;">${enhet}</td>
            </tr>` : ""}
          </table>

          <hr style="border: none; border-top: 1px solid #dce0e8; margin: 24px 0;" />

          <p style="color: #57616e; margin-bottom: 8px; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase;">Melding</p>
          <p style="line-height: 1.7; white-space: pre-wrap;">${melding}</p>

          <hr style="border: none; border-top: 1px solid #dce0e8; margin: 24px 0;" />
          <p style="font-size: 11px; color: #9aa3b2;">
            Sendt via kontaktskjemaet på okkaelektro.no
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Klarte ikke sende e-post. Prøv igjen senere." },
      { status: 500 }
    );
  }
}
