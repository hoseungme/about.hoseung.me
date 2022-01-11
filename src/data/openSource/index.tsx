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
      name: "개발 블로그",
      links: [
        {
          label: "Link",
          link: "https://blog.hoseung.me",
        },
      ],
      summary:
        "개발을 하면서 배우고 생각한 것들을 기록으로 남겨 공유하고 있습니다.",
      articles: [
        "블로그 개발 일지: https://blog.hoseung.me/categories/bdeb0874-b9e2-4fa5-b6af-9e07b6bd97ca/posts",
      ],
    },
    {
      name: "위키",
      links: [
        {
          label: "Link",
          link: "https://hoseungjang.github.io/wiki-front",
        },
      ],
      summary:
        "개발 블로그와는 다른 성격으로, 단순 개념정리나 TIL을 작성하고 있습니다. 기억이 희미해질 때면 다시 문서를 읽어보고 수정하는 재미로 운영하고 있습니다.",
      articles: [],
    },
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
        "https://blog.hoseung.me/posts/ee03db3b-e56f-48c9-8bb9-fdfbaead95bd",
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
        "https://blog.hoseung.me/posts/416dc901-fc66-47dd-9ccf-2ce7fc263233",
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
        "https://blog.hoseung.me/posts/a0638bd6-a2be-4e3a-80d3-09936e4020b2",
        "https://blog.hoseung.me/posts/ad51f5e6-c33b-474c-968e-04e83289e6e0",
      ],
    },
  ],
};
