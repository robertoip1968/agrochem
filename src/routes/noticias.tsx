import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — 17º Brasil AgrochemShow" },
      { name: "description", content: "Releases e notícias do 17º Brasil AgrochemShow." },
      { property: "og:title", content: "Notícias — 17º Brasil AgrochemShow" },
      { property: "og:description", content: "Releases e notícias do 17º Brasil AgrochemShow." },
    ],
  }),
  component: () => <Outlet />,
});

export { Link };