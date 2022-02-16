export interface OpenSourceData {
  openSources: {
    name: string;
    links: { label: string; link: string }[];
    summary: string;
    articles: string[];
  }[];
}

export const openSourceData: OpenSourceData = {
  openSources: [
    {
      name: "typed-express",
      links: [
        {
          label: "Github",
          link: "https://github.com/HoseungJang/typed-express",
        },
      ],
      summary:
        "Node.js 웹 프레임워크 Express.js를 fully-typed하게 사용하고, 라우트를 순회하여 스펙을 읽고 OpenAPI Specification을 자동 생성해주는 프로젝트",
      articles: [
        "https://blog.hoseung.me/2021-12-22-fully-typed-backend",
      ],
    },
    {
      name: "request-typer",
      links: [
        {
          label: "Github",
          link: "https://github.com/HoseungJang/request-typer",
        },
      ],
      summary:
        "백엔드에서 API를 스펙을 정의하기 위한 JSON Schema Builder, 타입 Validatior, OpenAPI Specification Builder 라이브러리 프로젝트",
      articles: [
        "https://blog.hoseung.me/2021-12-18-request-typer",
      ],
    },
    {
      name: "oas-api-client",
      links: [
        {
          label: "Github",
          link: "https://github.com/HoseungJang/oas-api-client",
        },
      ],
      summary:
        "OpenAPI Specification을 받아서 API Client SDK를 자동 생성해주는 프로젝트",
      articles: [
        "https://blog.hoseung.me/2021-05-01-api-client-sdk",
        "https://blog.hoseung.me/2021-03-27-open-api-specification",
      ],
    },
  ],
};
