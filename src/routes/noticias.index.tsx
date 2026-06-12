import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import logoAgrochemshow from "@/assets/logo-agrochemshow.png";
import { noticias } from "@/lib/noticias";

export const Route = createFileRoute("/noticias/")({
  component: NoticiasIndex,
});

function NoticiasIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="inline-flex items-center">
            <img src={logoAgrochemshow} alt="17º Brasil AgrochemShow" className="h-[72px] w-auto" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:opacity-70"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-primary">Notícias</p>
        <h1 className="mt-4 text-4xl font-light leading-tight tracking-tight md:text-5xl">
          Releases e novidades do AgrochemShow
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Acompanhe os principais releases do 17º Brasil AgrochemShow — temas
          das palestras, empresas participantes e bastidores do evento.
        </p>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {noticias.map((n) => (
            <article key={n.slug} className="grid gap-6 py-10 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <p className="text-sm uppercase tracking-widest text-muted-foreground">{n.date}</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-2xl font-medium leading-tight md:text-3xl">{n.title}</h2>
                <p className="mt-3 text-base text-muted-foreground">{n.subtitle}</p>
                <Link
                  to="/noticias/$slug"
                  params={{ slug: n.slug }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:opacity-70"
                >
                  Ler notícia <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}