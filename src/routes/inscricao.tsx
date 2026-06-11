import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import logoAgrochemshow from "@/assets/logo-agrochemshow.png";
import { enviarInscricao } from "@/lib/inscricao.functions";

export const Route = createFileRoute("/inscricao")({
  head: () => ({
    meta: [
      { title: "Pré-inscrição — 17º Brasil AgrochemShow" },
      {
        name: "description",
        content:
          "Faça sua pré-inscrição para o 17º Brasil AgrochemShow, a Feira Internacional de Agroquímicos e Bioinsumos.",
      },
      { property: "og:title", content: "Pré-inscrição — 17º Brasil AgrochemShow" },
      {
        property: "og:description",
        content:
          "Garanta sua presença no 17º Brasil AgrochemShow. Preencha o formulário de pré-inscrição.",
      },
    ],
  }),
  component: InscricaoPage,
});

const ATIVIDADES = [
  "Consultoria",
  "Cooperativa",
  "Distribuidor",
  "Formulador",
  "Importadora/Exportadora",
  "Imprensa",
  "Indústria química",
  "Marcas & Patentes",
  "Representação",
  "Revenda",
  "Transportadora",
  "Outros",
];

const PAISES = [
  "Brasil","África do Sul","Albânia","Alemanha","Andorra","Angola","Anguilla","Antigua","Arábia Saudita","Argentina","Armênia","Aruba","Austrália","Áustria","Azerbaijão","Bahamas","Bahrein","Bangladesh","Barbados","Bélgica","Benin","Bermudas","Botsuana","Brunei","Bulgária","Burkina Fasso","Butão","Cabo Verde","Camarões","Camboja","Canadá","Cazaquistão","Chade","Chile","China","Cidade do Vaticano","Colômbia","Congo","Coréia do Sul","Costa do Marfim","Costa Rica","Croácia","Dinamarca","Djibuti","Dominica","EUA","Egito","El Salvador","Emirados Árabes","Equador","Eritréia","Escócia","Eslováquia","Eslovênia","Espanha","Estônia","Etiópia","Fiji","Filipinas","Finlândia","França","Gabão","Gâmbia","Gana","Geórgia","Gibraltar","Granada","Grécia","Guadalupe","Guam","Guatemala","Guiana","Guiana Francesa","Guiné-bissau","Haiti","Holanda","Honduras","Hong Kong","Hungria","Iêmen","Ilhas Cayman","Ilhas Cook","Ilhas Curaçao","Ilhas Marshall","Ilhas Turks & Caicos","Ilhas Virgens (brit.)","Ilhas Virgens (amer.)","Ilhas Wallis e Futuna","Índia","Indonésia","Inglaterra","Irlanda","Islândia","Israel","Itália","Jamaica","Japão","Jordânia","Kuwait","Latvia","Líbano","Liechtenstein","Lituânia","Luxemburgo","Macau","Macedônia","Madagascar","Malásia","Malaui","Mali","Malta","Marrocos","Martinica","Mauritânia","Mauritius","México","Moldova","Mônaco","Montserrat","Nepal","Nicarágua","Niger","Nigéria","Noruega","Nova Caledônia","Nova Zelândia","Omã","Paraguai","Palau","Panamá","Papua-nova Guiné","Paquistão","Peru","Polinésia Francesa","Polônia","Porto Rico","Portugal","Qatar","Quênia","Rep. Dominicana","Rep. Tcheca","Reunion","Romênia","Ruanda","Rússia","Saipan","Samoa Americana","Senegal","Serra Leone","Seychelles","Singapura","Síria","Sri Lanka","St. Kitts & Nevis","St. Lúcia","St. Vincent","Sudão","Suécia","Suíça","Suriname","Tailândia","Taiwan","Tanzânia","Togo","Trinidad & Tobago","Tunísia","Turquia","Ucrânia","Uganda","Uruguai","Venezuela","Vietnã","Zaire","Zâmbia","Zimbábue",
];

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
const labelCls = "mb-1.5 block text-sm font-medium uppercase tracking-wide text-muted-foreground";

function Field({
  label,
  required,
  children,
  hint,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className={labelCls}>
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1 text-sm text-muted-foreground">{hint}</p>}
    </div>
  );
}

function InscricaoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setSending(true);
    try {
      const fd = new FormData(e.currentTarget);
      const payload = Object.fromEntries(fd.entries()) as Record<string, string>;
      await enviarInscricao({ data: payload as never });
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setErrorMsg(
        "Não foi possível enviar sua inscrição agora. Verifique os dados e tente novamente. Se o problema persistir, entre em contato com a organização.",
      );
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-2xl px-6 py-32 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
          <h1 className="mt-6 text-3xl font-light tracking-tight text-foreground md:text-4xl">
            Pré-inscrição registrada
          </h1>
          <p className="mt-4 text-muted-foreground">
            Obrigado! Recebemos seus dados (visualização local). Em breve a organização entrará em contato
            para confirmar sua inscrição no <strong>17º Brasil AgrochemShow</strong>.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao site
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAgrochemshow} alt="17º Brasil AgrochemShow" className="h-20 w-auto" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-base font-medium text-foreground/70 transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
        </div>
      </header>

      {/* Title */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <p className="text-sm uppercase tracking-widest text-primary">17º Brasil AgrochemShow</p>
          <h1 className="mt-3 text-4xl font-light tracking-tight text-foreground md:text-5xl">
            Pré-inscrição
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Preenchimento completo obrigatório. Os campos marcados com{" "}
            <span className="text-primary">*</span> são obrigatórios.
          </p>
        </div>
      </section>

      {/* Form */}
      <form onSubmit={onSubmit} className="mx-auto max-w-6xl px-6 py-12">
        {/* Dados da empresa */}
        <fieldset className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <legend className="px-2 text-base font-semibold uppercase tracking-wide text-primary">
            Dados profissionais
          </legend>
          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Empresa" required>
              <input className={inputCls} name="empresa" required />
            </Field>
            <Field label="CNPJ" required>
              <input className={inputCls} name="cnpj" required />
            </Field>
            <Field label="Nome" required>
              <input className={inputCls} name="nome" required />
            </Field>
            <Field label="CPF" required>
              <input className={inputCls} name="cpf" required />
            </Field>
            <Field label="Cargo" required>
              <input className={inputCls} name="cargo" required />
            </Field>
            <Field label="Telefone">
              <input className={inputCls} name="telefone" />
            </Field>
            <Field label="Celular" required>
              <input className={inputCls} name="celular" required />
            </Field>
            <Field label="E-mail" required hint="Para confirmação da inscrição">
              <input className={inputCls} type="email" name="email" required />
            </Field>
            <Field label="Tipo de Atividade" required hint="Atividade principal da empresa">
              <select className={inputCls} name="tipo_atividade" required defaultValue="">
                <option value="" disabled>
                  Selecione…
                </option>
                {ATIVIDADES.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Área de atuação" required>
              <input className={inputCls} name="area_atuacao" required />
            </Field>
          </div>
        </fieldset>

        {/* Endereço */}
        <fieldset className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
          <legend className="px-2 text-base font-semibold uppercase tracking-wide text-primary">
            Endereço
          </legend>
          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Endereço" required className="md:col-span-2">
              <input className={inputCls} name="endereco" required />
            </Field>
            <Field label="Complemento">
              <input className={inputCls} name="complemento" />
            </Field>
            <Field label="CEP" required>
              <input className={inputCls} name="cep" required />
            </Field>
            <Field label="Cidade" required>
              <input className={inputCls} name="cidade" required />
            </Field>
            <Field label="Estado" required>
              <input className={inputCls} name="estado" required />
            </Field>
            <Field label="País" required className="md:col-span-2">
              <select className={inputCls} name="pais" required defaultValue="Brasil">
                {PAISES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Cupom">
              <input className={inputCls} name="cupom" placeholder="Código promocional (opcional)" />
            </Field>
          </div>
        </fieldset>

        {/* Indicações */}
        <fieldset className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
          <legend className="px-2 text-base font-semibold uppercase tracking-wide text-primary">
            Indicações
          </legend>
          <p className="mt-2 text-base text-muted-foreground">
            Indique abaixo conhecidos interessados em participar.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
            {[1, 2, 3, 4].map((n) => (
              <Field key={n} label={`E-mail indicado #${n}`}>
                <input className={inputCls} type="email" name={`indicado_${n}`} />
              </Field>
            ))}
          </div>
        </fieldset>

        <div className="mt-10 flex flex-wrap items-center justify-end gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-base font-medium text-foreground transition hover:bg-muted"
          >
            Cancelar
          </Link>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending && <Loader2 className="h-4 w-4 animate-spin" />}
            {sending ? "Enviando…" : "Enviar pré-inscrição"}
          </button>
        </div>
        {errorMsg && (
          <p className="mt-4 text-center text-base text-destructive">{errorMsg}</p>
        )}
        <p className="mt-6 text-center text-base text-muted-foreground">
          “Em breve você receberá um e-mail referente à sua inscrição. Por favor, aguarde.”
        </p>
      </form>
    </main>
  );
}