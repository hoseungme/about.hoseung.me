import Link from "next/link";

export type ExperienceSectionData = {
  name: string;
  role: string;
  period: {
    start: Date;
    end: Date | null;
  };
  links: { title: string; to: string }[];
}[];

interface Props {
  data: ExperienceSectionData;
}

export function ExperienceSection({ data }: Props) {
  return (
    <section>
      <h3>Experiences</h3>
      {data.map((experience, index) => (
        <div key={index} className="item-container">
          <div className="company font-bold">{experience.name}</div>
          <div className="role font-regular">{experience.role}</div>
          <div className="period font-medium">
            {experience.period.start.valueOf()} ~{" "}
            {experience.period.end != null ? experience.period.end.valueOf() : null}
          </div>
          <ul className="buttons">
            {experience.links.map((link, index) => (
              <li key={index}>
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
