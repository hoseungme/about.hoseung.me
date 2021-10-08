# CATCH FASHION
### 주요 프로덕트
- [CATCH FASHION](https://www.catchfashion.com)

### 기술 스택
- 공통
  - Typescript

- Front-end
  - React

- Back-end
  - Node.js
  - AWS
  - MSA
  - Serverless

---

## 목차

- [활동 리스트](#활동-리스트)
  - [RxJS로 렌더링 성능 개선 (2021.09)](#rxjs로-렌더링-성능-개선-202109)

  - [catch-fake.com 개발 (2021.08 ~ 2021.09)](#catch-fakecom-개발-202108--202109)

  - [상품 리스트 UX 개선 (2021.07)](#상품-리스트-ux-개선-202107)

  - [상품리스트 페이지에 카테고리 셀렉터 추가 (2021.07)](#상품리스트-페이지에-카테고리-셀렉터-추가-202107)

  - [세일 페이지 프론트엔드 / 백엔드 개발 (2021.07)](#세일-페이지-프론트엔드--백엔드-개발-202107)

  - [파트너사 URL 검색 개발 (2021.06)](#파트너사-URL-검색-개발-202106)

  - [Lighthouse CI 퍼포먼스 점수 개선 (2021.06)](#lighthouse-ci-퍼포먼스-점수-개선-202106)

  - ['컬렉션' 개발 (2021.05)](#컬렉션-개발-202105)

  - [마케팅팀 리뷰 알리미 개발 (2021.05)](#마케팅팀-리뷰-알리미-개발-202105)

  - [모달 페이지 스크롤 유지 기능 개발 (2021.05)](#모달-페이지-스크롤-유지-기능-개발-202105)

  - [리테일러 프로모션 포스트들을 '이동 후 구매' 페이지에 노출 (2021.04)](#리테일러-프로모션-포스트들을-이동-후-구매-페이지에-노출-202104)

  - ['쇼핑하기' 페이지 프론트엔드 / 백엔드 개발 (2021.04)](#쇼핑하기-페이지-프론트엔드--백엔드-개발-202104)

  - [moment.js를 dayjs로 마이그레이션 (2021.03)](#momentjs를-dayjs로-마이그레이션-202103)

  - ['이동 후 구매' 페이지 프론트엔드 / 백엔드 개발 (2021.02)](#이동-후-구매-페이지-프론트엔드--백엔드-개발-202102)

  - [프론트엔드의 복잡한 로직을 백엔드로 분리 (2021.02)](#프론트엔드의-복잡한-로직을-백엔드로-분리-202102)

  - [Visual Regression Test 도입 (2021.02)](#visual-regression-test-도입-202102)

  - [프로모션 페이지 프론트엔드 / 백엔드 개발 (2021.01)](#프로모션-페이지-프론트엔드--백엔드-개발-202101)

  - [클라이언트 사이드 캐싱 도입 (2021.01)](#클라이언트-사이드-캐싱-도입-202101)

  - [상품 사이즈 매핑 개선 (2020.12)](#상품-사이즈-매핑-개선-202012)

  - [상품 상세보기 페이지 리팩토링 (2020.10)](#상품-상세보기-페이지-리팩토링-202010)

  - [상품 태그 시스템 도입 (2020.09)](#상품-태그-시스템-도입-202009)

  - [상품 리스트 리뉴얼 (2020.08)](#상품-리스트-리뉴얼-202008)

- [문제 해결](#문제-해결)
  - [Lighthouse CI가 실패하는 문제 (2021.06)](#lighthouse-ci가-실패하는-문제-202106)

  - [synchronization 작업 중 상품을 반복해서 refetch 하는 문제 (2021.06)](#synchronization-작업-중-상품을-반복해서-refetch-하는-문제-202106)

  - [AWS Lambda에 query string으로 array를 전달할 때의 문제 (2021.05)](#aws-lambda에-query-string으로-array를-전달할-때의-문제-202105)

  - [히스토리 변경 시 스크롤 유지가 안되는 문제 (2021.04)](#히스토리-변경-시-스크롤-유지가-안되는-문제-202104)

  - [상품 리스트에서 스크롤 유지가 안되는 문제 (2021.03)](#상품-리스트에서-스크롤-유지가-안되는-문제-202103)

  - [네이밍 컨벤션 도입 (2021.01)](#네이밍-컨벤션-도입-202101)

  - [Chrome의 Back/Forward Cache 관련 문제 (2020.10)](#chrome의-backforward-cache-관련-문제-202010)

---

## 활동 리스트
### RxJS로 렌더링 성능 개선 (2021.09)

- **설명**
  - react-router의 RouterContext, useLocation을 프론트엔드 곳곳에서 사용하고 있었습니다.

  - RouterContext나 useLocation은 history가 변경될 때마다 리렌더링을 일으키는데, 그걸 쓰지 않아도 되는 경우에도 사용하는 케이스가 많이 있었습니다.

  - 필요하지 않은 경우를 찾아서 사용을 없애거나 컴포넌트를 분리하고, RxJS를 도입해서 필요할 때만 리렌더링 되도록 개선했습니다.

- **작업 내용 & 배운 점**
  - 자세한 내용은 [개선 과정을 정리한 글](https://blog.hoseung.me/posts/ab8363df-6066-4f4d-af13-efbe8364f771)을 참고해주세요.

- [목차로 가기](#목차)

### catch-fake.com 개발 (2021.08 ~ 2021.09)

![](/images/experience/catch-fashion/catch-fake-og.png)
![](/images/experience/catch-fashion/catch-fake1.png)
![](/images/experience/catch-fashion/catch-fake2.png)
![](/images/experience/catch-fashion/catch-fake3.png)
![](/images/experience/catch-fashion/catch-fake4.png)
![](/images/experience/catch-fashion/catch-fake5.png)

- **설명**
  - 캐치패션 하반기 광고 랜딩 페이지를 개발했습니다.

- **작업 내용 & 배운 점**
  - catch-fake.com 을 catchfashion.com/catch-fake로 리다이렉트 시켰습니다.

    - AWS의 S3와 CloudFront를 활용했고, CDK로 인프라 구축을 자동화하고 테스트코드를 작성했습니다.

    - 인프라 구축과 관련한 테스트코드는 처음 작성해 보았는데, 실수가 치명적인 부분인 만큼, 인프라 구축 자동화 도구들이 테스트도 잘 제공하는지 알아보는 것도 중요하다고 느꼈습니다.

  - 명품 테스트 기능을 개발했습니다.

    - 먼저 interface로 미리 준비된 질문/답변 트리를 데이터로 어떻게 옮길지 형식을 정의했습니다.
      ```typescript
      interface QuestionNode {
        type: "question";
        question: string;
        answers: AnswerNode[];
      }

      interface DescriptionNode {
        type: "description";
        /* ... */
      }

      interface ResultNode {
        type: "result";
        /* ... */
      }

      interface AnswerNode {
        type: "answer";
        answer: string;
        next: QuestionNode | DescriptionNode | ResultNode;
      }
      ```

        - 즉, 질문 화면에서 답변을 선택하면, AnswerNode.next의 type을 확인해서 다음에 어떤 컴포넌트를 렌더링할지 결정하게 됩니다.

          ```typescript
          switch (nextNode.type) {
            case "question": {
              return <Question {...nextNode}>;
            }
            case "description": {
              return <Description {...nextNode}>;
            }
            case "result": {
              return <Result {...nextNode}>;
            }
          }
          ```

    - 테스트를 한 단계씩 진행할 때마다 location의 hash 값을 수정해서 앞 / 뒤로 돌아가거나, 맨 처음으로 리셋할 수 있도록 했습니다.

      ```typescript
      const { back } = useContentHistoryContext();
      return <button onClick={back}></button>
      ```

  - video 엘리먼트를 처음 다뤄보았습니다.

    - 2번째 섹션에서 순차적인 동영상 재생이 필요했는데, mp4 파일들을 S3에 업로드 했습니다.

    - iOS에서 비디오 자동 재생을 차단시켜버리는 문제가 있었는데, [New <video> Policies for iOS](https://webkit.org/blog/6784/new-video-policies-for-ios/)를 참고해서 해결했습니다.

      - 자동재생이 허용되는 조건이 몇가지 있는데, 그 중 muted, autoplay, playsinline 세 가지 attribute를 모두 true로 설정하는 방법을 택했습니다.

    - canplaythrough 이벤트를 활용해서 비디오를 재생시켰습니다.
    
      - canplay 같은 다른 이벤트도 있지만, [MDN 문서](https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement/canplaythrough_event)에 따르면 canplaythrough는 컨텐츠를 중단 없이 재생할 수 있다고 예상되는 시점에 발생되는 이벤트이기 때문에, 유저가 최대한 끊김없이 페이지를 읽을 수 있게 하기 위해서 사용했습니다.

  - Redis를 활용하여 사이트의 방문자수를 간단히 트래킹할 수 있도록 API를 추가했습니다.

    - [INCR](https://redis.io/commands/INCR) 문서를 참고해서, counter 패턴으로 활용했습니다.

    - 개인 프로젝트를 할 때, 이러한 단순 counter와 비슷한 기능에 DynamoDB와 TTL 기능을 사용했었는데, Redis가 DynamoDB에 비해 들여야하는 리소스 크기와 속도 면에서 효율적일 것 같다고 느꼈습니다.

  - Lambda@Edge를 활용해서 catch-fake의 Open Graph 데이터를 렌더링했습니다.

    - 캐치패션 사이트는 CSR을 기반으로 하고 있기 때문에, Lambda@Edge를 사용해서 SEO나 Open Graph 같은 것들을 처리해주고 있습니다.

    - 따라서 조건을 추가해서 /catch-fake/* 로 요청이 들어온 경우를 따로 처리해줬습니다.

      ```typescript
      if (request.uri.starsWith("/catch-fake")) {
        return renderMeta({
          /* ... */
        });
      }
      ```

- [목차로 가기](#목차)

### 상품 리스트 UX 개선 (2021.07)

- **설명**
  - 유저가 상품 리스트와 빠르고 자연스럽게 인터랙션할 수 있도록 UX를 개선했습니다.

- **작업 내용 & 배운 점**
  - 상품 리스트에 prefetch를 적용했습니다.

    - enablePrefetchNext 옵션이 true인 경우, 다음 요청을 미리 실행하고 그 요청의 Promise를 cache map에 담았습니다.

    - 그 후 실제로 loadMore function이 실행됬을 때, prefetch된 Promise가 있는 경우 그걸 await하고, 아닌 경우 새로운 요청을 보내도록 만들었습니다.
    ```typescript
    const prefetchedQuery = queryCache.get(key) ?? null; // Promise<OperationResult> | null
    const result = prefetchedQuery
      ? (await prefetchedQuery)
      : (await fetch(operationId, params));
    ```

  - prefetch를 통해 상품 데이터는 미리 불러올 수 있었지만, 이미지 로딩을 따로 기다려야 하는 문제가 있었습니다.

    - onPrefetchSuccess 옵션을 만들어서, prefetch가 성공한 경우 result를 onPrefetchSuccess 인자로 넘겨줬습니다.
    ```typescript
    queryCache.set(
      key,
      prefetch(operationId, params).then((result) => {
        options.onPrefetchSuccess?.(result);
        return result;
      }),
    );
    ```

    - 그리고 상품 이미지들도 prefetch 해줬습니다.
    ```typescript
    {
      onPrefetchSuccess: (products) => {
        products.forEach((product) => {
          const image = new Image();
          image.src = product.coverImage;
        });
      }
    }
    ```
  
  - 결과적으로 prefetch를 통해 UX와 퍼포먼스에 긍정적인 효과를 얻었습니다.

    - 기존에는 다음 리스트를 불러올 때마다 로딩 skeleton을 띄워주었는데, 유저가 스크롤을 할 때마다 기다리는 시간들은 결코 짧지 않다고 생각했고, 동시에 수많은 skeleton을 렌더링 하면서, skeleton의 animation들도 한꺼번에 실행됬기 때문에 퍼포먼스 저하도 꽤 크게 느껴졌습니다.

    - 그런데 이번 작업에서 상품 데이터와 이미지들을 prefetch 함으로써 유저가 지체없이 다음 상품 리스트를 확인할 수 있게 되었고, 그에 따라 skeleton도 웬만해선 띄우지 않을 수 있게 되어서 상품 리스트 페이지의 퍼포먼스도 꽤나 좋아진 것을 확인할 수 있었습니다.

- [목차로 가기](#목차)

### 상품리스트 페이지에 카테고리 셀렉터 추가 (2021.07)

![](/images/experience/catch-fashion/product-list-category-selector-desktop.png)
![](/images/experience/catch-fashion/product-list-category-selector-mobile.png)

- **설명**
  - 유저가 카테고리 상품 리스트 페이지에서 상위 카테고리를 변경하려면, 다시 쇼핑하기 페이지로 돌아가야 한다는 불편함이 있었습니다.

  - 따라서 상위 카테고리 선택을 상품 리스트에서 바로 할 수 있도록 만들었습니다.

- **작업 내용 & 배운 점**
  - 데스크탑에서 카테고리 셀렉터가 열려있을 때, 셀렉터 바깥 부분을 클릭하면 닫히는 로직을 적용했습니다.

    - 그런데 이 로직이 프론트엔드 내에서 많이 중복되어 작성되고 있던 로직이었습니다. 예를 들면, 상품리스트 필터를 열었을 때 다른 곳을 누르면 닫히도록 하는 로직도 중복이었습니다.

    - 따라서 useOnClickOutsideOfElement hook을 만들어서 중복을 제거했습니다.

      - parameter로 onClick 콜백을 넘기도록 만들어서, 타겟 엘리먼트의 외부가 클릭되는 경우에 실행될 로직을 설정할 수 있도록 만들었습니다.

      - 이렇게 외부 클릭을 감지하는 코드는 재사용하고, onClick function을 parameter로 받아서 특정 로직에 제한되지 않게 함으로써, 여러 요구사항에 대응할 수 있습니다. 또한 hook 사용자는 외부 클릭이 발생했을 때 실행될 로직 자체에만 집중할 수 있게됩니다.

- [목차로 가기](#목차)

### 세일 페이지 프론트엔드 / 백엔드 개발 (2021.07)

![](/images/experience/catch-fashion/sale-desktop-1.png)
![](/images/experience/catch-fashion/sale-desktop-2.png)
![](/images/experience/catch-fashion/sale-mobile-1.png)
![](/images/experience/catch-fashion/sale-mobile-2.png)

- **설명**
  - 세일과 관련된 정보를 모아서 보여주는 페이지를 개발했습니다.

- **작업 내용 & 배운 점**
  - 세일 페이지에 보여줄 컬렉션과 관련된 백엔드 작업을 진행했습니다.

    - 최신순으로 세일 상품, 세일 카테고리, 세일 스타일을 불러와서 타겟을 생성하고, 해당 타겟을 포함시킨 컬렉션을 주기적으로 생성하는 cron job을 추가했습니다.

    - 유저가 최근에 본 세일 상품, 세일 카테고리, 세일 스타일을 기반으로 타겟을 생성하고, 해당 타겟을 통해서 컬렉션을 찾아 응답하는 개인화 로직을 추가했습니다.

  - 페이지마다 달라지는 카테고리 리스트 / 브랜드 리스트 디자인을 위한 데이터 포맷을 새롭게 추가했습니다.

    - 기존의 카테고리 / 브랜드 JSON에 decoration 프로퍼티를 추가한 버전을 하나 만들어서, API 별로 부가 데이터를 다르게 적용할 수 있게 했습니다.

    - 세일 페이지와 마찬가지로, 쇼핑하기 페이지에서도 해당 포맷을 재사용해서 데이터를 렌더링할 수 있었습니다.

  - 리스트 스크롤 관련 중복 로직을 useScrollX hook을 만들어서 제거했습니다.

    - 리스트를 x축으로 scroll하는 로직이 이전부터 프론트엔드 코드 내에 꽤나 많이 중복되어 작성되고 있었고, 이번 작업에서도 마찬가지였습니다.

    - generic으로 HTML 엘리먼트의 타입(HTMLDivElement, HTMLUListElement 등)을 받고, ref object와 scrollToLeft 같은 function, isLeftScrollable 같은 scrollable state 등등 스크롤과 관련된 기본적인 것들을 리턴하도록 했습니다.

    - 결과적으로, 기존에 코드 내에 존재했던 모든 중복 로직을 제거할 수 있었습니다.

- [목차로 가기](#목차)

### 파트너사 URL 검색 개발 (2021.06)

![](/images/experience/catch-fashion/search-by-retailer-url-desktop-1.png)
![](/images/experience/catch-fashion/search-by-retailer-url-desktop-2.png)
![](/images/experience/catch-fashion/search-by-retailer-url-mobile-1.png)
![](/images/experience/catch-fashion/search-by-retailer-url-mobile-2.png)

- **설명**
  - 유저가 파트너사에서 사고 싶은 상품을 이미 찾았을 때, 캐치패션 사이트 내에서 해당 상품을 찾아 가격을 비교해보고 싶은 경우가 있습니다.

  - 해당 파트너사의 상품 페이지 URL을 복사해서 캐치패션 검색 페이지에 붙여넣으면, 해당 상품 상세보기 페이지로 이동하는 기능을 개발했습니다.

- **작업 내용 & 배운 점**
  - 단계별로 컴포넌트와 비즈니스 로직을 나누었습니다.

    - Validating, Crawling, Failed 세 단계로 나누었습니다.
    
      - Validating: 유저가 입력한 것이 올바른 URL인지 검사하는 단계입니다.

      - Crawling: 유저가 입력한 URL의 상품이 캐치패션 내에 존재하는지 검색하는 단계입니다.

      - Failed: 검색에 실패했거나, 결과가 없는 경우에 해당하는 단계입니다.

    - 유저에겐 같은 화면이 렌더링되지만 내부적으로는 다른 컴포넌트가 렌더링되고, 각각의 컴포넌트에서 알맞은 hook이 실행되도록 설계했습니다.

      - React에서 hook은 conditional하게 실행하는 것이 불가능하므로, 그걸 회피하기 위해 컴포넌트를 활용한 설계입니다.

      - 결과적으로 순차적으로 코드를 읽어갈 수 있어 가독성이 좋아졌고, 각 단계에 알맞는 역할을 확실하게 분리할 수 있었습니다. 또한 새로운 단계가 추가되거나, 기존의 단계가 분리되는 경우에도 확장이 용이합니다.

- [목차로 가기](#목차)

### Lighthouse CI 퍼포먼스 점수 개선 (2021.06)

- **설명**
  - Lighthouse CI의 퍼포먼스 점수를 개선했습니다.

- **작업 내용 & 배운 점**
  - 3rd party Javascript 로딩을 개선했습니다.
    - HTML script 태그의 async / defer 속성을 이해하고, 적용했습니다.

    - link 태그의 preconnect 기능을 활용해서 빠른 다운로드 시작이 가능해지도록 했습니다.

  - 사이트 전체적으로 lazy rendering이 필요한 곳을 찾아 적용했습니다.

  - web.dev의 [Efficiently load third-party JavaScript](https://web.dev/efficiently-load-third-party-javascript/)를 참고했습니다.

- [목차로 가기](#목차)

### '컬렉션' 개발 (2021.05)

![](/images/experience/catch-fashion/collection-desktop.png)
![](/images/experience/catch-fashion/collection-brand-desktop.png)
![](/images/experience/catch-fashion/collection-mobile.png)

- **설명**
  - 개인화, 프로모션 등에 사용할 '컬렉션'을 도입했습니다.

- **작업 내용 & 배운 점**
  - AWS Lambda Edge를 활용해서 실시간으로 이미지를 처리하는 구조를 배웠습니다.

    - 리사이징, 트랜스폼 등 다양한 처리가 가능하고, 처리 후엔 CloudFront CDN에 캐싱됩니다.

  - 컬렉션dml 렌더링 로직을 재사용 가능한 컴포넌트인 SingleCollection으로 분리했습니다.

    - withPlaceholder function을 사용해 suspense가 적용된 higher-order component로 만들었습니다.

      - Suspense 컴포넌트로 묶어주는 방식보다 훨씬 깔끔하고, 다른 코드에서도 withPlaceholder의 재사용이 가능합니다.

    - viewed, clicked, item clicked 등 여러 종류의 트래킹을 위한 데이터가 필요했습니다.

      - 각각의 이벤트의 데이터를 각각 전부 준비해서 넘겨주기 보단, 공통된 부분을 CollectionTrackMetadataCommon interface로 정의하고, useSingleCollectionTrack hook을 만들어서 SingleCollection 컴포넌트 내부에서만 사용하게 했습니다.

      - SingleCollection 컴포넌트 사용자는, 트래킹을 위한 세부 데이터와 구현은 신경쓸 필요 없이 간략한 공통 데이터만 넘겨주면 되기 때문에 사용이 쉬워졌습니다.

- [목차로 가기](#목차)

### 마케팅팀 리뷰 알리미 개발 (2021.05)

- **설명**
  - 사내 대부분의 팀 업무는 [아사나](https://asana.com/ko)를 통해서 관리되고 있습니다.

  - 기존에는 태스크를 "In Review" 섹션으로 넘긴 후 슬랙에서 직접 리뷰 요청을 다시 보내는 방식으로 업무를 진행하고 있었습니다.

  - 따라서 태스크가 In Review 섹션으로 넘어갔을 때 자동으로 슬랙에 알려주는 기능이 있으면 좋을 것 같아 시작하게 되었습니다.

- **작업 내용 & 배운 점**
  - 아사나에서 제공하는 [웹훅](https://developers.asana.com/docs/webhooks)을 활용해서 개발했습니다.
    - 태스크가 섹션에 추가되는 이벤트만 받도록 하는 필터가 추가된 웹훅을 수립했습니다.

    - 마크다운을 파싱해서 [BlockKit](https://api.slack.com/block-kit) blocks로 바꿔주는 함수를 만들고, Incoming Webhook을 사용해서 슬랙에 메시지를 보내도록 했습니다.

      - 정규표현식을 적극 활용했습니다. 정규표현식을 사용하지 않을 때보다 코드가 훨씬 깔끔하고, webhook 서비스 내부에 마크다운 파싱이 필요한 기능이 많이 존재하기 때문에, 한번 정규표현식을 만들어 두면 다른 곳에서 재사용할 수 있는 장점도 있었습니다.

  - [p-limit](https://www.npmjs.com/package/p-limit)등을 통해 Promise.all 등에서 동시성에 제한을 두는 방식을 적용했습니다.

    - webhook 서비스는 개발팀에서만 주로 사용되므로, Lambda function의 메모리 할당량과 timeout을 낮게 잡아둔 상태입니다.

    - Promise.all을 사용하는 코드가 webhook 서비스 내부에 꽤 많이 존재하는데, serverless 프레임워크에서 제공하는 커맨드를 통해 로그를 살펴본 결과, 이러한 동시성 제한 덕분에 기존 대비 메모리 사용량을 안정적으로 유지할 수 있었습니다.

- [목차로 가기](#목차)

### 모달 페이지 스크롤 유지 기능 개발 (2021.05)

- **설명**
  - 검색 페이지의 경우 모달로 구현되어 있습니다. 즉, 스크롤이 window 레벨에서 이루어지지 않습니다.

  - 따라서 뒤로가기를 해서 돌아가도 스크롤이 복구되지 않고, 직접 복구하는 코드를 작성해줘야 했습니다.

- **작업 내용 & 배운 점**
  - 스크롤 위치를 추적할 컴포넌트를 지정할 수 있게 하고, 해당 컴포넌트에 스크롤 이벤트 리스너를 추가해서 스크롤 포지션을 캐싱했습니다.

    - Map을 활용했고, window.location.pathname을 key로 두었습니다.

  - /search/:query 내에서 query가 변경되더라도 상품 리스트가 unmount 되지 않는 문제가 있었습니다.

    - 이전 페이지에서의 상태가 잠시 남아있기 때문에 스크롤 복구에 지장을 주고 있었습니다.

    - 이는 ProductList 컴포넌트의 key로 query를 넣어서 해결했습니다.

- [목차로 가기](#목차)

### 리테일러 프로모션 포스트들을 '이동 후 구매' 페이지에 노출 (2021.04)

![](/images/experience/catch-fashion/outlink-promotion-desktop.png)
![](/images/experience/catch-fashion/outlink-promotion-mobile.png)

- **설명**
  - 기존에 모든 포스트들은 캐치태그 페이지에서만 확인할 수 있었는데, 전체 유저를 통틀어 캐치태그 페이지의 방문율이 없다시피 할 정도로 매우 낮았습니다.

  - 또한 Matchesfashion, 24S 등의 리테일러들이 진행하는 프로모션을 포스트로 작성해서 유저들에게 노출시키면, 그게 뭔지 알고 있는 유저들은 애초에 '이동 후 구매' 페이지를 거쳐 아웃링크만 하는 유저들이 대부분입니다.

  - 따라서 리테일러 프로모션과 관련된 포스트들은 '이동 후 구매' 페이지에서 노출시키도록 변경했습니다.

- **작업 내용 & 배운 점**
  - keen-slider를 사용해서 슬라이더 UI를 간단히 구현할 수 있었습니다.

  - 간단한 백엔드 작업을 진행했습니다.

    - '이동 후 구매' 페이지에 노출되는 포스트들을 다른 것들과 분리하기 위해서 새로운 포스트 Type을 추가했습니다.

    - 포스트는 태그에 의해 검색되는데, '이동 후 구매' 페이지에서 사용할 태그를 추가했습니다.

- [목차로 가기](#목차)

---

### '쇼핑하기' 페이지 프론트엔드 / 백엔드 개발 (2021.04)

![](/images/experience/catch-fashion/browse-desktop.png)
![](/images/experience/catch-fashion/browse-mobile.png)

- **설명**
  - 기존에 사이트 상단 헤더에 존재했던 카테고리 리스트와 브랜드 리스트 페이지를 '쇼핑하기' 페이지로 통합시켰습니다.

- [목차로 가기](#목차)

---

### moment.js를 dayjs로 마이그레이션 (2021.03)

- **설명**
  - [Google Lighthouse CI](https://developers.google.com/web/tools/lighthouse)를 통해 확인한 결과, moment.js의 용량 낭비가 매우 심했습니다. (14KB 중 미사용 용량이 9KB)

  - moment.js의 API가 매우 광범위하기 때문에 사용하지 않는 기능도 불가피하게 불러오게 되는 문제였습니다.

  - 그리고 moment.js가 미지원 유지보수 상태로 전환된지 꽤나 오랜시간이 흘렀기 때문에 다른 라이브러리로 넘어갈 필요가 있었습니다.

- **작업 내용 & 배운 점**
  - 우선 코드상에서 moment.js가 어떻게 사용되고 있는지 모든 use case를 문서화하여 정리하였습니다.

  - 그리고 [You Don't Need Momentjs](https://github.com/you-dont-need/You-Dont-Need-Momentjs)를 통해서 다른 라이브러리들을 조사했습니다.
    - 다른 라이브러리들을 moment.js와 한눈에 비교해볼 수 있었습니다.

    - 위에서 정리했던 use case들을 모두 커버할 수 있는지에 대해 쉽게 파악할 수 있었습니다.

  - 위의 조사 결과를 바탕으로, 아래와 같은 이유로 dayjs를 선택했습니다.
    - dayjs의 인터페이스는 moment.js와 거의 완전히 일치하는 수준이었고, 공식 documentation에서도 moment.js에서 매우 쉽게 마이그레이션 할 수 있는 점을 장점으로 소개하고 있었습니다. 따라서 팀원들이 새로운 라이브러리를 도입함으로써 투자해야하는 학습 비용을 줄일 수 있다고 생각했습니다.

    - 또한 이 작업을 시작한 근본적인 이유가 moment.js의 전체 API 중 사용하지 않는 것들이 너무 큰 용량을 차지하기 때문이었는데, dayjs는 라이브러리들 중 가장 용량이 작다는 장점이 있었습니다. 그리고 dayjs는 매우 기본적인 기능을 제외하고는 plugin으로 따로 분리되어 있기 때문에, 필요한 기능만 골라서 추가할 수 있다는 점이 moment.js와 다른 큰 장점이라고 생각했습니다.

    - 그리고 이렇게 작은 사이즈로도 저희의 모든 moment.js use case들을 큰 수정 없이 커버할 수 있었기 때문에, 아주 좋은 선택이라고 생각했습니다.

  - 간단한 작업이었지만, 특정 기술을 마이그레이션 하는 과정에 대해 경험해볼 수 있었습니다.
    - 이런 마이그레이션 과정에서 했던 모든 생각과 결론들을 문서화하는 것이 작업 내용을 잘 모르는 팀원들에게 큰 도움이 된다는 것을 알았습니다.

    - 새로운 기술을 접할 때 어떤 것들이 고려되어야 하는지 스스로 고민해볼 수 있는 좋은 기회였던 것 같습니다.

- [목차로 가기](#목차)

---

### '이동 후 구매' 페이지 프론트엔드 / 백엔드 개발 (2021.02)

![](/images/experience/catch-fashion/outlink-desktop.png)
![](/images/experience/catch-fashion/outlink-mobile.png)

- **설명**
  - 기존에 '이동 후 구매' 페이지와 할인코드 페이지가 따로 분리되어 있었는데, 그것을 하나로 합쳤습니다.

- **작업 내용 & 배운 점**
  - UI 변경에 따라 할인쿠폰에 추가적인 데이터가 필요해졌습니다.

    - 할인쿠폰 데이터는 구글 스프레드시트에 어드민이 넣어놓은 것들을 백엔드에서 읽어와서 가공한 후 응답하는 방식이었습니다.

    - 스프레드시트에 컬럼을 추가하여 데이터를 삽입하고, 백엔드 로직을 수정했습니다.

    - 항상 데이터베이스를 활용하는 방법만 생각했었는데, 경우에 따라 스프레드시트같은 외부 도구를 유연하게 활용하는 것도 때로는 좋은 방법일 수 있다고 느꼈습니다.

  - Viewport의 Width에 따라서 맨 오른쪽 엘리먼트들을 하나씩 아래로 내려줘야 했는데, flex 레이아웃으로 구현하기가 상당히 까다로웠습니다.

    - flex-flow: row wrap을 설정한 후 space-between를 사용하여 해결할 수 있었지만, 마지막 줄의 정렬이 왼쪽부터 쌓아나가는 정렬이 아니라는 문제가 있었습니다.

    - stackoverflow의 [이 답변](https://stackoverflow.com/a/31478004)을 참고하여 height가 0인 엘리먼트들로 빈 공간을 채워넣어서 해결할 수 있었습니다.
  
  - 기존에 메인 페이지에서 바로 리테일러로 이동이 가능했는데, 그 기능을 없애는 AB 테스트를 도입했습니다.

    - 기능을 없앤 버전('이동 후 구매' 페이지를 통해서만 가능하도록) (20%)

      - 기존 80% 대비 구매 전환률, 사이트 이용 수치 등 통계적으로 긍정적인 부분이 많이 상승했습니다.

    - 기존 버전 (80%)

- [목차로 가기](#목차)

---

### 프론트엔드의 복잡한 로직을 백엔드로 분리 (2021.02)

- **설명**
  - 상품 상세보기 페이지의 복잡한 렌더링 로직이 상당히 복잡했습니다.

  - 그걸 IOS를 개발할 때도 똑같이 작성해야 하는게 유의미하지 않다고 느껴졌고, 백엔드로 옮겨서 간소화할 수 있는 부분은 옮기는게 좋다고 생각했습니다.

- **작업 내용 & 배운 점**
  - 로직 분리의 범위에 대해 고민해볼 수 있었습니다.

    - 확실하게 옮길 수 있는 부분과 옮기는게 불가능하거나 복잡한 부분을 구분했습니다.

  - 올바른 데이터 포맷과 효율적인 요청 / 응답 프로세스에 대해 고민해볼 수 있었습니다.

    - 프론트엔드에 어떻게 응답해야 렌더링이 가능한지, 어떻게 응답해야 로직이 단순화될 수 있는지, 지금보다 로직을 개선할 수는 없을지 등 여러 조건을 놓고 이야기하여 데이터 포맷을 결정해 나갔습니다.

    - 원래 분리된 로직을 위한 별개의 API(getVariationGroups)를 하나 만들기로 했지만, 요청의 병렬화가 불가능했고, 애초에 모든 데이터(getProduct, getVariationGroups)가 로딩되어야 렌더링이 가능했기 때문에 getProduct에 합쳐서 한번에 로딩하는 방식으로 변경했습니다.

- [목차로 가기](#목차)

---

### Visual Regression Test 도입 (2021.02)

![](/images/experience/catch-fashion/visual-regression-test.png)

- **설명**
  - 작업 중에 의도치 않게 생긴 UI 변경을 인지하지 못하고 프로덕션에 배포되거나, 변경된 UI의 Before / After를 한눈에 비교하기가 힘든 문제가 있었습니다.

  - 위의 문제들을 해결하기 위해서 PR에서 변경사항을 한눈에 확인할 수 있게 Visual Regression Test를 도입해보기로 했습니다.

  - 기존에 팀에서 [Storybook](https://storybook.js.org/)을 사용하고 있었기 때문에, [Chromatic](https://www.chromatic.com/)을 연결하여 성공적으로 도입할 수 있었습니다.

- **작업 내용 & 배운 점**
  - Dependency Injection과 같은 의존성 관리 패턴의 중요성을 생각해볼 수 있는 계기가 되었습니다.

    - Swift로 IOS앱을 개발할 때는 각각의 컴포넌트에 API Response를 주입해주는 방식이라서 Mocking을 통한 스크린샷 촬영이 매우 간단했습니다.

    - 하지만 프론트엔드는 react-query의 useQuery Hook을 사용해서 동적으로 데이터를 fetch하고 있었기 때문에 여러 문제가 많았습니다.

  - 좋은 개발자 경험과 인터페이스에 대해 고민해볼 수 있었습니다.

    - 테스트코드를 작성하는 일이 팀원들에게 너무 어려워서는 안된다고 생각했습니다.

    - 따라서 팀원들에게 적절하게 추상화된 좋은 인터페이스를 제공하기 위해 helper 함수들을 만들며 테스트코드 작성 과정을 간소화하려 노력했습니다.

  - Docker같은 가상화 플랫폼을 사용한 일관된 환경 구축의 중요성을 배웠습니다.

    - Mac, Linux같은 환경 차이 때문에 가상 브라우저에서 스크린샷이 다르게 찍히는 문제가 있었습니다.

    - 이를 Docker를 사용한 가상화를 통해 해결했고, 결과적으로 크로스 플랫폼 이슈와 그런 상황을 해결하는 경험을 해볼 수 있었습니다.

  - 자세한 내용은 [도입 과정을 정리한 글](https://blog.hoseung.me/posts/83b91deb-55a5-404b-bf86-ab56b746a69f)에서 확인하실 수 있습니다.

- [목차로 가기](#목차)

---

### 프로모션 페이지 프론트엔드 / 백엔드 개발 (2021.01)

![](/images/experience/catch-fashion/promotion-list-desktop.png)
![](/images/experience/catch-fashion/promotion-list-mobile.png)

- **설명**
  - 기존에 카드사 프로모션을 진행할 때의 문제점은, 한 사람이 여러 카드를 같은 프로모션에 등록할 수 있다는 점이었습니다.
  
  - 따라서 프로모션 신청을 마이페이지에 연결시켜서 한 사람당, 그리고 한 프로모션 당 하나의 카드만 등록할 수 있게 제한하는 작업이 필요했습니다.

- **작업 내용 & 배운 점**
  - DynamoDB의 기본 사용법을 알 수 있었습니다.

    - 사내 라이브러리를 사용해서 테이블을 정의하고, serverless framework를 통해 권한을 부여하고 배포했습니다.
  
  - BDD 방식의 테스트코드를 작성해볼 수 있었습니다.

    - BDD는 Behavior-Driven-Development의 약자이고, 시나리오를 기반으로 한 테스트코드를 작성하는 방식입니다.

    - 유저 입장에서 나올 수 있는 유효한 시나리오들을 자세히 생각해볼 수 있고, 이는 실제 유저가 인터랙션하는 시나리오이기 때문에 여러 예외 상황에 대비할 수 있었습니다.
    
    - 또한, 이러한 테스트코드는 나중에 해당 기능을 처음 작업하는 개발자 입장에서도 빠른 코드 이해에 도움이 된다는 것을 느꼈습니다.

    - 예시
      ```javascript
      // Given (updatePromotionApplications 작업에서)
      describe("updatePromotionApplications", () => {
        // When (유저가 프로모션 신청 정보를 가지고 있지 않으면)
        context("When user doesn't have applications", () => {
          // Then (새롭게 정보를 생성해라)
          it("should create a new one", () => {
            /* ... */
          });
        });
      });
      ```
  
  - 데이터의 포맷, 가공 방식 등에 대해 고민해볼 수 있었습니다.

    - 카드사 프로모션은 여러개가 함께 발생하는 경우가 없었습니다. (많으면 3 ~ 4개 정도)

      - 따라서 유저의 신청 정보 각각을 따로 매치시키는 것 보다, 하나의 배열로 묶어서 한번에 주고받는 방식을 택했습니다.
        ```javascript
        {
          userId: "장호승",
          applications: [/* 신청 정보들 */]
        }
        ```
      - 또한 카드사 프로모션은 자주 발생하지도 않기 때문에, 프로모션의 정보는 프론트엔드 내에서 관리하는 방식을 택했습니다.
    
    - 프론트엔드에서 중복 방지와 깔끔한 컴포넌트 코드를 위해 프로모션 정보를 적합한 포맷으로 가공하는 작업이 필요했습니다.

      - [lodash](https://www.npmjs.com/package/lodash) 라이브러리를사용해서 매우 깔끔하게 진행할 수 있었습니다.
      
      - 예시
        ```javascript
        // lodash wrapper 생성
        _.chain(promotions)
          // isActive 포함한 형태로 가공
          .map((promotion) => {
            /* ... */
            if (!isActive) {
              return null;
            }
            return { ...promotion, isActive }
          })
          // falsy한 값들을 전부 삭제 (위에서 null 리턴한 값들)
          .compact()
          // 프로모션 시작일, 프로모션 종료 여부를 기준으로 정렬
          .sortBy(
            ({ isActive }) => (isActive ? 0 : 1),
            ({ period }) => -period.start.valueOf()
          )
          // lodash wrapper 벗기고 값으로 전달
          .value();
        ```

- [목차로 가기](#목차)

---

### 클라이언트 사이드 캐싱 도입 (2021.01)
- **설명**
  - 기존에는 [react-query](https://www.npmjs.com/package/react-query)를 사용해서 메모리 캐싱만 하고 있었습니다.

  - 하지만 응답 데이터의 변동이 없거나, 변동 빈도가 매우 낮은 API도 첫 접속시에는 요청이 보내진다는 단점이 있었습니다.

  - 따라서 indexedDB, local storage를 사용한 클라이언트 사이드 캐싱을 도입했습니다.

    - 클라이언트 사이드 캐싱을 허용한 API들에 대해, 요청을 보내기 전 캐싱된 데이터가 있는지 확인하도록 하였습니다.

- **작업 내용 & 배운 점**
  - 자바스크립트의 비동기 처리에 대해 되짚어볼 수 있었습니다.

    - indexedDB를 사용하는 경우, 렌더링까지 시간이 매우 오래걸리는 문제가 있었습니다.

    - setTimeout과 performance를 사용해서 퍼포먼스를 측정해보았고, 초기 로딩시 많은 비동기 작업이 발생하기 때문에 indexedDB를 작업도 함께 느려진 것으로 파악됬습니다.

    - 기존에는 indexedDB를 우선적으로 사용하고 미지원시에 local storage를 사용하도록 구현했었지만, 초기 비동기 작업량으로 인한 퍼포먼스 저하로 인해 indexedDB를 제외하고, 완전히 동기적으로 작동하는 local storage만 사용하도록 하여 배포했습니다. 근본적인 해결을 못한 것에 대한 아쉬움이 있습니다.

  - local storage 관련한 여러 예외 상황을 알 수 있었습니다.
    - [해당 이슈에 대해 정리한 글](https://blog.hoseung.me/posts/2925d9a4-584d-4a0a-b467-022abc7ca584)
  
  - stale-while-revalidate의 개념을 알 수 있었습니다.

    - 클라이언트 사이드 캐싱을 도입하면서 react-query wrapper의 인터페이스도 함께 수정해야 했습니다.

    - cacheTime과 staleTime 옵션의 동작과 차이가 헷갈려서 찾아보면서, [여기](https://tools.ietf.org/html/rfc5861#section-3.1)서 stale-while-revalidate에 대해 알아볼 수 있었습니다.
  
  - OOP에 익숙하지 않아 몰랐던 디자인 패턴들을 배울 수 있었습니다.

    - 완전히 똑같은 인터페이스지만, 구현이 각각 indexedDB, local storage로 서로 달랐기 때문에 어댑터 패턴이라는 것을 사용해서 깔끔하게 해결할 수 있었습니다.

    - 클래스를 인스턴스화하는 방식에 대해 리뷰를 진행하면서 싱글톤 패턴과 팩토리 패턴에 대해 알 수 있었습니다. 중복 initialization이 필요하지 않은 경우, 한번만 인스턴스를 생성하여 공유할 수 있다는 점이 편했고, 인스턴스 생성을 캡슐화할 수 있다는 점이 깔끔하고 좋았습니다.

- [목차로 가기](#목차)

---

### 상품 사이즈 매핑 개선 (2020.12)
- **설명**
  - 백엔드에서 상품의 사이즈를 매핑할 때 정확한 매핑에 실패하는 경우, 적당히 그럴듯한 사이즈와 매핑하여 응답하고 있었습니다.

  - 그래서 주문하기 전 장바구니에서는 매핑되기 전 기존 사이즈를 그대로 노출하고 있었지만, 확인하지 못한 사용자가 문의를 보내는 일이 있었습니다.

  - 정확한 매핑에 실패하면, 기존 사이즈 데이터를 그대로 리턴하도록 변경하여 개선했습니다.

- **작업 내용 & 배운 점**
  - 사이즈 매핑을 위한 tokenization과 정렬, 정규표현식을 사용한 문자열 추출과 replace 등 여러 방법을 생각하고 적용하며 실험해볼 수 있었습니다.

### 상품 상세보기 페이지 리팩토링 (2020.10)

![](/images/experience/catch-fashion/product-detail.png)

- **설명**
  - 상품 페이지의 UI를 개선하고, 내부 코드를 리팩토링 했습니다.

- **작업 내용 & 배운 점**
  - 기존에 하나의 Hook에서 상품 페이지의 렌더링에 필요한 거의 모든 데이터를 가공하고 있었습니다.

    - 그걸 여러 개의 Hook으로 분리하는 작업을 하면서, 구성요소들 간 책임 분리의 중요성을 배웠습니다.

  - '캐치구매', '이동 후 구매' 라는 두 가지 탭이 생겨남에 따라, 상품의 variation을 두 가지 형태의 variation으로 재가공해야 했는데, 상당히 고전했습니다.

    - 각각의 탭에서 보여주는 데이터는 선택된 사이즈에 따라서 변화합니다.

    - 이 때 특정 탭에서 보여줄 데이터가 0개인 경우 나머지 탭의 내용만 노출해야 했는데, 그것과 관련된 심각한 이슈 때문에 핫픽스만 3번 했었습니다.

      - 그 문제들은 근본적으로 UI(탭)와 그에 필요한 데이터(variation)가 완전히 분리되어있어서 생긴 문제였습니다.

      - 따라서 아래와 같이 UI와 데이터를 합쳐 문제를 해결했습니다.
        ```typescript
        const tabs = useMemo(() => [
          variations1.length > 0 && { label: "캐치구매", variations: variations1 },
          variations2.length > 0 && { label: "이동 후 구매", variations: variations2 },
        ], [variations1, variations2]);
        ```

      - 탭과 관련된 상태관리, 렌더링 로직이 매우 깔끔하고 단순해졌고, 서로 연관된 데이터인지 구분하고, 그것들을 그룹핑하는 것의 필요성을 배웠습니다.

- [목차로 가기](#목차)

---

### 상품 태그 시스템 도입 (2020.09)

![](/images/experience/catch-fashion/product-tag.png)

- **설명**
  - 기존의 관련 상품 리스트에서는 같은 카테고리 내의 상품들을 보여주고 있었습니다.

  - 따라서, 조금 더 세밀한 상품 추천을 위해 태그 시스템을 도입했습니다.

    - 예를 들어 "발렌시아가 스피드러너"에 속하는 상품들이 같은 태그를 갖게 하면, 해당 상품들의 페이지에서는 같은 태그에 속한 상품들만 관련 상품 리스트에 나오게 됩니다.

  - 어드민들이 상품과 태그를 관리할 수 있도록 어드민 페이지에 쿼리 빌더 UI를 추가했습니다.

    - 예를 들어, "발렌시아가 스피드러너" 제품군에 속하는 상품들을 태그에 추가 하고 싶으면, 아래와 같은 쿼리를 만들면 됩니다.
    ```
    AND
      (BrandId) is (발렌시아가)
      (CategoryIds) includesOneOf ("여성/신발", "남성/신발")
      (Description) matchesOneOf ("speed", "스피드", "스피드러너")
    ```

- **작업 내용 & 배운 점**
  - 컴포넌트를 재사용 가능하며 조립 가능한 형태로 설계하는 것이 많이 어려웠습니다.

    - AND, OR operator는 모든 operator들(includesOneOf, is 등등)을 자식으로 가질 수 있고, 이는 AND, OR 끼리 중첩될 수 있음을 의미했습니다.

    - 즉, AND, OR operator를 기준으로 같은 렌더링 로직을 수행하면 된다는 것을 깨달았고, 컴포넌트를 재귀적으로 호출하는 구조로 해결할 수 있었습니다.

  - 기존의 카테고리 기반 추천 시스템과 새로운 태그 기반 추천 시스템을 비교하는 A/B 테스트를 진행했습니다.

    - 새롭게 도입한 기능이 기존 대비 얼마나 의미있는지 실제 로깅되는 데이터를 통해 비교하는 경험을 해볼 수 있었고, 유저 트래킹의 중요성을 깨달아 제 개인 프로젝트에도 도입해볼 수 있었습니다.

- [목차로 가기](#목차)

---

### 상품 리스트 리뉴얼 (2020.08)

![](/images/experience/catch-fashion/product-list.png)
![](/images/experience/catch-fashion/search-result.png)

- **설명**
  - 상품 리스트 페이지, 검색 결과 페이지에 완전히 새로운 디자인을 적용했습니다.

- **작업 내용 & 배운 점**
  - 당시 프론트엔드 개발이 처음이어서 CSS 문법과 React 사용법 등에 익숙하지 못했습니다.

    - 그래서 기본적인 기술들을 빠르게 익히기 위해서 개인 시간을 많이 투자했던 것 같습니다.

    - flex 레이아웃, 미디어 쿼리, React Hooks, Context 등에 익숙해질 수 있었습니다.

  - 필터 구현이 상당히 어려웠습니다. 특정 상황에 필터를 숨기는 작업이나, 필터 하이라이트 작업 등이 필요했는데, 생각보다 많은 예외 상황이 있어서 고전했던 것 같습니다.

    - 그런 복잡한 UI 데이터를 처음 다뤄보면서, "사용자 입장에서 특정 기능이 어떤 상황에 어떻게 동작해야 좋은가?"라는 주제에 대해 많이 생각해볼 수 있었던 것 같습니다.
  
  - 기존에는 검색어와 연관된 카테고리 리스트를 렌더링 할 때 대표 이미지가 필요하지 않았는데, UI가 변경되면서 이미지가 필요해졌습니다.

    - 카테고리가 대표 이미지를 필요로 하는 경우는 검색 페이지 뿐이었기 때문에 테이블 구조를 고쳐서 카테고리마다 대표 이미지를 부여하는 것은 너무 비효율적이었습니다.

    - 기존에는 API gateway에서 카테고리 데이터를 그대로 응답하고 있었는데, 카테고리마다 맨 첫 번째 상품의 이미지를 대표 이미지로 추가해서 응답하도록 수정하여 해결했습니다.

    - MSA에서 API Gateway가 일반적으로 수행하는 역할에 대해 배웠습니다.

- [목차로 가기](#목차)

---

## 문제 해결
### Lighthouse CI가 실패하는 문제 (2021.06)

- **설명**
  - Lighthouse CI가 계속 실패하는 문제가 있었습니다.

- **원인**
  - Lighthouse CI 가이드에서 제공하는 방법을 따라 Lighthouse server를 Heroku에 배포해서 사용하고 있었습니다.

    - Heroku에 배포할 때 빌드 결과를 저장할 용도의 PostgreSQL 인스턴스가 하나 붙게 되는데, 빌드 결과가 쌓이다보면 무료 용량 한도가 초과되어서 CI가 실패하는 것이었습니다.

- **해결**

  - deleteOldBuildsCron 옵션을 통해서 7일 이상 지난 빌드 결과물은 삭제하도록 설정해서 해결했습니다.

- **배운 점**

  - cron job을 설정하기 위한 crontab 작성법에 대해 간단히 배웠습니다.

- [목차로 가기](#목차)

### synchronization 작업 중 상품을 반복해서 refetch 하는 문제 (2021.06)

- **설명**
  - 상품은 주기적으로 synchronize되지 않고, 유저가 상품을 봤을 때 sync job이 실행됩니다.

    - 이 때, 서버는 클라이언트에게 완료 예상 시점을 응답합니다.
    
    - 그리고 클라이언트는 서버가 넘겨준 완료 예상 시점에 다시 요청을 보내서 sync job이 완료되었는지 확인합니다.

  - 이 때, sync job이 모두 완료될 때까지 상품이 반복적으로 refetch되는 문제가 있었습니다.

- **원인**
  - sync job이 끝났는지 확인하는 요청을 보낼 때마다 상품도 함께 refetch하고 있었습니다.

- **해결**
  - sync job이 모두 끝난 후, 모든 sync job이 성공한 경우에만 상품을 refetch 하도록 수정했습니다.

    - 기존에는 sync job status를 확인하는 요청에 대해 refetchInterval 옵션 (일정 시간마다 refetch하는 옵션) 을 설정해서 refetch가 실행되게 하고 있었습니다.

    - 그런데 이 경우 일정 주기마다 요청을 다시 보내는 경우가 아니라, 서버에서 보내주는 시간에 맞춰서 요청을 다시 보내는 것이기 때문에 정해진 주기가 없고, 단순히 일정 시간 후에 요청을 다시 보내는 경우이므로, refetchInterval은 부적합하다고 생각하여 setTimeout을 사용하도록 변경했습니다.

- **배운 점**

  - interval과 timeout의 적합한 활용 케이스에 대해 고민해볼 수 있었습니다.

- [목차로 가기](#목차)

### AWS Lambda에 query string으로 array를 전달할 때의 문제 (2021.05)

- **설명**
  - query string으로 array를 전달하는 방식은 아래와 같이 다양합니다.
    - ```
      1. ?a=1&a=2
      2. ?a[]=1&a[]=2
      3. ?a[0]=1&a[1]=2
      4. ?a=[1,2]
      ```
  
  - 하지만 1, 2번 같은 케이스에서 event.queryStringParameters에 값이 전부다 전달되지 않는 문제가 있었습니다.

- **원인**
  - API Gateway에서 HTTP request를 파싱해서 Lambda 함수에 전달하는 단계의 문제였습니다.

  - queryStringParameters는 아래와 같이 key의 경우 맨 마지막 key-value 쌍만 들어가게 됩니다.
    - ```
      ?a[]=1&a[]=2 으로 요청하면
      {
        queryStringParameters: {
          "a[]": "2"
        }
      }
      ```
  
  - 따라서 클라이언트가 query string으로 전달한 배열의 맨 마지막 값만 백엔드 라우터로 전달되고 있었습니다.

- **해결**
  - event.multiValueQueryStringParameters를 queryStringParameters와 함께 사용해서 해결했습니다.

  - 자세한 해결 과정은 아래의 링크를 참조해주세요.
  
  - [해결 과정](https://blog.hoseung.me/posts/d202b504-b369-434b-b6bc-4f0afe89e56b)

- **배운 점**
  - array를 query string으로 전달하는 방법과, API Gateway가 그걸 어떻게 파싱하는지에 대해서 자세히 알아볼 수 있었습니다.

- [목차로 가기](#목차)

### 히스토리 변경 시 스크롤 유지가 안되는 문제 (2021.04)

- **설명**
  - 사이트 내부에서 히스토리 변경 시 스크롤이 무조건 맨 위로 가버리는 문제가 있었습니다.

- **원인**
  - react-router에서 히스토리에 변경이 일어났을 때 스크롤 관련된 연산을 하지 않습니다.

  - 그래서 history.listen으로 히스토리가 변경될 시 무조건 맨 위로 스크롤 하도록 만들었던 코드가 문제였습니다.

- **해결**
  - 히스토리 변경 액션이 POP이 아닌 경우에만 스크롤을 맨 위로 올리도록 수정했습니다. (POP 액션일 때는 브라우저에 의해 스크롤이 복구되는데 영향을 주지 않도록)

    - ```typescript
      const history = useHistory();

      useEffect(() => {
        const unlisten = history.listen(() => {
          if (history.action !== "POP") {
            window.scrollTo(0, 0);
          }
        });

        return unlisten();
      }, [history]);
      ```

- **배운 점**
  - 히스토리 관련 작업을 할 때에는 꼭 액션을 고려해야 한다는 점을 배웠습니다.

  - React에서 리렌더링과 스크롤 복구가 연관점이 있을 수 있다는 것을 알았습니다.

    - 기존에 이 문제가 일어나지 않았던 이유가, React Context를 통해 사용하던 global state가 히스토리가 변경될 때마다 무조건 업데이트되던 버그가 있었기 때문이었습니다.

    - 그 버그 때문에 히스토리가 변경되면 사이트 전체에 한번 더 렌더링 루프가 돌아갔을텐데, 그 영향으로 DOM이 새로 업데이트되면서 스크롤도 함께 복구된 것으로 추측했습니다.

- [목차로 가기](#목차)

---

### 상품 리스트에서 스크롤 유지가 안되는 문제 (2021.03)

- **설명**
  - 상품 리스트에서 상품 페이지로 들어갔다가 뒤로가기로 돌아왔을 때, 스크롤이 유지되지 않는 문제가 있었습니다.

- **원인**
  - [react-query](https://react-query.tanstack.com/)의 useQuery에 옵션을 잘못 넘겨줘서 생긴 문제였습니다.

- **해결**
  - 기존에 아래와 같이 옵션을 넣어주고 있었습니다.
    ```typescript
    useQuery(
      "",
      () => {},
      {
        ...otherOptions,
        cacheTime,
        staleTime: cacheTime,
      }
    );
    ```

  - "cacheTime과 staleTime이 undefined이다" 와 "cacheTime과 staleTime 옵션이 존재하지 않는다" 가 똑같은 것이라고 생각했기에 생겼던 문제였습니다.

    - undefined로 넘겨진 cacheTime, staleTime 값이 useQuery 내부에서 default 값을 덮어씌우고 있었습니다.

  - 따라서 위 방식을 아래와 같이 고쳤습니다.
    ```typescript
    useQuery(
      "",
      () => {},
      {
        ...otherOptions,
        ...(cacheTime !== undefined ? { cacheTime,staleTime: cacheTime } : {}),
      }
    );
    ```

- **배운 점**
  - JSON에서 undefined는 지원되지 않는 타입이었습니다.

    - undefined는 Javascript에서만 지원되는 스펙이었고, undefined와 null이 같은 의미일 것이라고 착각했습니다.

    - 실제로 JSON.stringify를 실행해보면 null은 남아있지만 undefined는 삭제되었습니다.

    - 따라서 데이터의 optional 유무가 아니라, 단순히 있냐/없냐를 따질 경우에는 undefined가 아니라 null을 사용하는게 혼란을 방지하기에 좋다는 것을 알았습니다.

  - Javascript 상에서 아래의 코드는 분명히 다르다는 것을 깨달았고, undefined를 "해당 프로퍼티가 존재하지 않음" 이라고 보는건 잘못된 시각임을 배웠습니다.
    - ```javascript
      {
        cacheTime: Infinity,
        staleTime: Infinity,
        ...{
          cacheTime: undefined,
          staleTime: undefined,
        },
      }
      ```

    - ```javascript
      {
        cacheTime: Infinity,
        staleTime: Infinity,
        ...{},
      }
      ```

- [목차로 가기](#목차)

---

### 네이밍 컨벤션 도입 (2021.01)
- **설명**
  - 코드리뷰를 할 때, 네이밍에 관한 이야기가 길어질 때가 자주 있었습니다.

- **원인**
  - 팀 내에 확실하게 정해진 네이밍 컨벤션이 존재하지 않았습니다.

    - 정말 이야기가 필요한 애매한 경우가 아니라, 규칙을 정해놓았다면 빠르게 수정하고 넘어갈 수 있는 문제인 경우가 많았습니다.

  - 암묵적인 규칙, 혹은 적당히 올바른 것 같다는 주관으로 네이밍을 평가하는 것이 아니라, 확실히 근거할 수 있는 규칙을 정해서 문서화하는 것이 좋을 것 같다고 생각했습니다.

- **해결**
  - 네이밍 컨벤션을 도입하자고 의견을 내고, 긴 시간에 걸쳐 팀과 이야기하고 함께 수정하여 초안을 완성할 수 있었습니다.

  - 개발을 하면서 지속적으로 필요한 컨벤션을 추가하고, 애매한 부분을 수정하며 개선하고 있습니다.

- **배운 점**
  - 암묵적인 규칙은 주관적인 것이라고 생각하고, 주관은 시간이 흐르며 변할 수 있다고 생각했습니다.

    - 일관된 규칙의 문서화가 일의 효율을 상당히 높일 수 있다는 것을 배웠습니다.

    - "기억보단 기록" 이라는 말을 다시금 되돌아볼 수 있었던 것 같습니다.

- [목차로 가기](#목차)

---

### Chrome의 Back/Forward Cache 관련 문제 (2020.10)
- **설명**
  - 회사 프론트엔드 코드 내에서는 react-query를 사용한 메모리 캐싱을 활용하고, HTTP 단에서는 Cache-Control: no-cache를 설정하여 캐싱을 막고 있었습니다.

  - 그러나, Chrome의 Back/Forward Cache가 맘대로 disk cache를 사용하는 경우가 있었습니다.
    1. 사용자가 뒤로가기를 통해 사이트를 나간다.
    2. 사용자가 앞으로가기를 통해 사이트에 다시 돌아온다.
    3. Back/Forward Cache에 의해 캐싱된 응답을 사용하게 되어서 특정 기능이 sync가 안맞는 문제가 생긴다.

- **원인**
  - no-cache의 경우, 캐싱을 아예 금지하는 것이 아니라, 요청마다 revalidation을 요구하는 방식이었습니다.

  - 즉, Chrome은 캐싱 자체를 완전히 금지하도록 설정된 것이 아니라면 Back/Forward Cache를 진행하도록 구현되었다고 추측했습니다.

- **해결**
  - Cache-Control: no-store로 백엔드의 HTTP Header 설정을 변경하였습니다.

  - no-store는 그 어떤 캐싱도 허용하지 않겠다는 뜻이었고, 이를 통해 문제를 해결할 수 있었습니다.

- **배운 점**
  - Cache-Control 헤더와, HTTP 캐싱에 대해 탐구해볼 수 있었습니다.

  - Back/Forward Cache 처럼 브라우저마다 구현이 다른 부분을 더 신경쓰게 되는 계기가 되었습니다.

- **참조**
  - [해당 이슈에 대해 정리한 글](https://blog.hoseung.me/posts/80912bc1-3e00-4239-9928-63d9a550106c)

- [목차로 가기](#목차)
