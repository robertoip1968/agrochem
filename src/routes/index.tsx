import { createFileRoute } from "@tanstack/react-router";
import heroFields from "@/assets/hero-fields.jpg";
import { Calendar, MapPin, Globe2, Users, Mic, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgrochemShow 2026 — Feira Internacional de Agroquímicos e Bioinsumos" },
      { name: "description", content: "3 e 4 de agosto de 2026, São Paulo. +1600 expositores e visitantes de +20 países. Palestras sobre mercado, registro, bioinsumos, China e América Latina." },
      { property: "og:title", content: "AgrochemShow 2026" },
      { property: "og:description", content: "Feira Internacional de Agroquímicos e Bioinsumos — São Paulo, 3 e 4 de agosto de 2026." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-lg font-semibold tracking-tight text-white">
            Agrochem<span className="text-white/70">Show</span>
          </div>
          <div className="hidden gap-8 text-sm text-white/80 md:flex">
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#destaques" className="hover:text-white">Destaques</a>
            <a href="#palestras" className="hover:text-white">Palestras</a>
            <a href="#parceiros" className="hover:text-white">Parceiros</a>
          </div>
          <a href="#inscricao" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/90">
            Pré-inscrição
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative isolate flex min-h-screen items-end overflow-hidden">
        <img
          src={heroFields}
          alt="Campos agrícolas vistos de cima"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-40">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur">
            Save the date · 17ª edição
          </p>
          <h1 className="max-w-4xl text-5xl font-light leading-[1.05] tracking-tight text-white md:text-7xl">
            Feira Internacional de Agroquímicos e Bioinsumos
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Dois dias dedicados ao encontro global da indústria de defensivos e bioinsumos —
            mercado, registro, meio ambiente e novas tecnologias.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#inscricao" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              Fazer pré-inscrição <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#sobre" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Conheça o evento
            </a>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section id="sobre" className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-border md:grid-cols-4">
          {[
            { icon: Calendar, label: "Quando", value: "3 e 4 de agosto, 2026" },
            { icon: MapPin, label: "Onde", value: "Centro de Eventos São Luís · São Paulo" },
            { icon: Globe2, label: "Alcance", value: "+20 países representados" },
            { icon: Users, label: "Público", value: "+1600 expositores e visitantes" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-background p-8">
              <Icon className="h-5 w-5 text-primary" />
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
              <p className="mt-2 text-base font-medium text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="destaques" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-widest text-primary">O evento</p>
            <h2 className="mt-4 text-4xl font-light leading-tight tracking-tight md:text-5xl">
              O ponto de encontro da cadeia global de agroquímicos.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Em sua 17ª edição, a AgrochemShow reúne fabricantes, distribuidores, reguladores
              e especialistas do Brasil, China, Índia, Europa e América Latina. Dois dias de
              negócios, networking qualificado e conteúdo técnico de alto nível em um único lugar.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {[
                { title: "Negócios internacionais", text: "Mais de 20 países representados em um ambiente curado para conexões reais." },
                { title: "Conteúdo técnico", text: "Painéis com líderes de mercado, regulatório, meio ambiente e bioinsumos." },
                { title: "China & América Latina", text: "Foco especial nos principais polos de produção e demanda do setor." },
                { title: "Bioinsumos", text: "Espaço dedicado às tecnologias biológicas que redefinem a agricultura." },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Palestras */}
      <section id="palestras" className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary">Programação</p>
              <h2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">Temas das palestras</h2>
            </div>
            <Mic className="hidden h-10 w-10 text-primary md:block" />
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-3">
            {[
              "Mercado de agroquímicos",
              "Registro e regulação",
              "Meio ambiente",
              "Bioinsumos",
              "China — produção e exportação",
              "América Latina — oportunidades",
            ].map((tema, i) => (
              <div key={tema} className="bg-background p-8">
                <span className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-lg font-medium">{tema}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inscrição */}
      <section id="inscricao" className="mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-3xl bg-primary px-8 py-20 text-center text-primary-foreground md:px-16">
          <h2 className="mx-auto max-w-3xl text-4xl font-light leading-tight tracking-tight md:text-5xl">
            Garanta sua presença na AgrochemShow 2026.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/80">
            Pré-inscrições abertas. Reserve seu lugar entre os principais players do setor.
          </p>
          <a
            href="https://allierbrasil.com.br/agrochemshow/inscricao.php"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-background/90"
          >
            Fazer pré-inscrição <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Parceiros */}
      <section id="parceiros" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Organização e apoio</p>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-medium">Organizadores</h4>
              <p className="mt-3 text-sm text-muted-foreground">Allier Brasil · CCPIT Sub-Council of Chemical Industry</p>
            </div>
            <div>
              <h4 className="text-sm font-medium">Apoio institucional</h4>
              <p className="mt-3 text-sm text-muted-foreground">ABISOLO · ANPII Bio</p>
            </div>
            <div>
              <h4 className="text-sm font-medium">Parceiros de mídia</h4>
              <p className="mt-3 text-sm text-muted-foreground">
                AgriBrasilis, Agrofy, AgroPages, AgroPeru, Campo &amp; Negócios, Global Agriculture,
                Global Crop Protection, Krishak Jagat, Portal Agro Chile, Publiagro, Safras, Tierra Fértil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>© 2026 AgrochemShow · Rua Luís Coelho, 323 — São Paulo, Brasil</p>
          <a href="https://allierbrasil.com.br/agrochemshow/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Site oficial ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
