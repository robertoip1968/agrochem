import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import logoAgrochemshow from "@/assets/logo-agrochemshow.png";
import { noticias, type Noticia } from "@/lib/noticias";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }): { noticia: Noticia } => {
    const noticia = noticias.find((n) => n.slug === params.slug);
    if (!noticia) throw notFound();
    return { noticia };
  },
  head: ({ loaderData }) => {
    const n = loaderData?.noticia;
    if (!n) return { meta: [{ title: "Notícia — Brasil AgrochemShow" }] };
    return {
      meta: [
        { title: `${n.title} — Brasil AgrochemShow` },
        { name: "description", content: n.subtitle },
        { property: "og:title", content: n.title },
        { property: "og:description", content: n.subtitle },
      ],
    };
  },
  errorComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-muted-foreground">Não foi possível carregar essa notícia.</p>
      <Link to="/noticias" className="mt-6 inline-block text-primary underline">
        Voltar para notícias
      </Link>
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-3xl font-light">Notícia não encontrada</h1>
      <Link to="/noticias" className="mt-6 inline-block text-primary underline">
        Ver todas as notícias
      </Link>
    </div>
  ),
  component: NoticiaPage,
});

function NoticiaPage() {
  const { noticia } = Route.useLoaderData();
  const idx = noticias.findIndex((n) => n.slug === noticia.slug);
  const next = noticias[(idx + 1) % noticias.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="inline-flex items-center">
            <img src={logoAgrochemshow} alt="17º Brasil AgrochemShow" className="h-[72px] w-auto" />
          </Link>
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:opacity-70"
          >
            <ArrowLeft className="h-4 w-4" /> Todas as notícias
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-primary">Notícia · {noticia.date}</p>
        <h1 className="mt-4 text-4xl font-light leading-tight tracking-tight md:text-5xl">
          {noticia.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{noticia.subtitle}</p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-foreground">
          {noticia.paragraphs.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Próxima notícia</p>
          <Link
            to="/noticias/$slug"
            params={{ slug: next.slug }}
            className="mt-3 inline-flex items-center gap-2 text-xl font-medium transition hover:opacity-70"
          >
            {next.title} <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </article>
    </div>
  );
}