type Payload = {
  name?: string;
  company?: string;
  whatsapp?: string;
  email?: string;
  problem?: string;
  urgency?: string;
  message?: string;
};

const TO_EMAIL = "contacto@falcodevs.cl";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body: Payload = req.body || {};

  if (!body.name || !body.whatsapp || !body.email || !body.problem || !body.urgency) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return res.status(500).json({ error: "RESEND_API_KEY is not configured" });
  }

  const text = [
    "Nuevo diagnostico tecnologico solicitado",
    "",
    `Nombre: ${body.name}`,
    `Empresa: ${body.company || "No indicado"}`,
    `WhatsApp: ${body.whatsapp}`,
    `Email: ${body.email}`,
    `Principal problema: ${body.problem}`,
    `Urgencia: ${body.urgency}`,
    `Comentarios adicionales: ${body.message || "Sin comentarios"}`,
  ].join("\n");

  const fromEmail = process.env.CONTACT_FROM_EMAIL || "FalcoDevs <onboarding@resend.dev>";

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [TO_EMAIL],
      subject: "Nuevo diagnostico tecnologico solicitado",
      text,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    return res.status(502).json({ error: `Email provider error: ${errorText}` });
  }

  return res.status(200).json({ ok: true });
}
