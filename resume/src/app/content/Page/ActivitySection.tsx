import Link from "next/link";

export type ActivitySectionData = {
  title: string;
  links: { title: string; to: string }[];
}[];

interface Props {
  data: ActivitySectionData;
}

export function ActivitySection({ data }: Props) {
  return (
    <section>
      <h3>Activities</h3>
      {data.map(({ title, links }, index) => (
        <div key={index}>
          <div className="description font-regular">{title}</div>
          <ul className="buttons">
            {links.map((link) => (
              <li key={link.title}>
                <Link className="link font-medium" href={link.to}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
