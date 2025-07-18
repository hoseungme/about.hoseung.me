<div class="cover">
  <img src="/experiences/catch-fashion/cover.png" alt="Catch Fashion" />
</div>

캐치패션은 월 50만의 유저가 사용하는 명품 이커머스로, 이 곳에서의 제 역할은:

- 웹 제품 전체를 혼자서 개발 및 유지보수 했고, 서버, 인프라 작업도 수행했습니다.
- 사내 모든 팀이 사용하는 어드민 웹을 개발 및 유지보수 했습니다.
- OpenAPI 스펙 기반으로 자동 생성되는 API client 라이브러리, 깃허브 브랜치 별로 생성되는 웹 테스트 환경 등 생산성 높은 개발 환경을 구축하고 유지보수 했습니다.
- 웹 성능 최적화, 빌드 타임 개선 등 기술적인 개선 포인트를 찾아 해결했습니다.
- 제품 디자인에 대해 기술적인, 그리고 유저 경험과 관련된 피드백을 적극적으로 제공했습니다.

# 목차

- [퍼포먼스 개선](#퍼포먼스-개선)
- [포스트 타겟팅 시스템 개발](#포스트-타겟팅-시스템-개발)
- [웹 푸시 알림 서비스 개발](#웹-푸시-알림-서비스-개발)
- [카드사 프로모션 서비스 개발](#카드사-프로모션-서비스-개발)
- [AB 테스트와 데이터 중심의 UI/UX 개선](#ab-테스트와-데이터-중심의-uiux-개선)
- [웹뷰 환경을 위한 프론트엔드 개발](#웹뷰-환경을-위한-프론트엔드-개발)

# 퍼포먼스 개선

- 변동이 적은 데이터에 **Local Storage 기반 client-side 캐싱**을 적용했습니다.
  - 약 **50 ~ 500 밀리초의 API 응답 대기 시간을 절약**할 수 있었습니다.
- 더 불러올 가능성이 높은 **페이징 데이터를 prefetch**해두는 기능을 개발했습니다.
  - 데이터 prefetch가 끝난 시점에 이미지까지 미리 불러와둘 수 있으므로, **상품 리스트의 렌더링 퍼포먼스가 기존 대비 크게 개선**되었습니다.
- Lighthouse CI 지표를 활용해 **웹 성능을 최적화**했습니다.
  - **안쓰는 폰트를 삭제**하고, [moment.js를 dayjs로 마이그레이션](https://blog.hoseung.me/2022-03-13-dayjs-instead-of-momentjs)하는 등 **번들을 경량화**했습니다.
  - kakao, facebook, zendesk 등의 **써드 파티 라이브러리를 사용하는 시점에 lazy load**하도록 개선하여 **HTML 파싱 시간과 네트워크 비용을 절약**했습니다.
- 특정 변경이 UI에 예기치 못한 사이드 이펙트를 일으켰을 때 즉각 파악할 수 있도록 [Visual Regression Test를 도입](https://blog.hoseung.me/2021-02-10-visual-regression-test)했습니다.
- React의 불필요한 리렌더링을 개선했습니다.
  - [react-router의 내장 Link 사용을 삭제](https://blog.hoseung.me/2021-12-07-do-not-use-link)하여 URL 변경에 영향이 없는 컴포넌트들은 리렌더링이 걸리지 않도록 개선했습니다.
  - [RxJS로 필요한 때에만 변경을 전파](https://blog.hoseung.me/2021-10-09-rxjs)하여 URL에서 필요한 부분의 변화시에만 리렌더링이 걸리도록 개선했습니다.

# 포스트 타겟팅 시스템 개발

- 유저가 포스트를 더 많이, 자연스럽게 접하게 하기 위해, 사이트 곳곳에 포스트를 노출시키는 시스템을 구축했습니다.
- 프론트엔드와 백엔드 전체를 개발했습니다. 캐치패션 서비스는 유저 웹, 어드민 웹, MSA로 이루어진 백엔드와 같은 여러 요소로 이루어져 있었고, [이를 전체적으로 고려하여 기술적인 의사결정](https://blog.hoseung.me/2022-02-06-post-system-retrospect)을 했습니다.
- 기존의 포스트 데이터 스키마를 새로운 스키마로 마이그레이션했습니다.
  - 데이터 수가 적고 DynamoDB에 저장되어 있었기 때문에, 간단한 스크립트와 테스트 코드를 작성하여 **별도의 서비스 중단 없이 마이그레이션**할 수 있었습니다.
- [DynamoDB Stream을 활용해 변경사항을 Elasticsearch에 자동으로 인덱싱](https://blog.hoseung.me/2022-02-19-dynamodb-stream-elasticsearch)할 수 있도록 **데이터 파이프라인을 구축**했습니다.
- 유저 웹에 포스트를 노출시킬 공간들을 추가하고, 어드민 웹에 포스트에 타겟을 추가, 삭제할 수 있는 기능을 추가했습니다.
  - 유저 웹 내의 포스트를 노출시킬 공간에 대한 식별자를 '타겟'이라고 합니다.
  - 식별자 값으로는 실제 유저 웹의 URL을 활용했는데, 유저 웹의 모든 URL은 팀에서 만든 오픈소스인 [url-catalog-generator](https://github.com/catchfashion/url-catalog-generator)를 사용해 중앙화되어 관리되고 있었기에, 유저 웹과 어드민 웹 사이에 식별자 값을 실수 없이 안전하게 통일하여 사용할 수 있었습니다.

# 웹 푸시 알림 서비스 개발

- Service Worker, Web Push API를 사용해 [웹 브라우저에서도 푸시 알림을 받을 수 있는 기능을 개발](https://blog.hoseung.me/2021-11-28-web-push-notification)했습니다.
- 기존에는 앱을 설치해야만 푸시 알림을 받을 수 있었지만, **웹을 사용하는 유저도 푸시 알림을 받아볼 수 있게 됨**으로써 **푸시 알림 서비스의 사용률이 기존 대비 개선**되었습니다.
  - 푸시 알림을 거부한 유저들의 행동을 트래킹하고, 일정 조건마다 푸시 알림 권한을 요청하는 모달을 재노출했습니다.
  - 푸시 알림 구독을 생성하는 **API의 호출 횟수가 평균 600회에서 1200회로 2배 증가**했습니다.

# 카드사 프로모션 서비스 개발

- 유저가 현재 진행중인 카드사 프로모션에 카드를 등록할 수 있는 기능을 개발했습니다.
- 팀에서 개발한 [dynamorm](https://github.com/serverless-seoul/dynamorm)이라는 오픈소스를 사용해 DynamoDB 테이블을 정의하고, CRUD API를 개발했습니다.
- 데이터 스키마, 요청 -> 응답 -> 렌더링 플로우를 **도메인 특징에 따라 설계**했습니다.
  - 프로모션은 동시에 많이 진행하지 않아 데이터 사이즈도 작으므로, 데이터를 프로모션마다 개별적으로 불러오지 않고 리스트로 한번에 불러오도록 설계했습니다.
  - API 요청 플로우가 간단해지고, 리스트만 한 번 불러오면 그 뒤엔 추가적인 데이터 로딩이 없어 **퍼포먼스와 UX 면에서 이점**을 얻었습니다.
- 프론트엔드 코드 내에 **하드코딩 되어있던 카드사 프로모션 데이터를 백엔드로 이관**하고, 백오피스에 에디터를 추가해서 **어드민들이 개발자를 거치지 않고 프로모션을 관리**할 수 있도록 개선했습니다.
- BDD 테스트코드를 작성해볼 수 있었습니다. ([BDD를 사이드 프로젝트에도 사용해보고, 생각을 남긴 글](https://blog.hoseung.me/2021-02-27-mocha-chai-bdd))

# AB 테스트와 데이터 중심의 UI/UX 개선

- **특정 작업이 비즈니스적으로 어떤 결과를 불러일으킬지 고민**하고, **데이터 중심으로 사고하고 선택**하는 연습을 했습니다.
- 페이지 이름을 '쇼핑하기'에서 '카테고리'로 이름을 변경하는 테스트를 진행하여, **신규가입 11%, 상품 조회 14%, 구매전환 26% 등 모든 긍정 수치가 기존 대비 크게 상승**한걸 확인하고, 페이지 이름을 '카테고리'로 확정지었습니다.
- 상품 페이지에서 '정품 보장 문구'를 페이지 상단으로 이동시키는 테스트를 진행하여, **신규가입 3%, 구매전환 4% 증가**를 확인하고, 위치를 확정지었습니다.

# 웹뷰 환경을 위한 프론트엔드 개발

- 앱다운로드 유도 컨텐츠를 앱에서만 숨기는 등, **User-Agent를 파싱해서 적절한 UI를 렌더링**했습니다.
- 2 depth 이상부터 로고 대신 Back Button을 노출하거나, 하단 네비게이션의 탭을 유지하는 등, **Applike한 UI/UX에 대해 상의하고, 시도**했습니다.
- **웹뷰와 네이티브간 통신**을 통해 **필요에 따라 작업을 네이티브에 위임**했습니다.
  - **Kakao SDK가 웹뷰에서 의도한대로 동작하지 않는 문제를 해결**할 수 있었습니다.
