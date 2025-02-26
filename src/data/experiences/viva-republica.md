<div class="cover">
  <img src="/experiences/viva-republica/cover.jpeg" alt="Toss" />
</div>

토스는 월 1300만 이상의 유저가 사용하는 핀테크 슈퍼앱으로, 이 곳에서의 제 역할은:

- 만 7세 ~ 만 18세 유저를 타겟하는 Teens Team에서 일했습니다.
  - 월 170만명 이상의 유저들이 사용하는 웹 제품 전체를 혼자서 개발 및 유지보수 했습니다.
  - 제품 디자인에 대해 기술적인, 그리고 유저 경험과 관련된 피드백을 적극적으로 제공했습니다.
  - 제품 내에서 기술적인 개선 포인트를 주도적으로 찾아 해결했습니다.
  - 팀 전체의 업무 생산성 향상을 위한 개선 포인트를 주도적으로 찾아 해결했습니다.
  - 팀 목표, 제품 개발 방향성 등 비즈니스 레벨의 피드백을 적극적으로 제공했습니다.
- 팀 업무 바깥으로 전사적인 개발자 생산성 향상에 기여했습니다.
  - 새로운 지식 또는 문제 해결 과정에 대해서 적극적으로 문서화하여 공유했습니다.
  - 100명이 넘는 프론트엔드 개발자들이 사용하는 공용 라이브러리 전체의 운영에 기여했습니다.
  - 조직 내에서 기술적으로 통일되지 못한 것들에 대한 표준 확립을 리드했습니다.

# 기술 기여

## Slash 메인테이너 활동

- 토스 내부에서 사용하는 프론트엔드 라이브러리를 오픈소스화한 [Slash](https://github.com/toss/slash) 프로젝트의 메인테이너로 기여했습니다.
- [기여한 PR 및 Issue 목록](https://github.com/toss/slash/issues?q=involves%3Ahoseungme)

## 프론트엔드 라이브러리 프로젝트 기여

- 토스 내부에서 100명이 넘는 프론트엔드 개발자가 사용하는 라이브러리 프로젝트에 기여했습니다.
- 코드를 작성하며 생산성을 개선할 수 있는 아이디어를 얻는 즉시 구현했습니다.
  - 로컬 스토리지, 세션 스토리지를 type-safe하게 사용할 수 있는 라이브러리를 추가했습니다.
  - 토스 내부 툴에 새로운 API가 추가될 때마다 빠르게 라이브러리에 추가했습니다.
- 웹 네비게이션 바 라이브러리를 개편했습니다.
  - 웹 네비게이션 바 라이브러리는 안드로이드, iOS의 네비게이션 바 대신, 웹뷰에서 직접 네비게이션 바를 렌더링하여 사용할 수 있게 해주는 라이브러리입니다.
  - 하지만 기존의 웹 네비게이션 바 라이브러리 구현에는 많은 문제가 있었습니다.
    - 네비게이션 바에 커스텀 컴포넌트를 넣을 수 없는 등 자유도가 매우 낮은 인터페이스를 가지고 있었습니다.
    - 완전히 코드레벨에서 컨트롤되는 것이 아니라, 내부 어드민의 설정을 통해 컨트롤할 수 있는 비직관적이고 예측 불가능한 구현이 있었습니다.
    - 다른 라이브러리와 불필요하게 강결합되어있는 문제가 있었습니다.
    - 또한, 안드로이드, iOS 네이티브 구현에서도 네비게이션 바를 숨기고 Safe Area Inset을 조정하는 기능에 버그가 굉장히 많았습니다.
  - 프론트엔드 개발자들 사이에서 웹 네비게이션 바에 대한 니즈가 굉장히 많았지만, 위 문제들 때문에 오히려 디버깅에 많은 시간을 쏟는 경우가 많았습니다.
  - 따라서 빠른 개선이 필요했고, 위 문제들을 모두 해결한 새로운 웹 네비바 라이브러리를 구현하여 생산성을 크게 개선했습니다.
  - 이 과정에서 프론트엔드 개발자들의 니즈 수집, 구현 단계에서 발견한 네이티브 버그를 해결하기 위해 안드로이드, iOS 개발자와 주도적으로 협업하는 등 단순 코딩을 넘어선 경험을 해볼 수 있었습니다.
- 라이브러리 PoC 프로세스를 도입하고, 메인 리뷰어로 활동했습니다.
  - 개발자가 버그 수정 외의 새로운 구현 아이디어가 있을 때, GitHub issue로 PoC를 먼저 올리고 함께 논의하는 프로세스입니다.
  - 구현을 시작하기 전, 작업의 필요성과 더 좋은 인터페이스에 대해 미리 논의할 수 있었기에, 바로 PR을 올리던 기존 방식에 비해 많은 시간을 아낄 수 있었습니다.
- 라이브러리와 관련된 중요한 지식, 개선 경험, 디버깅 경험을 공유했습니다.
  - [Node.js의 두 가지 모듈 시스템을 라이브러리에서 완벽하게 지원하는 방법](https://toss.tech/article/commonjs-esm-exports-field)을 공유했습니다.
  - [번들러를 설정하는 복잡한 과정 대신 커맨드 한줄로 번들링을 간소화](https://blog.hoseung.me/2023-07-22-improve-library-bundling)한 경험을 공유했습니다.
  - 제품 개발을 하던 중 겪은 [라이브러리 resolution 문제를 Next.js, Webpack 구현을 확인하여 해결](https://github.com/hoseungme/wiki/blob/b16bad3a6736091ed80752edb6fa9dca6c0cb9be/front-end/nextjsserver-side-module-resolution/ko.md)한 과정을 공유했습니다.

## 날짜, 시간 교환시 타임존 명시

- 토스 서버의 거의 모든 API에서는 날짜, 시간 값을 교환할 때 타임존을 명시하고 있지 않았습니다.
- 프론트엔드 개발자가 토스 서버 인스턴스가 전부 한국에 있고, KST에 기반한다는 점을 고려해 직접 타임존을 설정하고 있었습니다. 이는 굉장히 암묵적이고 비직관적이며 변경에 매우 취약한 방식이라고 느껴졌습니다.
- 또한 서버에서 타임존을 명시하지 않는다는 점을 몰랐거나, 관련 지식이 부족한 개발자 분들이 타임존 처리를 하지 못했고, 결국 해외에서 토스앱을 사용한 유저들의 문의가 들어와 대응을 하게 되는 경우가 많았습니다.
- 즉, 개발자 경험과 유저 경험 모두에 영향이 있는 상황이었기에, 바로 [타임존의 필요성에 대한 글](https://blog.hoseung.me/2023-03-23-how-to-transfer-date)을 작성하여 서버 개발자 전체가 즉시 확인할 수 있는 채널에 공유하여 설득하였고, 각 팀별로 새로운 API에 대해 타임존 명시를 시작하게 되었습니다.

# 제품 기여

## 토스유스카드 선택 화면 3D 리소스 용량 92% 절감

- 리소스를 효율적으로 로딩할 방법을 설계하던 중, 카드의 3D 모델 용량이 지나치게 크다는 문제를 발견했습니다.
- 유저가 5가지 색상을 모두 둘러보는 경우, 총 21.5MB의 3D 리소스들을 다운로드 해야했습니다.
- 카드는 모서리를 제외하면 평면인 아주 단순한 형태를 가지고 있는데, 그에 비해 지나치게 용량이 컸기에 개선이 필수적이었습니다.
- 구글에서 개발한 3D 모델 압축기 [Draco](https://github.com/google/draco)를 사용해 간단히 용량을 줄일 수 있었습니다.
- 테스트를 여러번 거쳐 외관 손상은 전혀 없으면서 용량은 가장 작게 나오는 양자화 레벨을 찾아서 압축했습니다.
- 결과적으로 3D 리소스들의 용량 총합을 21.5MB -> 1.8MB까지 절감할 수 있었고, 유저의 네트워크 비용을 92% 절약시킬 수 있었습니다.

<div style="width: 100%; display: flex; flex-flow: row wrap; justify-content: center">
  <div style="position: relative; min-width: 300px; max-width: 560px; width: 50%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/A7M6lioKRMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
  <div style="position: relative; min-width: 300px; max-width: 560px; width: 50%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/ddGYG_xyirI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>

## 저금통 대표 이미지 생성 스크립트 개발

- 토스앱 홈에 저금통 목록을 보여줘야하는 요구사항이 생겼고, 이때 저금통 각각의 대표 이미지가 필요했습니다.
- 하지만 저금통에는 대표 이미지가 존재하지 않았고, 대표 아이콘과 배경색만 존재했기에, 이미지를 직접 생성해야 했습니다.
- 저금통의 대표 아이콘은 [토스페이스](https://toss.im/tossface)를 사용하고 있었고, 배경색은 8가지를 지원하고 있었습니다.
- [sharp](https://sharp.pixelplumbing.com) 라이브러리를 사용해 토스페이스 이미지 파일과 배경색을 합성하는 스크립트를 작성했습니다.
- 요청이 왔을 때 실시간으로 이미지를 생성하는 것은 비효율적이라고 판단했고, 유니코드 이모지 전체에 스크립트를 돌려 생성된 약 24000개의 이미지를 S3에 업로드 했습니다.
- 생성된 대표 이미지의 파일명은 `U+270B_GREY`와 같이 [이모지를 유니코드로 변환](https://blog.hoseung.me/2022-08-25-emoji-and-unicode)한 결과물과 저금통의 배경색 이름을 합쳐 만들었고, 이모지를 유니코드로 변환하는 코드를 서버 개발자분과 공유하여 마이그레이션 작업을 진행했습니다.
- 대표 이미지를 생성하지 않고 요구사항을 해결하려면 타 팀 개발자의 지원, 버전 분기 등 간단한 요구사항에 비해 복잡한 문제를 감수해야 했지만, 이미지 리사이징 처리를 구현해본 경험이 있었기에 자신있게 의견을 내어 요구사항을 최소 공수로 간단히 해결할 수 있었습니다.

## 브라우저 렌더링 버그 우회

- 실시간 채팅 메시지 같은 느낌을 주기 위해 스크롤 방향을 거꾸로 구현해야하는 디자인 요구사항이 있었습니다.
- 이때 Safari에서 `flex-direction: column-reverse`인 경우 생기는 심각한 렌더링 버그가 있었지만, [끊임없이 렌더링 버그를 우회할 방법을 탐구하여 해결](https://github.com/hoseungme/wiki/blob/main/front-end/browser/safari-flex-direction-column-reverse-scroll-and-rendering-issue/ko.md)했습니다.
- 위의 구현으로는 터치가 끝나면 스크롤이 바로 멈춰버린다는 피드백이 있었고, [CSS Transform을 사용한 터치 스크롤러](https://github.com/hoseungme/flickable-scroll)를 직접 개발하여 서비스에 적용했습니다.

<div style="width: 100%; display: flex; flex-flow: row wrap; justify-content: center">
  <div style="position: relative; min-width: 300px; width: 50%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/Lo-si7UopVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
  <div style="position: relative; min-width: 300px; width: 50%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/OfK0HXn7hRo"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>

## 숫자 값 변화 애니메이션 구현

<!-- - 증권 서비스를 사용할 수 없는 10대를 위해, 주식 투자를 간략하게 만들어 제공한 제품입니다.
- **첫 매수 전환율**을 올리기 위한 이터레이션을 성공적으로 마무리했습니다.
  - 기존에는 처음 들어온 유저에게 첫 매수를 유도하면서, 모든 종목을 보여주었습니다.
  - 다만 처음 들어오기도 했고, 주식을 어려워할 가능성도 높은 유저에게 **무턱대고 너무 많은 선택지를 주고 있어 이탈할 가능성이 높다**는 문제가 있었습니다.
  - 따라서 **유저가 관심 분야를 선택하면, 그 분야와 관련된 종목을 추천해주는 방식으로 개선**하였고, 결과적으로 **첫 매수 전환율이 17% 증가**하는 큰 성공을 이루었습니다. -->

- [숫자 값이 변화하는 애니메이션을 구현](https://github.com/hoseungme/wiki/blob/main/front-end/uiux/implement-rolling-number-component-in-react/ko.md)하여 실시간 가격 변동에 어울리는 생동감 있는 유저 경험을 제공했습니다.

<div style="width: 100%; display: flex; justify-content: center">
  <div style="position: relative; max-width: 560px; width: 100%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/uxJIEwMhCb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>

## 편의점 택배 프로모션 템플릿 구현

- 토스앱 내에서 GS25, CU 편의점 택배를 예약할 수 있는 제품에서 일정 금액을 할인해주는 프로모션을 매달 진행했는데, 이때 생기는 비효율적인 상황을 개선했습니다.
- 초기에는 프로모션이 어떤 형태로 진행될지에 대해 예측이 가지 않아 프론트엔드 코드에 하드코딩 하는 방식으로 진행했습니다.
- 다만 프로모션을 여러번 진행하며 어느 정도 동일한 형태를 띄게 되었고, 매번 요청을 받아 하드코딩하여 배포하는 작업이 비효율적으로 느껴졌습니다.
- 따라서 디자인을 고정하여 템플릿화 하고, 해당 템플릿을 채워넣는 JSON 데이터 포맷을 정해 에디터에서 누구나 수정할 수 있도록 만들었습니다.
- 이로써 프로모션 세팅에 프론트엔드 배포가 필요하지 않게 되었고, 팀원들이 다른 작업에 더욱 집중할 수 있게 되어 생산성이 증가했습니다.

## 눈덩이 던지기 게임 구현

- 신규 가입과 리텐션 증가를 유도하기 위해 수많은 이벤트 제품을 개발했습니다.
- [데이터 응답을 적절한 형태로 정규화](https://blog.hoseung.me/2022-06-02-normalization-for-intuitive-component/)하는 등, 직관적으로 이해되는 코드를 작성하기 위해 노력했습니다.
- 특히 눈덩이를 던져 박을 터뜨리는 운동회 게임의 구현을 직접 테스트하며 주도적으로 개선해 나갔습니다.
  - 어느 정도 속도로 touch move가 일어났을 때 투사체가 던져진 것으로 판단할 것인지
  - 투사체가 던져진 방향이 얼마나 벗어나야 목표물에서 빗나갔다고 판단할 것인지
  - 목표물을 향해 투사체가 잘 던져진 경우, 어느 정도 속도로 자연스럽게 이동시킬 것인지, 어떻게 포물선을 그릴 것인지

<div style="width: 100%; display: flex; justify-content: center">
  <div style="position: relative; max-width: 560px; width: 100%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/kJXQZrcpNMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>
