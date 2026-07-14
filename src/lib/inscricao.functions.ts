import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InscricaoSchema = z.object({
  empresa: z.string().min(1).max(255),
  cnpj: z.string().min(1).max(32),
  nome: z.string().min(1).max(255),
  cpf: z.string().min(1).max(32),
  cargo: z.string().min(1).max(255),
  telefone: z.string().max(64).optional().default(""),
  celular: z.string().min(1).max(64),
  email: z.string().email().max(255),
  tipo_atividade: z.string().min(1).max(128),
  area_atuacao: z.string().min(1).max(255),
  endereco: z.string().min(1).max(255),
  complemento: z.string().max(255).optional().default(""),
  cep: z.string().min(1).max(32),
  cidade: z.string().min(1).max(128),
  estado: z.string().min(1).max(128),
  pais: z.string().min(1).max(128),
  cupom: z.string().max(64).optional().default(""),
  indicado_1: z.string().max(255).optional().default(""),
  indicado_2: z.string().max(255).optional().default(""),
  indicado_3: z.string().max(255).optional().default(""),
  indicado_4: z.string().max(255).optional().default(""),
});

export type InscricaoInput = z.infer<typeof InscricaoSchema>;

function esc(v: string) {
  return String(v ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );
}

function buildOrganizerHtml(d: InscricaoInput) {
  const rows: [string, string][] = [
    ["Empresa", d.empresa],
    ["CNPJ", d.cnpj],
    ["Nome", d.nome],
    ["CPF", d.cpf],
    ["Cargo", d.cargo],
    ["Telefone", d.telefone || "-"],
    ["Celular", d.celular],
    ["E-mail", d.email],
    ["Tipo de Atividade", d.tipo_atividade],
    ["Área de atuação", d.area_atuacao],
    ["Endereço", d.endereco],
    ["Complemento", d.complemento || "-"],
    ["CEP", d.cep],
    ["Cidade", d.cidade],
    ["Estado", d.estado],
    ["País", d.pais],
    ["Cupom", d.cupom || "-"],
    ["Indicado 1", d.indicado_1 || "-"],
    ["Indicado 2", d.indicado_2 || "-"],
    ["Indicado 3", d.indicado_3 || "-"],
    ["Indicado 4", d.indicado_4 || "-"],
  ];
  return `
    <h2 style="font-family:Arial,sans-serif;color:#111">Nova pré-inscrição — 17º Brasil AgrochemShow</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="border:1px solid #ddd;background:#f6f6f6"><strong>${esc(k)}</strong></td><td style="border:1px solid #ddd">${esc(v)}</td></tr>`,
        )
        .join("")}
    </table>
  `;
}

function buildConfirmationHtml(d: InscricaoInput) {
  return `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.5">
      <h2>Recebemos sua pré-inscrição</h2>
      <p>Olá ${esc(d.nome)},</p>
      <p>Sua pré-inscrição para o <strong>17º Brasil AgrochemShow</strong> foi recebida com sucesso.</p>
      <p>Em breve nossa equipe entrará em contato para confirmar sua participação. Por favor, aguarde.</p>
      <p style="margin-top:24px;color:#555">Atenciosamente,<br/>Organização AgrochemShow</p>
    </div>
  `;
}

export const enviarInscricao = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => InscricaoSchema.parse(data))
  .handler(async ({ data }) => {
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
      MAIL_FROM,
      MAIL_TO_ORGANIZER,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !MAIL_TO_ORGANIZER) {
      throw new Error(
        "Configuração de e-mail ausente. Defina SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_FROM e MAIL_TO_ORGANIZER nas variáveis de ambiente do servidor.",
      );
    }

    const nodemailer = await import("nodemailer");
    const createTransport = (nodemailer as any).default?.createTransport ?? (nodemailer as any).createTransport;
    const transporter = createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: String(SMTP_SECURE).toLowerCase() === "true",
      family: 4,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      tls: {
        servername: SMTP_HOST,
      },
      connectionTimeout: 30000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    });

    const organizerHtml = buildOrganizerHtml(data);
    const confirmationHtml = buildConfirmationHtml(data);

    // Notificação para o organizador
    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO_ORGANIZER,
      replyTo: data.email,
      subject: `Nova pré-inscrição — ${data.nome} (${data.empresa})`,
      html: organizerHtml,
    });

    // Confirmação para o inscrito
    await transporter.sendMail({
      from: MAIL_FROM,
      to: data.email,
      subject: "Pré-inscrição recebida — 17º Brasil AgrochemShow",
      html: confirmationHtml,
    });

    return { ok: true };
  });