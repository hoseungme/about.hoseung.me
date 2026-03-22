<p className="title">Software Engineer<br/>장호승</p>

<div className="info">
  <p><a href="sms:010-3428-0052">010-3428-0052</a></p>
  <p><a href="mailto:hsjang.dev@gmail.com">hsjang.dev@gmail.com</a></p>
  <p><a href="https://github.com/hoseungme">GitHub</a></p>
  <p><a href="https://blog.hoseung.me">블로그</a></p>
</div>

빠르고 급한 이터레이션을 필요로 하는 팀에 속하여 작업의 비즈니스적 가치를 판단하고, 일정 내에 좋은 퀄리티로 마무리하는 것을 커리어 전체에 걸쳐 해왔습니다.

따라서 불필요한 일을 하지 않을 수 있는 환경을 만드는 것을 가장 중요하게 여깁니다. 이를 위해 주도적으로 생산성을 개선하고, 문제의 핵심과 가장 간단한 답안을 찾으려 노력합니다.

프론트엔드 개발자로 커리어를 시작했지만, 다양한 분야를 경험하여 기술적 견해를 넓히는 것을 중요하게 여기며, 프론트엔드 바깥의 분야에서도 다양한 경험을 해왔습니다.

<p className="title">Skills</p>

- React, TypeScript 기반의 프론트엔드 개발을 주로 해왔습니다. CSR, SSR 모두 익숙하며, AWS를 적극 활용하여 테스트/프로덕션 환경 분리, 캐싱, SEO 등 프론트엔드 서비스가 동작하는 기반 인프라를 자유롭게 구성할 수 있습니다.
- Yarn Workspace 기반 모노레포 환경의 라이브러리 프로젝트를 유지보수 해본 경험이 있습니다. Node.js 모듈 시스템, 트리 쉐이킹 등을 이해하고 있고, Rollup, Webpack 등 번들러를 다룰 수 있습니다. CI/CD 파이프라인을 구성할 수 있고, 병목 지점을 찾아내 실행 속도를 개선할 수 있습니다.
- Swift로 iOS, MacOS 환경에서 웹 브라우저 앱을 개발해본 경험이 있습니다. 따라서 네이티브 코드를 읽고 기여하는 것에 어러움이 없고, 웹뷰 환경을 깊게 이해하고 있습니다. 특히 내부 구현을 직접 읽으며 리서치해본 경험이 있는 WebKit에 아주 익숙합니다.
- 프론트엔드 퍼포먼스 개선 경험이 있습니다. 불필요한 리렌더링 최적화, 번들 경량화, 렌더링 속도 최적화, 네트워크 비용 최적화 등 다양한 경험을 가지고 있습니다.
- Node.js, AWS 기반 백엔드 개발 경험이 있습니다. Serverless 환경에 가장 익숙하여 Lambda, DynamoDB 등의 서비스를 활용한 경험이 많습니다.
- 초기 스타트업에서 AI Product를 개발하면서 테스트 구성을 통한 응답 퀄리티 유지, 토큰 비용 개선 등 LLM을 여러 목적으로 깊게 다뤄본 경험이 있습니다.
- 위와 같이 특정한 분야에 한정되지 않은 다양한 실무 경험에 기반하여 기술적으로 여러 관점을 고려해서 가장 합리적인 의사결정을 할 수 있으며, 스스로 찾아낼 수 있는 문제의 범위가 넓고, 문제를 깊게 탐구하여 가장 간단한 방식으로 해결할 수 있습니다.

<p className="title">Experiences</p>

<p className="experience">Viva Republica (Toss)</p>
<p className="experience-role">Frontend Platform Engineer</p>
<p className="experience-period">2025-09 ~ 현재</p>

- 토스의 앱인앱 서비스 [앱인토스](https://developers-apps-in-toss.toss.im/)의 SDK 프로젝트 리딩
- SDK를 위한 새로운 모노레포 프로젝트를 구축하고 이관하여 레거시 코드베이스 제거
- 빌드 캐싱, 패키지 의존 관계 정리 등 CI 파이프라인의 병목을 분석하고 제거하여 8분 걸리던 실행 속도를 최대 2분까지 단축
- 배포 프로세스를 완전히 자동화하여 개발자가 로컬에서 수동으로 배포하던 환경 개선

<p className="experience">Mirror</p>
<p className="experience-role">Software Engineer</p>
<p className="experience-period">2024-04 ~ 2024-08</p>

- 글로벌 유저가 사용하는 WebKit 기반 브라우저 [Mirror](https://www.mirror.work)의 SwiftUI macOS/iOS 앱, Next.js SSR 프론트엔드, 서버리스 Node.js 백엔드 개발
- 하드코딩된 JSON 데이터로 동작하던 신규 유저 온보딩을 [LLM 기반으로 유저의 직업에 따라 개인화되도록](https://blog.hoseung.me/2025-04-13-mirror-onboading-llm) 만들어 리텐션 개선
- 주기적으로 SNS를 크롤링하여 인플루언서를 찾고, 개인화된 이메일을 LLM으로 생성하여 자동 발송하는 월 20달러 미만으로 작동하는 자동화된 마케팅 프로세스 구축
- 디바이스 데이터를 실시간으로 싱크하는 기능을 개발하여 멀티 디바이스 유저들의 경험 개선
- [Chrome Extension을 WebKit에서 실행](https://youtu.be/Gmp_dMzacmI?feature=shared) 가능하게 만드는 런타임 PoC
- [브라우징을 돕는 AI Agent 채팅 인터페이스](https://youtu.be/ZwJab0mye6w?feature=shared) 개발, Function Calling 대신 Code Execution 환경을 구축하여 LLM 토큰 비용 90% 개선

<p className="experience">Viva Republica (Toss)</p>
<p className="experience-role">Frontend Engineer</p>
<p className="experience-period">2022-04 ~ 2024-04</p>

- 월 200만 10대 유저가 사용하는 제품들의 Next.js SSR 프론트엔드 개발
  - MAU를 120만부터 200만 이상으로 성장시킨 수많은 프론트엔드 제품을 혼자서 담당, 코레일/티머니, CU/GS, 애플 등 제휴사와 직접 소통
  - 페이지 하나에서 사용하는 3D 리소스의 용량을 21.5MB에서 1.8MB까지 압축하여 유저의 네트워크 비용 92% 절약
  - [전사적인 타임존 누락 문제를 공론화](https://blog.hoseung.me/2023-03-23-how-to-transfer-date)하고 컨벤션으로 자리잡을 수 있도록 설득하여 장애 발생 가능성을 차단하고 유저 경험 개선
- 100명 이상의 사내 프론트엔드 개발자들이 사용하는 공통 라이브러리 프로젝트 운영
  - 작업을 진행하기 전 미리 논의하는 PoC 프로세스를 도입하고 메인 리뷰어로 활동하여 모든 기여자들의 생산성 개선
  - 동작이 예측 불가능하고 버그가 많아 정상적으로 사용할 수 없어 디버깅에 시간을 낭비하게 만들던 네비게이션 바 라이브러리를 처음부터 재설계하고 전사에 도입
  - 라이브러리 오픈소스 [Slash의 메인테이너로 활동](https://github.com/toss/slash/issues?q=involves%3Ahoseungme)
- [자세히보기](/experiences/viva-republica)

<p className="experience">Catch Fashion</p>
<p className="experience-role">Software Engineer</p>
<p className="experience-period">2020-08 ~ 2022-04</p>

- 월 50만 유저가 사용하는 명품 이커머스 캐치패션의 React CSR 프론트엔드, 서버리스 Node.js 백엔드 개발
- [포스트 노출 시스템을 재설계](https://blog.hoseung.me/2022-02-06-post-system-retrospect)하고 [데이터 파이프라인을 구축](https://blog.hoseung.me/2022-02-19-dynamodb-stream-elasticsearch)하여 전환율 10% 증가
- [외부 라이브러리에서 발생하는 불필요한 리렌더링](https://blog.hoseung.me/2021-12-07-do-not-use-link)을 제거하고, [상태 전파를 매우 엄격하게 관리](https://blog.hoseung.me/2021-10-09-rxjs)하여 React 리렌더링 퍼포먼스 개선
- 변경되지 않는 서버 응답에 Client-side 캐싱을 적용하고, Infinite Scroll이 적용된 페이지에서 다음 데이터를 Prefetch하는 등 API 호출을 최적화하여 렌더링 시간을 약 500 밀리초 절감
- 트리쉐이킹이 불가능하여 번들 용량을 불필요하게 키우는 라이브러리인 [moment.js를 day.js로 마이그레이션](https://blog.hoseung.me/2022-03-13-dayjs-instead-of-momentjs)하여 번들 용량 30% 축소
- [웹 브라우저에서도 푸시 알림을 받을 수 있도록](https://blog.hoseung.me/2021-11-28-web-push-notification) 만들고 알림 권한을 받는 UI를 직접 개선하여 푸시 알림 구독률 2배 개선
- [자세히보기](/experiences/catch-fashion)

<p className="title">Educations</p>

<p className="education">대덕소프트웨어마이스터고등학교</p>
<p className="education-period">2018.03 ~ 2021-01</p>
