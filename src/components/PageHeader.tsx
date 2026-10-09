import Link from "next/link";

export default function PageHeader({
  crumbs,
  title,
  intro,
}: {
  crumbs: { name: string; href?: string }[];
  title: string;
  intro?: string;
}) {
  return (
    <section className="page-head">
      <div className="wrap">
        <ol className="crumbs">
          {crumbs.map((c) => (
            <li key={c.name}>{c.href ? <Link href={c.href}>{c.name}</Link> : c.name}</li>
          ))}
        </ol>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}
