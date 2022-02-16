- [브라우저 푸시 알림 기능 개발](#브라우저-푸시-알림-기능-개발)

- [상품 페이지 렌더링 성능 개선](#상품-페이지-렌더링-성능-개선)

- [상품 페이지 UI/UX 및 성능 개선](#상품-페이지-uiux-및-성능-개선)

- [react-router의 성능 이슈 파악 및 개선](#react-router의-성능-이슈-파악-및-개선)

- [2021년 하반기 광고 랜딩페이지 개발](#2021년-하반기-광고-랜딩페이지-개발)

- [상품 리스트 UX 개선](#상품-리스트-ux-개선)

- [세일 페이지 프론트엔드 / 백엔드 개발](#세일-페이지-프론트엔드--백엔드-개발)

- [Lighthouse CI 퍼포먼스 점수 개선](#lighthouse-ci-퍼포먼스-점수-개선)

- [컬렉션 개발](#컬렉션-개발)

- [마케팅팀 리뷰 알리미 개발](#마케팅팀-리뷰-알리미-개발)

- [moment.js를 dayjs로 마이그레이션](#momentjs를-dayjs로-마이그레이션)

- [Visual Regression Test 도입](#visual-regression-test-도입)

- [카드사 프로모션 서비스 개발](#카드사-프로모션-서비스-개발)

- [클라이언트 사이드 캐싱 도입](#클라이언트-사이드-캐싱-도입)

- [상품 사이즈 매핑 개선](#상품-사이즈-매핑-개선)

- [상품 페이지 리팩토링](#상품-페이지-리팩토링)

- [AWS Lambda에 querystring으로 array가 전달되지 않는 문제 해결](#aws-lambda에-querystring으로-array가-전달되지-않는-문제-해결)

- [네이밍 컨벤션 도입](#네이밍-컨벤션-도입)

- [사이트로 돌아왔을 때 데이터 싱크가 안맞는 문제 해결](#사이트로-돌아왔을-때-데이터-싱크가-안맞는-문제-해결)

---

## 브라우저 푸시 알림 기능 개발

![](/images/experience/catch-fashion/web-push-notification.jpg)

- 서비스워커 API, 웹푸시 API를 사용해 구현

  - [https://blog.hoseung.me/2021-11-28-web-push-notification](https://blog.hoseung.me/2021-11-28-web-push-notification)

- 푸시 알림 사용률 개선

  - 기존에는 앱을 설치해야만 푸시 알림을 받을 수 있었지만, 웹을 사용하는 유저도 푸시 알림을 받을 수 있게됨

  - 알림 받기를 거부한 유저들의 행동을 트래킹하고, 일정 조건마다 권한 요청 모달 재노출

  - 푸시 알림 구독을 생성하는 API의 호출 횟수가 평균 600 -> 1200으로 증가

[목차](#목차)

## 상품 페이지 렌더링 성능 개선

- 상품 페이지의 모든 데이터(상품, 가격변동 그래프, 관련상품 리스트 등등..)가 로딩되어야 유저에게 렌더링되어 보여지는 문제가 있었음

  - react-query의 suspense를 남용해서 생긴 문제. React의 Suspense 컴포넌트를 최상단에만 쓰는게 아니라 자식 컴포넌트들도 적절히 감싸서 해결

- 컴포넌트가 뷰포트에 들어왔을 때 데이터 로딩을 시작하도록 수정

- 유저가 상품 페이지를 처음 볼 수 있게 되는 시간이 약 600 ~ 1000 밀리초에서 200 밀리초로 크게 개선됨

[목차](#목차)

## 상품 페이지 UI/UX 및 성능 개선

![](/images/experience/catch-fashion/product-page-uiux-improve-desktop1.png)
![](/images/experience/catch-fashion/product-page-uiux-improve-desktop2.png)
![](/images/experience/catch-fashion/product-page-uiux-improve-desktop3.png)
![](/images/experience/catch-fashion/product-page-uiux-improve-mobile1.png)
![](/images/experience/catch-fashion/product-page-uiux-improve-mobile2.png)
![](/images/experience/catch-fashion/product-page-uiux-improve-mobile3.png)

- 캐치구매 / 이동 후 구매 두 종류로 분리되어 완전히 다른 섹션으로 보여졌었던 가격정보들을 하나의 Accordion 내에 함께 보여줌으로써, 상품 구매, 알림등록에서 생기는 혼란을 줄임

- 각종 성능 문제 해결

  - 사이즈가 선택 되었는지에 대한 boolean state를 하위 컴포넌트를 여러번 거쳐 넘겨주는 prop drilling 문제 -> RxJS를 사용해 사이즈가 선택됬을 때 '쇼핑백 담기' 버튼 컴포넌트에만 state 변경을 전파

  - 최상위 컴포넌트의 state 변경시마다 하위 컴포넌트가 리렌더링되는 문제 -> React.memo를 활용해서 관련이 없는 컴포넌트는 리렌더링 방지

[목차](#목차)

## react-router의 성능 이슈 파악 및 개선

- react-router의 RouterContext, useLocation, Link 등이 history가 변경될 때마다 consumer의 리렌더링을 발생시킴 -> 의도치 않은 성능 이슈가 발생할 수 있음

- 필요하지 않은 경우를 찾아서 사용을 없애거나 컴포넌트를 분리하고, RxJS를 도입해서 필요할 때만 리렌더링 되도록 개선

- [https://blog.hoseung.me/2021-10-09-rxjs](https://blog.hoseung.me/2021-10-09-rxjs)

- [https://blog.hoseung.me/2021-12-07-do-not-use-link](https://blog.hoseung.me/2021-12-07-do-not-use-link)

[목차](#목차)

## 2021년 하반기 광고 랜딩페이지 개발

![](/images/experience/catch-fashion/catch-fake-og.png)
![](/images/experience/catch-fashion/catch-fake1.png)
![](/images/experience/catch-fashion/catch-fake2.png)
![](/images/experience/catch-fashion/catch-fake3.png)
![](/images/experience/catch-fashion/catch-fake4.png)
![](/images/experience/catch-fashion/catch-fake5.png)

- 질문/답변/결과 데이터를 트리 구조로 설계 -> 트리 노드의 타입에 따라 컴포넌트를 재귀적으로 렌더링

- HTML video element로 mp4 동영상 컨텐츠 제공

  - iOS의 자동재생 차단 이슈를 [https://webkit.org/blog/6784/new-video-policies-for-ios](https://webkit.org/blog/6784/new-video-policies-for-ios)를 참고해 해결

- https://catch-fake.com -> https://catchfashion.com/catch-fake 리다이렉트 기능 개발

  - AWS S3, CloudFront, Route53을 사용해 리다이렉션 구축

  - AWS CDK를 사용해 인프라 자동화, 테스트 코드 작성 및 비슷한 기능에 재사용할 수 있도록 템플릿화

- 2021년 9월 ~ 2021년 12월까지 유저 방문 횟수 약 10만회 (페이지 뷰 API의 호출 횟수 기준)

[목차](#목차)

## 상품 리스트 UX 개선

- 상품 리스트 데이터 prefetch 적용

  - 다음 데이터를 로딩하는 Promise를 저장 -> 유저가 스크롤을 내려 fetch 트리거 시 해당 Promise를 await

  - 커스텀 react-query fetcher에 onPrefetchSuccess 옵션을 추가해서, 상품 이미지들도 미리 prefetch

  - 유저가 데이터와 이미지 로딩을 기다리지 않고, 즉시 다음 리스트를 확인할 수 있게됨

- 유저가 상품 리스트에서 상위 카테고리를 변경하려면, 다시 카테고리 페이지로 돌아가야 하는 문제

![](/images/experience/catch-fashion/product-list-category-selector-desktop.png)

  - 상품 리스트에서 카테고리 선택을 바로 할 수 있도록 셀렉터 추가

  - 셀렉터 바깥을 클릭하면 셀렉터가 닫히게 만듬 -> 특정 엘리먼트의 바깥을 클릭했을 때 동작을 취하는 로직이 프론트엔드 코드 여러곳에서 중복됨 -> useOnClickOutsideOfElement hook을 만들어서 중복 제거

    - 외부 클릭을 감지하는 코드는 재사용하고, onClick function을 인자로 받음으로써 특정 로직에 제한되지 않게 하여 여러 요구사항에 대응

    - hook 사용자는 바깥 클릭이 발생했을 때 실행될 로직에만 집중

[목차](#목차)

## 세일 페이지 프론트엔드 / 백엔드 개발

![](/images/experience/catch-fashion/sale-desktop-1.png)
![](/images/experience/catch-fashion/sale-desktop-2.png)
![](/images/experience/catch-fashion/sale-mobile-1.png)
![](/images/experience/catch-fashion/sale-mobile-2.png)

- 세일 페이지에 보여줄 컨텐츠를 위한 백엔드 작업 진행

  - 최신순으로 세일 상품, 세일 카테고리, 세일 스타일을 불러와서 타겟을 생성하고, 해당 타겟을 포함시킨 컬렉션을 주기적으로 생성하는 cron job 추가

  - 유저가 최근에 본 상품, 카테고리 등을 기반으로 타겟을 매칭하는 개인화 로직 추가

- 리스트의 x축 스크롤 관련 로직 (canScrollToLeft 등)이 프론트엔드 코드 내에 많이 중복됨 -> useScrollX hook을 추가해서 재사용

[목차](#목차)

## Lighthouse CI 퍼포먼스 점수 개선

- 3rd party Javascript 로딩을 개선했습니다.
  - HTML script 태그의 async / defer 속성을 이해하고, 적절히 적용

- link 태그의 preconnect 기능을 활용해서 빠른 다운로드 시작 유도

- 사이트 전체적으로 lazy rendering이 필요한 곳을 찾아 적용

- Github Actions에 Lighthouse CI를 추가해서 특정 커밋이 퍼포먼스 점수의 저하의 원인인지 파악

- Chrome dev tools 기준 40점대에서 60점대로 개선

[목차](#목차)

## 컬렉션 개발

![](/images/experience/catch-fashion/collection-desktop.png)
![](/images/experience/catch-fashion/collection-brand-desktop.png)
![](/images/experience/catch-fashion/collection-mobile.png)

- AWS Lambda Edge를 활용해서 실시간으로 이미지를 처리하는 구조 학습

  - 리사이징, 트랜스폼 등 다양한 처리가 가능하고, 처리 후엔 CloudFront CDN에 캐싱

- 컬렉션의 렌더링 로직을 재사용 가능한 컴포넌트인 SingleCollection으로 분리했습니다.

  - viewed, clicked, item clicked 등 여러 종류의 이벤트 트래킹을 위한 데이터 필요

  - 각각의 이벤트의 데이터를 각각 전부 준비해서 넘겨주지 않고, 공통된 부분을 interface로 정의

  - SingleCollection 컴포넌트 사용자는 간략화된 공통 데이터만 넘겨주고, 트래킹을 위한 세부 데이터와 구현은 신경쓸 필요가 없게됨

[목차](#목차)

## 마케팅팀 리뷰 알리미 개발

- 사내 모든 팀의 업무는 [아사나](https://asana.com/ko)를 통해서 관리되는데, 기존에는 특정 태스크에 대해 마케터가 슬랙에서 직접 리뷰 요청을 보내는 방식으로 업무를 진행하고 있었음

- 태스크가 'In Review' 섹션으로 넘어가면, 자동으로 슬랙에 알려주는 웹훅을 추가하여 생산성 향상

  - 아사나에서 제공하는 [웹훅 API](https://developers.asana.com/docs/webhooks)를 활용해 개발

    - 웹훅이 태스크가 특정 섹션에 추가되는 이벤트에만 실행되도록 필터 추가

    - 정규표현식을 사용해 마크다운을 파싱해서 [BlockKit](https://api.slack.com/block-kit) blocks로 replace

    - Incoming Webhook을 사용해 슬랙에 메시지 전송

- [p-limit](https://www.npmjs.com/package/p-limit)을 통해 Promise 동시성 제한

  - webhook 서비스는 개발팀에서만 주로 사용되므로, Lambda function의 메모리 할당량과 timeout을 낮게 잡아둔 상태 -> 동시성을 제한하여 이전보다 안정적인 메모리 사용량 유지 (serverless framework의 CLI로 확인)

[목차](#목차)

## moment.js를 dayjs로 마이그레이션

- 문제 파악

  - [Google Lighthouse CI](https://developers.google.com/web/tools/lighthouse)를 통해 확인한 결과, moment.js의 불필요한 번들 용량 낭비가 매우 심했음 (14KB 중 미사용 용량이 9KB)

  - moment.js는 미지원 유지보수 상태로 전환되었고, 광범위한 기능에 비해 사용하는 기능이 제한적이었기 때문에 다른 라이브러리로 바꿀 필요성을 느낌

- 마이그레이션 과정

  - 프론트엔드 코드상에서 moment.js의 모든 use case를 찾아 문서화

  - [You Don't Need Momentjs](https://github.com/you-dont-need/You-Dont-Need-Momentjs)문서를 참고해 다른 라이브러리들과 비교

    - 문서화했던 moment.js의 use case들을 모두 커버할 수 있는지 파악

  - 결과적으로 dayjs 선택

    - dayjs의 인터페이스는 moment.js와 거의 일치하고, 공식 문서에도 moment.js에서 매우 쉽게 마이그레이션 할 수 있는 점을 장점으로 소개하고 있음 -> 팀원들의 러닝커브가 매우 낮음

    - dayjs는 기본적인 기능들(substract, format 등)을 제외한 나머지는 plugin으로 분리되어 있어서 번들 용량 최적화에 좋음

    - 2KB의 작은 사이즈로도 기존의 모든 use case들을 커버 가능

- 마이그레이션 과정에서 했던 생각과, 그를 통해 내린 결론을 문서화 해두는 것이 중요하다고 느낌

- 새로운 기술을 적용할 때 고려되어야 하는 것들이 무엇인지 배움

[목차](#목차)

## Visual Regression Test 도입

![](/images/experience/catch-fashion/visual-regression-test.png)

- 작업 중에 의도치 않게 생긴 UI 변경을 인지하지 못하고 프로덕션에 배포되거나, 변경된 UI의 Before / After를 한눈에 비교하기가 힘든 문제

  - 따라서 Visual Regression Test 도입

  - 팀에서 [Storybook](https://storybook.js.org/)을 사용하고 있었고, [Chromatic](https://www.chromatic.com/)을 연결

  - [Chromatic을 선택하기 까지의 과정](https://blog.hoseung.me/2021-02-10-visual-regression-test)

- 좋은 개발자 경험과 인터페이스에 대해 고민

  - 테스트가 팀원들에게 너무 어렵거나 비용이 커서는 안된다는걸 중심적으로 생각

- Mac, Linux 등 환경 차이 때문에 가상 브라우저에서 스크린샷이 다르게 찍히는 문제

  - Docker로 가상화된 환경 위에서 테스트를 실행해 해결 -> 일관된 환경 구축의 중요성 파악

- 폰트, 버튼 등 수정에 따른 사이드 이펙트를 알아차리기 힘든 컴포넌트들의 변경을 사전에 파악할 수 있게됨

[목차](#목차)

## 카드사 프로모션 서비스 개발

![](/images/experience/catch-fashion/promotion-list-desktop.png)
![](/images/experience/catch-fashion/promotion-list-mobile.png)

- 유저가 현재 진행중인 카드사 프로모션에 카드를 등록할 수 있는 서비스

- 프론트엔드, 백엔드 전체를 설계부터 개발, 배포, 유지보수 담당

  - 팀에서 개발한 [dynamorm](https://github.com/serverless-seoul/dynamorm)이라는 오픈소스를 사용해 DynamoDB 테이블 정의, serverless framework를 사용해 배포

  - BDD 방식의 테스트코드 작성

    - 유저 입장에서 나올 수 있는 유효한 시나리오들을 생각해볼 수 있었음

    - 개발자 입장에서도 비즈니스 로직을 빠르게 이해하는데에 도움이 됨

- 도메인 특징에 따른 데이터 및 요청 -> 응답 -> 렌더링 플로우 설계

  - 프로모션은 동시에 많이 진행하지 않으므로, 데이터를 프로모션마다 개별적으로 불러오지 않고, 리스트로 한번에 불러오도록 설계

  - API 요청 플로우가 간단해지고, 리스트만 한 번 불러오면 그 뒤엔 추가적인 데이터 로딩이 없어 UX 면에서 이점을 얻음

[목차](#목차)

## 클라이언트 사이드 캐싱 도입

- 기존에는 [react-query](https://www.npmjs.com/package/react-query)의 메모리 캐싱에만 의존

  - 응답 데이터의 변동이 없거나, 변동 빈도가 매우 낮은 API도 사이트 첫 접속시에는 요청이 보내짐

  - local storage를 활용한 클라이언트 사이드 캐싱 도입

- 현재 배포 버전을 프론트엔드 환경 변수로 추가 -> 새로운 버전이 배포될 시, local storage에서 이전 버전의 캐시를 모두 삭제

  - Github Actions에서 React 애플리케이션을 빌드할 때 현재 commit의 hash값을 주입

- 약 50 ~ 500 밀리초의 API 응답 대기 시간 절약, 렌더링이 동기 방식으로 즉시 이루어져 깜빡임 사라짐

- 브라우저 마다 다른 [local stroage의 예외 상황들](https://blog.hoseung.me/2021-01-13-local-session-danger)을 알 수 있었음

[목차](#목차)

## 상품 사이즈 매핑 개선

- 백엔드에서 상품의 사이즈를 매핑할 때 정확한 매핑에 실패하는 경우, 적당히 그럴듯한 사이즈와 매핑하여 응답하고 있었음

  - 주문 페이지에서는 원본 사이즈를 그대로 노출하고 있었지만, 확인하지 못한 사용자가 문의를 보내는 일이 있었습니다.

  - 매핑에 실패하면 원본 사이즈를 그대로 매핑하도록 수정

- 사이즈 매핑을 위한 tokenization과 정렬, 정규표현식을 사용한 문자열 추출과 replace 등 여러 방법을 생각하고 적용하며 실험해볼 수 있었습니다.

[목차](#목차)

## 상품 페이지 리팩토링

![](/images/experience/catch-fashion/product-detail.png)

- 하나의 hook에 모든 렌더링 로직이 다 들어가있었음

  - 데이터 기준으로 로직을 여러 hooks로 분리하고, 알맞은 컴포넌트에서 사용하게 함 -> 리렌더링 이슈 방지

- 서로 연관된 데이터인지 구분하고, 그룹핑하는 것에 대한 학습

  - '캐치구매', '이동 후 구매' 라는 두 가지 탭이 생겨남에 따라, 상품의 variation을 두 가지 형태로 재가공해야 했음

  - 처음엔 탭 리스트, 재가공된 variation들을 별도의 state로 분리하여 관리 -> 수많은 버그 발생 -> 탭과 해당 탭의 variation은 서로 강력히 연관되어 있으므로, 그룹핑하여 근본적인 문제 해결
    ```typescript
    const tabs = useMemo(() => [
      variations1.length > 0 && { label: "캐치구매", variations: variations1 },
      variations2.length > 0 && { label: "이동 후 구매", variations: variations2 },
    ], [variations1, variations2]);
    ```

[목차](#목차)

## AWS Lambda에 querystring으로 array가 전달되지 않는 문제 해결

- query string으로 array를 전달하는 방식은 아래와 같이 다양함
  - ```
    1. ?a=1&a=2
    2. ?a[]=1&a[]=2
    3. ?a[0]=1&a[1]=2
    4. ?a=[1,2]
    ```

- 위의 1, 2번 케이스에서 AWS Lambda의 event 객체에 배열의 값이 전부다 전달되지 않았음

- event.multiValueQueryStringParameters를 event.queryStringParameters와 함께 사용해서 해결

  - [해결 과정](https://blog.hoseung.me/2021-05-19-aws-lambda-querystring)

[목차](#목차)

## 네이밍 컨벤션 도입

- 팀 내에 확실하게 정해진 네이밍 컨벤션이 존재하지 않았음

  - 코드리뷰시 네이밍에 관한 토론이 길어지게됨

  - 네이밍 컨벤션을 도입하자고 의견을 내서 도입

- 협의된 규칙과 문서화의 중요성을 크게 느낌

  - 암묵적인 규칙 혹은 적당히 올바른 것 같다는 주관을 기반으로 네이밍을 평가하는것 보단, 확실히 근거할 수 있는 규칙을 미리 정해서 문서화하는 것이 좋을 것 같다고 생각

- 코드리뷰시 네이밍 관련 이슈는 문서 링크를 첨부하여 빠르게 해결하고, 다른 내용을 더욱 집중적으로 리뷰할 수 있게됨

[목차](#목차)

## 사이트로 돌아왔을 때 데이터 싱크가 안맞는 문제 해결

- 회사 프론트엔드 코드 내에서는 react-query의 메모리 캐싱을 활용하고, 백엔드에선 Cache-Control 헤더를 no-cache로 설정하여 브라우저 캐시를 막고 있었음

  - 그러나 사용자가 뒤로가기를 사용해 사이트를 나간 후 앞으로가기를 사용해 사이트로 다시 돌아온 경우, Chrome의 Back/Forward Cache로 인해 강제로 브라우저 캐시를 사용하게됨 -> 실제 백엔드 데이터와 싱크가 안맞는 경우가 생김

- no-cache의 경우, 캐싱을 완전히 금지하는 것이 아니라 요청마다 revalidation을 요구하는 방식이었음

  - Chrome은 캐싱 자체를 완전히 금지하도록 설정된 것이 아니라면 Back/Forward Cache를 진행하도록 구현되었다고 추측 -> Cache-Control을 모든 캐싱을 금지하라는 의미인 no-store로 변경
  
  - Back/Forward Cache가 차단되어 문제 해결

- Cache-Control 헤더와 HTTP 캐싱에 대해 탐구해볼 수 있었음

- Back/Forward Cache 처럼 브라우저마다 구현이 다른 것들에 대해 더욱 신경쓰는 계기가 됨

- [해당 이슈에 대해 정리한 글](https://blog.hoseung.me/2020-10-31-chrome-back-forward-cache)

[목차](#목차)
