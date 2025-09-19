<div class="cover">
  <img src="/experiences/viva-republica/cover.jpeg" alt="Toss" />
</div>

토스는 월 1300만 이상의 유저가 사용하는 핀테크 슈퍼앱으로, 이 곳에서의 제 역할은:

- 만 7세 ~ 만 18세 유저를 타겟하는 Teens Team에서 일했습니다.
  - MAU가 120만이던 시점에 합류하여, 200만 이상으로 성장할 때까지 프론트엔드 제품 전체를 혼자서 개발 및 유지보수 했습니다.
  - 제품 디자인에 대해 기술적인, 그리고 유저 경험과 관련된 피드백을 적극적으로 제공했습니다.
  - 제품 내에서 개선 포인트를 주도적으로 찾아 해결했습니다.
  - 팀 전체의 업무 생산성 향상을 위한 개선 포인트를 주도적으로 찾아 해결했습니다.
- 팀 업무 바깥으로 전사적인 개발자 생산성 향상에 기여했습니다.
  - 새로운 지식 또는 문제 해결 과정에 대해서 적극적으로 문서화하여 공유했습니다.
  - 100명이 넘는 프론트엔드 개발자들이 사용하는 공용 라이브러리 전체의 운영에 기여했습니다.
  - 조직 내에서 기술적으로 통일되지 못한 것들에 대한 표준 확립을 리드했습니다.

# 목차

- [프론트엔드 챕터](#프론트엔드-챕터)
  - [프론트엔드 라이브러리 프로젝트 기여](#프론트엔드-라이브러리-프로젝트-기여)
  - [Slash 메인테이너 활동](#slash-메인테이너-활동)
  - [타임존 명시 제안](#타임존-명시-제안)
- [Teens Team](#teens-team)
  - [다양한 단기 이벤트 제품 개발](#다양한-단기-이벤트-제품-개발)
  - [코레일, 티머니 교통카드 제휴](#코레일-티머니-교통카드-제휴)
  - [애플 수험생 할인관 제휴](#애플-수험생-할인관-제휴)
  - [토스유스카드 신청 화면 3D 리소스 용량 92% 절감](#토스유스카드-신청-화면-3d-리소스-용량-92-절감)
  - [저금통 대표 이미지 생성 스크립트 개발](#저금통-대표-이미지-생성-스크립트-개발)
  - [편의점 택배 프로모션 운영 생산성 개선](#편의점-택배-프로모션-운영-생산성-개선)
  - [토스유스카드 운영 생산성 개선](#토스유스카드-운영-생산성-개선)
- [인터랙션](#인터랙션)
  - [토스유스카드 선택 인터랙션 구현](#토스유스카드-선택-인터랙션-구현)
  - [눈덩이 던지기 게임 구현](#눈덩이-던지기-게임-구현)
  - [모의주식투자 주가 변동 애니메이션 구현](#모의주식투자-주가-변동-애니메이션-구현)
  - [덕질저금통 시차 스크롤 구현](#덕질저금통-시차-스크롤-구현)
  - [브라우저 렌더링 버그 우회를 위한 터치 스크롤러 구현](#브라우저-렌더링-버그-우회를-위한-터치-스크롤러-구현)

# 프론트엔드 챕터

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
  - 따라서 빠른 개선이 필요했고, 위 문제들을 모두 해결한 새로운 웹 네비게이션 바 라이브러리를 구현하여 생산성을 크게 개선했습니다.
  - 이 과정에서 프론트엔드 개발자들의 니즈 수집, 구현 단계에서 발견한 네이티브 버그를 해결하기 위해 안드로이드, iOS 개발자와 주도적으로 협업하는 등 단순 코딩을 넘어선 경험을 해볼 수 있었습니다.
- 라이브러리 PoC 프로세스를 도입하고, 메인 리뷰어로 활동했습니다.
  - 개발자가 버그 수정 외의 새로운 구현 아이디어가 있을 때, GitHub issue로 PoC를 먼저 올리고 함께 논의하는 프로세스입니다.
  - 구현을 시작하기 전, 작업의 필요성과 더 좋은 인터페이스에 대해 미리 논의할 수 있었기에, 바로 PR을 올리던 기존 방식에 비해 많은 시간을 아낄 수 있었습니다.
- 라이브러리와 관련된 중요한 지식, 개선 경험, 디버깅 경험을 공유했습니다.
  - [Node.js의 두 가지 모듈 시스템을 라이브러리에서 완벽하게 지원하는 방법](https://toss.tech/article/commonjs-esm-exports-field)을 공유했습니다.
  - [번들러를 설정하는 복잡한 과정 대신 커맨드 한줄로 번들링을 간소화](https://blog.hoseung.me/2023-07-22-improve-library-bundling)한 경험을 공유했습니다.
  - Next.js의 라이브러리 resolution 문제를 [Next.js와 Webpack의 내부 구현을 확인하여 해결](https://github.com/hoseungme/wiki/blob/4ceddf9f12f17592317174ce9fd2010cf34f41ca/front-end/nextjs/server-side-module-resolution/ko.md)한 과정을 공유했습니다.

## Slash 메인테이너 활동

- 토스 내부에서 사용하는 프론트엔드 라이브러리를 오픈소스화한 [Slash](https://github.com/toss/slash) 프로젝트의 메인테이너로 기여했습니다.
- [기여한 PR 및 Issue 목록](https://github.com/toss/slash/issues?q=involves%3Ahoseungme)

## 타임존 명시 제안

- 토스 서버의 거의 모든 API에서는 날짜, 시간 값을 교환할 때 타임존을 명시하고 있지 않았습니다.
- 프론트엔드 개발자가 토스 서버 인스턴스가 전부 한국에 있고, KST에 기반한다는 점을 고려해 직접 타임존을 설정하고 있었습니다. 이는 굉장히 암묵적이고 비직관적이며 변경에 매우 취약한 방식이라고 느껴졌습니다.
- 또한 서버에서 타임존을 명시하지 않는다는 점을 몰랐거나, 관련 지식이 부족한 개발자 분들이 타임존 처리를 하지 못했고, 결국 해외에서 토스앱을 사용한 유저들의 문의가 들어와 대응을 하게 되는 경우가 많았습니다.
- 즉, 개발자 경험과 유저 경험 모두에 영향이 있는 상황이었기에, 바로 [타임존의 필요성에 대한 글](https://blog.hoseung.me/2023-03-23-how-to-transfer-date)을 작성하여 사내 개발자 전체가 즉시 확인할 수 있는 채널에 공유하여 설득하였습니다.
- 이후 타임존 명시가 중요한 컨벤션으로 자리잡게 되었고, 이는 토스가 실제로 글로벌 사업을 시작하게 되면서 아주 중요한 기반이 되었습니다.

# Teens Team

## 다양한 단기 이벤트 제품 개발

- MAU를 성장시키기 위한 수많은 단기 이벤트 제품을 개발했습니다.
- 가장 많이 신규 유저를 초대한 학급에게 치킨 기프티콘을 선물하는 토스 치킨 대회 등이 대표적입니다.
- 단기 이벤트 제품은 엄청난 양의 코드를 단기간에 작성하여 제품을 문제 없이 동작하게 만들어야 하며, 그 사이에도 요구사항이 빠르게 변화한다는 특징을 가집니다. 또한 일반적인 제품과 다르게 유저를 시각적으로 매료시킬 수 있는 UI 구현에 많은 시간을 들여야 합니다.
- 따라서 이벤트를 진행할 때마다 공통적으로 사용되는 컴포넌트, 인터랙션, API 요청 등을 재사용 가능하게 만드는 작업에 큰 노력을 기울였습니다. 재사용 가능하게 만든 로직 중 아주 대표적인 것은 학교/학년/반을 검색하는 API와 컴포넌트였는데, 이는 단기 이벤트를 넘어 Teens의 거의 모든 제품에서 사용되는 코어 로직 중 하나였습니다.
- 짧게 사용하게 될 이벤트 제품인 만큼 정상 동작에만 집중하게 되기 마련이지만, 상술하였듯 업무 강도를 줄이고 생산성을 극대화하기 위해 재사용 가능한 모듈을 최대한 만들어내는 것이 주요 과제 중 하나였기에, [모든 코드를 최대한 직관적으로 깔끔하게 작성](https://blog.hoseung.me/2022-06-02-normalization-for-intuitive-component)하려고 노력했습니다.

## 코레일, 티머니 교통카드 제휴

- 코레일, 티머니와 협업하여 토스유스카드에 교통카드 기능을 제공하고, 토스앱 내에 잔액조회 및 충전 페이지를 개발했습니다.
- 코레일 충전에 장애가 많아 대응하는 상황이 자주 생겼고, 이를 개선하기 위해 원클릭으로 충전 기능을 비활성화 시킬 수 있는 기능을 어드민에 추가하는 것 부터 시작하여, 백엔드 개발자와 함께 대기열 시스템을 개발하여 코레일 서버로 가는 트래픽을 분산시켰습니다. 따라서 장애 대응 횟수가 현저히 줄어들었고, 또한 대응 과정이 매우 간소화 되었습니다.
- 코레일, 티머니 교통카드 각각에 대해 소득 공제를 아주 간편하게 진행할 수 있는 페이지를 개발했습니다. 코레일, 티머니의 공식 소득공제 웹페이지를 유저에게 보이지 않는 투명한 웹뷰에 띄운 뒤, 유저는 토스앱에서 최소한의 정보만 입력하면, 나머지는 소득공제 웹뷰에서 스크립트를 실행하여 자동으로 진행하는 방식입니다. 이를 통해 기존에는 소득공제 신청 주기마다 팀원이 직접 알림을 보내고 대응을 해주어야 했지만, 그 과정을 거치지 않아도 소득공제를 유저 스스로 매우 간단하게 진행할 수 있게 되었습니다.

## 애플 수험생 할인관 제휴

- 수능을 마친 수험생들이 아이패드, 맥북을 가장 저렴한 값에 구매할 수 있는 할인관을 애플코리아와 제휴하여 개발했습니다.
- 하이마트, 프리스비 등 오프라인 매장에서 토스앱 내 바코드를 활용하여 구매할 수 있는 방식이었고, 담당 개발자인 제가 직접 담당자와 소통하였습니다.
- 그 과정에서 기술적인 이야기가 오갔는데, 매장 측에서 바코드 표준과 값을 잘못 전달하는 상황 등을 원활히 해결할 수 있었습니다.

## 토스유스카드 신청 화면 3D 리소스 용량 92% 절감

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
- 하지만 저금통에는 대표 이모지와 배경색만 존재했기에, 이를 활용해 대표 이미지를 새로 생성해야 했습니다.
- 저금통의 대표 이모지는 [토스페이스](https://toss.im/tossface)를 사용하고 있었고, 배경색은 8가지를 지원하고 있었습니다.
- [sharp](https://sharp.pixelplumbing.com) 라이브러리를 사용해 토스페이스 이미지와 배경색을 합성하는 스크립트를 작성했습니다.
- 요청이 왔을 때 실시간으로 이미지를 생성하는 것은 비효율적이라고 판단했고, 이모지 전체에 대해 스크립트를 실행하여 이미지를 생성한 후 S3에 업로드 하기로 하였습니다.
- 이미지 생성 후 서버에서 마이그레이션을 진행하기 위해, 이미지 파일명을 `U+270B_GREY`와 같이 유니코드와 저금통의 배경색을 합쳐 만들기로 정하고, [이모지를 유니코드로 변환](https://blog.hoseung.me/2022-08-25-emoji-and-unicode)하는 방법을 빠르게 학습하여 문서화 하였습니다.
- 대표 이미지를 생성하지 않고 요구사항을 해결하려면 타 팀 개발자의 지원, 버전 분기 등 간단한 요구사항에 비해 복잡한 문제를 감수해야 했지만, 이미지 처리를 해본 경험이 있었기에 자신있게 의견을 내어 요구사항을 최소 리소스로 간단히 해결할 수 있었습니다.

## 편의점 택배 프로모션 운영 생산성 개선

- 토스앱 내에서 GS25, CU 편의점 택배를 예약할 수 있는 제품에서 일정 금액을 할인해주는 프로모션을 매달 진행했는데, 이때 생기는 비효율적인 상황을 개선했습니다.
- 초기에는 프로모션이 어떤 형태로 진행될지에 대해 예측이 가지 않아 매번 새롭게 디자인하고, 전부 프론트엔드 코드에 하드코딩 하는 방식으로 진행했습니다.
- 다만 프로모션을 여러번 진행하며 어느 정도 동일한 형태를 띄었기에, 디자인을 고정하여 템플릿으로 만들자고 제안하였고, 해당 템플릿을 채우는 JSON 포맷을 정해 웹에서 팀원 누구나 수정할 수 있도록 만들었습니다.
- 기존에는 디자인과 개발을 매번 새롭게 진행하며 1~2일씩 소모하였지만, 개선 후엔 웹에서 10분 정도 간단히 JSON 수정만 하면 바로 반영할 수 있게 되었습니다.

## 토스유스카드 운영 생산성 개선

- 토스유스카드는 코레일, 티머니, 카드 유통사 등 많은 이해관계자와 협업하기 때문에 운영 변수가 많이 존재했습니다.
- 그 중 반복적으로 발생하는 예외 상황들이 있었는데, 카드 재고가 부족하여 추가 신청이 불가능한 상황이 대표적이었습니다.
- 따라서 웹에서 팀원 누구나 특정 색상 카드의 신청을 일정 기간 막을 수 있도록 만들었고, 매번 팀원의 요청부터 배포까지 걸리던 10~20분의 시간을 10초 아래로 단축시켰습니다.

# 인터랙션

## 토스유스카드 선택 인터랙션 구현

- 토스유스카드 신청 화면에서 카드 선택 인터랙션을 개선하였습니다.

<div style="width: 100%; display: flex; justify-content: center">
  <div style="position: relative; max-width: 560px; width: 100%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/LdrSjTIRh8o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>

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

## 모의주식투자 주가 변동 애니메이션 구현

- 모의주식투자 [주가 변동에 애니메이션을 적용](https://github.com/hoseungme/wiki/blob/main/front-end/uiux/implement-rolling-number-component-in-react/ko.md)하여 생동감을 주었습니다.

```
<RollingNumber>
  {price.toLocaleString("en-US")}
</RollingNumber>
```

<div style="width: 100%; display: flex; justify-content: center">
  <div style="position: relative; max-width: 560px; width: 100%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/uxJIEwMhCb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>

## 덕질저금통 시차 스크롤 구현

- 덕질저금통 홈에 [시차 스크롤을 적용](https://github.com/hoseungme/wiki/blob/main/front-end/uiux/implement-parallax-scroll-component-in-react/ko.md)하여 우주에 있는 듯한 입체적인 느낌을 주었습니다.

```
<ParallexBackground ratio={1.5} url={backgroundImageURL}>
  <Home />
</ParallexBackground>
```

<div style="width: 100%; display: flex; justify-content: center">
  <div style="position: relative; max-width: 560px; width: 100%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/mPXaqnyDKi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>

## 브라우저 렌더링 버그 우회를 위한 터치 스크롤러 구현

- 실시간 채팅과 비슷한 느낌을 주기 위해 스크롤 방향을 거꾸로 구현해야하는 디자인 요구사항이 있었습니다.
- 이때 Safari에서 `flex-direction: column-reverse`인 경우 생기는 렌더링 버그가 있었지만, [끊임없이 렌더링 버그를 우회할 방법을 찾아내어](https://github.com/hoseungme/wiki/blob/main/front-end/browser/safari-flex-direction-column-reverse-scroll-and-rendering-issue/ko.md) 해결했습니다.
- 하지만 위의 구현으로는 터치가 끝나면 스크롤이 바로 멈춰버린다는 피드백이 있었고, [CSS Transform을 사용한 터치 스크롤러](https://github.com/hoseungme/flickable-scroll)를 직접 개발하여 적용했습니다.

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
