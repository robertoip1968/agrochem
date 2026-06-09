import { createFileRoute } from "@tanstack/react-router";
import heroSpray from "@/assets/hero-spray.mp4.asset.json";
import heroFields from "@/assets/hero-fields.jpg";
import { Calendar, MapPin, Globe2, Users, Mic, ArrowRight } from "lucide-react";

import allierLogo from "@/assets/logos/organizadores/allierbrasil-pt.jpg";
import ccpLogo from "@/assets/logos/organizadores/ccp.jpg";
import abisoloLogo from "@/assets/logos/apoio/abisolo.jpg";
import anpiibioLogo from "@/assets/logos/apoio/anpiibio.jpg";
import agribrasilisLogo from "@/assets/logos/parceiros-midia/agribrasilis_en.jpg";
import agrofyLogo from "@/assets/logos/parceiros-midia/agrofy.jpg";
import agropagesLogo from "@/assets/logos/parceiros-midia/logo-agropages.jpg";
import agroperuLogo from "@/assets/logos/parceiros-midia/agroperu.jpg";
import campoNegociosLogo from "@/assets/logos/parceiros-midia/campo-negocios.jpg";
import globalAgricultureLogo from "@/assets/logos/parceiros-midia/global-agriculture.jpg";
import globalCropLogo from "@/assets/logos/parceiros-midia/global-crop-protection.jpg";
import krishakLogo from "@/assets/logos/parceiros-midia/krishakjagat.jpg";
import portalAgroChileLogo from "@/assets/logos/parceiros-midia/portal-agro-chile.jpg";
import publiagroLogo from "@/assets/logos/parceiros-midia/publiagro.jpg";
import safrasLogo from "@/assets/logos/parceiros-midia/safras.jpg";
import tierraFertilLogo from "@/assets/logos/parceiros-midia/tierra-fertil.jpg";

const organizadores = [
  { name: "Allier Brasil", src: allierLogo, href: "https://www.allierbrasil.com.br/" },
  { name: "CCPIT Sub-Council of Chemical Industry", src: ccpLogo, href: "http://www.ccpitchem.org.cn/" },
];
const apoio = [
  { name: "ABISOLO", src: abisoloLogo, href: "https://www.abisolo.com.br/" },
  { name: "ANPII Bio", src: anpiibioLogo, href: "https://anpiibio.org.br/" },
];
const parceirosMidia = [
  { name: "AgriBrasilis", src: agribrasilisLogo, href: "https://agribrasilis.com/" },
  { name: "Agrofy", src: agrofyLogo, href: "https://www.agrofy.com.br/" },
  { name: "AgroPages", src: agropagesLogo, href: "https://www.agropages.com/" },
  { name: "AgroPeru", src: agroperuLogo, href: "https://www.agroperu.pe/" },
  { name: "Campo & Negócios", src: campoNegociosLogo, href: "https://campoenegocios.com/" },
  { name: "Global Agriculture", src: globalAgricultureLogo, href: "https://www.global-agriculture.com/" },
  { name: "Global Crop Protection", src: globalCropLogo, href: "https://globalcropprotection.com/" },
  { name: "Krishak Jagat", src: krishakLogo, href: "https://www.krishakjagat.org/about-krishak-jagat/" },
  { name: "Portal Agro Chile", src: portalAgroChileLogo, href: "https://www.portalagrochile.cl/" },
  { name: "Publiagro", src: publiagroLogo, href: "https://publiagro.com.bo/" },
  { name: "Safras", src: safrasLogo, href: "https://safras.com.br/" },
  { name: "Tierra Fértil", src: tierraFertilLogo, href: "https://tierrafertil.com.mx/" },
];

type Logo = { name: string; src: string; href: string };
function LogoGrid({ items, cols = "md:grid-cols-6" }: { items: Logo[]; cols?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-4 sm:grid-cols-3 ${cols}`}>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-24 items-center justify-center rounded-xl border border-border bg-background p-4 transition hover:border-primary/40 hover:shadow-sm"
          title={item.name}
        >
          <img
            src={item.src}
            alt={item.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain opacity-80 transition group-hover:opacity-100"
          />
        </a>
      ))}
    </div>
  );
}

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
        <video
          src={heroSpray.url}
          poster={heroFields}
          autoPlay
          muted
          loop
          playsInline
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
        <div className="mx-auto max-w-7xl space-y-20 px-6 py-24">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-primary">Organizadores</p>
            <h2 className="mt-3 text-3xl font-light tracking-tight md:text-4xl">Quem realiza</h2>
            <div className="mt-8 mx-auto max-w-2xl">
              <LogoGrid items={organizadores} cols="md:grid-cols-2" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-primary">Apoio institucional</p>
            <h2 className="mt-3 text-3xl font-light tracking-tight md:text-4xl">Quem apoia</h2>
            <div className="mt-8 mx-auto max-w-2xl">
              <LogoGrid items={apoio} cols="md:grid-cols-2" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-primary">Parceiros de mídia</p>
            <h2 className="mt-3 text-3xl font-light tracking-tight md:text-4xl">Cobertura internacional</h2>
            <div className="mt-8 mx-auto">
              <LogoGrid items={parceirosMidia} cols="md:grid-cols-4 lg:grid-cols-6" />
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
