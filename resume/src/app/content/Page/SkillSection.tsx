export interface SkillSectionData {
  descriptions: string[];
}

interface Props {
  data: SkillSectionData;
}

export function SkillSection({ data }: Props) {
  return (
    <section>
      <h3>Skills</h3>
      <ul>
        {data.descriptions.map((description, index) => (
          <li key={index}>
            <p className="font-regular">{renderDescription(description)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function renderDescription(description: string) {
  return description.split("**").map((str, index) => {
    if (index % 2 === 1) {
      return <span key={index}>{str}</span>;
    }

    return <span key={index}>{str}</span>;
  });
}
