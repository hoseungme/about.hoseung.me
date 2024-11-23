export interface ProfileSectionData {
  title: string;
  descriptions: string[];
}

interface Props {
  data: ProfileSectionData;
}

export function ProfileSection({ data }: Props) {
  return (
    <section>
      <p className="title font-bold">{data.title}</p>
      <ul className="descriptions">
        {data.descriptions.map((description, index) => (
          <li key={index}>
            <p className="font-medium">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
