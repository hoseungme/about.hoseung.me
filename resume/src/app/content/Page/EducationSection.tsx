import Link from "next/link";

export type EducationSectionData = {
  name: string;
  period: {
    start: Date;
    end: Date;
  };
  link: { title: string; to: string };
}[];

interface Props {
  data: EducationSectionData;
}

export function EducationSection({ data }: Props) {
  return (
    <section>
      <h3>Educations</h3>
      {data.map((education, index) => (
        <div key={index} className="item-container">
          <div className="name font-bold">{education.name}</div>
          <div className="period font-medium">
            {education.period.start.valueOf()} ~ {education.period.end.valueOf()}
          </div>
          <Link className="link-to-homepage font-medium" href={education.link.to}>
            {education.link.title}
          </Link>
        </div>
      ))}
    </section>
  );
}
