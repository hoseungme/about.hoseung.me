## 프론트엔드 챕터 기여

- 토스 내부 라이브러리들 일부를 오픈소스화한 [toss/slash](https://github.com/toss/slash) 프로젝트의 메인테이너로 기여했습니다.
  - [기여한 PR 및 Issue 목록](https://github.com/toss/slash/issues?q=involves%3AHoseungJang)
- 코드를 작성하며 좋은 아이디어가 생기면 프론트엔드 공통 라이브러리에 추가하고, 기존의 라이브러리에서 불편한 부분은 수정하여 개발 생산성에 기여했습니다.
  - [@toss/storage](https://github.com/toss/slash/tree/main/packages/common/storage) ([문서](https://slash.page/ko/libraries/common/storage/README.i18n))
- 생산성을 올리거나 원활한 소통에 도움이 되는 지식들을 문서화하고 공유했습니다. 필요하다면 기술 블로그에도 작성했습니다.
  - [CommonJS와 ESM에 모두 대응하는 라이브러리 개발하기: exports field](https://toss.tech/article/commonjs-esm-exports-field)

## 서버 챕터 기여

- [Date는 어떻게 주고 받는게 바람직할까요?](https://blog.hoseung.me/2023-03-23-how-to-transfer-date)
  - 토스 대부분의 서버에서 Date를 응답할 때 타임존 정보가 누락되어 있었습니다.
  - 타임존을 명시하지 않아서 생긴 조직 내의 사례, 타임존을 명시하지 않았을 때 생기는 문제점들, 타임존을 지키면 얻을 수 있는 것들을 정리하여 공유했습니다.
  - 각 팀별로 새로운 API에 대해서는 타임존을 명시하는 방향으로 점진적인 개선이 시작되었습니다.

## 덕질 저금통

- 좋아하는 아이돌 그룹의 이름으로 저금을 할 수 있는 제품입니다.
- 브라우저 버그로 인해 디자인 요구사항을 충족하지 못하고 타협할 수도 있었지만, 끝까지 해결 방법을 찾아내 일정에 맞추어 구현했습니다.
  - 실시간 채팅 메시지 같은 느낌을 주기 위해 스크롤 방향을 거꾸로 해야하는 요구사항이 있었습니다.
  - 이때 Safari에서 `flex-direction: column-reverse`인 경우 생기는 심각한 렌더링 버그가 있었지만, [끊임없이 렌더링 버그를 우회할 방법을 탐구하여 해결](https://github.com/HoseungJang/wiki/blob/main/front-end/browser/safari-flex-direction-column-reverse-scroll-and-rendering-issue/ko.md)했습니다.
  - 하지만 위의 방법으로 해결하고 나니 터치가 끝나면 스크롤이 바로 멈춰버려 부자연스러운 문제가 있었습니다.
  - 따라서 이후 CSS Transform을 사용한 터치 스크롤러 오픈소스인 [flickable-scroll](https://github.com/HoseungJang/flickable-scroll)을 직접 개발하여 서비스에 적용했습니다.

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

- [배경 그래픽과 Parallax Scroll을 조합](https://github.com/HoseungJang/wiki/blob/main/front-end/uiux/implement-parallax-scroll-component-in-react/ko.md)하여 다채로운 UX를 제공했습니다.

<div style="width: 100%; display: flex; justify-content: center">
  <div style="position: relative; max-width: 560px; width: 100%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/mPXaqnyDKi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>

<div style="height: 60px"></div>

## 토스유스카드 3D 리소스 용량 92% 개선

- 토스유스카드 발급 화면에서는 three.js를 사용해 카드를 3D로 렌더링하여 유저에게 실제로 카드를 보면서 고르는 경험을 주고 있습니다.
  - **카드는 단순한 평면이라는 특징**에 무색하게 토스유스카드 3D 모델 파일의 용량은 심각하게 큰 문제가 있었습니다.
    - 토스유스카드는 5종류로 이루어져 있는데, 각각의 모델 용량은 2MB ~ 7MB 사이로, **총합하면 21.5MB 였습니다**.
  - 따라서 리서치를 통해 [Draco](https://github.com/google/draco)라는 구글에서 개발한 3D 모델 압축기를 찾아 사용하게 되었습니다.
    - 여러 번의 테스트를 거쳐 3D 모델 외관이 손상되지 않는 선에서의 최저점을 찾아 압축했습니다.
  - 결과적으로 토스유스카드 3D 모델 파일들의 총합 용량이 **21.5MB (22016KB) -> 1820KB 로 대단히 개선**되었고, 즉 유저들의 **네트워크 비용을 약 92% 가까이 절약**해줄 수 있었습니다.
  - 압축된 모델 적용 이후 전후 비교를 해보았을 때, 외관도 손상되지 않고 그대로 유지된 것을 확인했습니다.

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

<div style="height: 60px"></div>

## 토스 모의 주식 투자

- 증권 서비스를 사용할 수 없는 10대를 위해, 주식 투자를 간략하게 만들어 제공한 제품입니다.
- **첫 매수 전환율**을 올리기 위한 이터레이션을 성공적으로 마무리했습니다.
  - 기존에는 처음 들어온 유저에게 첫 매수를 유도하면서, 모든 종목을 보여주었습니다.
  - 다만 처음 들어오기도 했고, 주식을 어려워할 가능성도 높은 유저에게 **무턱대고 너무 많은 선택지를 주고 있어 이탈할 가능성이 높다**는 문제가 있었습니다.
  - 따라서 **유저가 관심 분야를 선택하면, 그 분야와 관련된 종목을 추천해주는 방식으로 개선**하였고, 결과적으로 **첫 매수 전환율이 17% 증가**하는 큰 성공을 이루었습니다.
- [숫자가 올라가는 애니메이션을 직접 구현](https://github.com/HoseungJang/wiki/blob/main/front-end/uiux/implement-rolling-number-component-in-react/ko.md)하여 실시간 주가 제공에 알맞는 생동감 있는 UX를 제공했습니다.

<div style="width: 100%; display: flex; justify-content: center">
  <div style="position: relative; max-width: 560px; width: 100%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/uxJIEwMhCb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>

<div style="height: 60px"></div>

## 토스유스카드 교통카드 인앱 잔액조회 및 충전

- [토스유스카드](https://www.hankyung.com/economy/article/202204251165i)의 교통카드 잔액을 토스 앱에서도 NFC 태깅으로 조회 및 충전할 수 있는 기능을 추가했습니다.
- 교통카드 기능 첫 진입시 거치는 가이드 퍼널의 통과율이 낮은 문제를 개선했습니다.
  - 기존에 첫 유저에 대해 가이드 퍼널이 최초 1회만 노출되었고, NFC 태깅을 실패하면 웹뷰를 닫아버리는 문제가 있어, **태깅에 실패하면 가이드를 다시는 볼 수 없다는 문제**가 있었습니다.
  - 따라서 가이드 퍼널을 **최초 1회가 아닌, NFC 태깅 성공 이력이 있기 전까지 항상 노출**하도록 로직을 수정하여 **첫 유저에게 항상 충분한 설명**이 되도록 개선했습니다.
  - 또한 **NFC 태깅에 실패하더라도 웹뷰가 닫히지 않도록 수정**하여, 유저가 **다시 태깅하기 위해 모든 가이드 퍼널을 다시 거쳐야 한다는 문제를 해결**했습니다.
  - 결과적으로 **안드로이드 11%, iOS 6%의 전환율 증가**를 이뤄냈습니다.
- 교통카드는 실시간 잔액 동기화가 불가능하다는 특징에서 나오는 유저 경험 문제를 적극적으로 방지했습니다.
  - 유저가 잔액 조회를 하지 않으면, 잔액이 업데이트되지 않기 때문에 충전 시 혼동이 발생할 수 있습니다.
  - 충전 퍼널에 진입했을 때 유저의 잔액 정보가 오래된 경우 조회를 유도하도록 개선하여, 혼동을 방지했습니다.

## 토스 치킨 대회

- 입사 후 처음 개발한 제품으로, 만 7세 ~ 만 18세 유저들의 신규 가입과 리텐션 증가를 유도하기 위한 이벤트 제품입니다.
- 기술적으로는 [데이터 응답을 적절한 형태로 정규화](https://blog.hoseung.me/2022-06-02-normalization-for-intuitive-component/)하는 등, 직관적으로 이해되는 코드를 작성하기 위해 노력했습니다.
- 기본적으로 10대가 서로 단합할 수 있는 제품에 반응이 크다는 점을 공략하여, 수많은 신규 유저를 데려올 수 있었던 제품입니다.
- 반응이 워낙 좋다 보니 여러번 오픈하여 진행하게 되었는데, 유저가 재미를 잃지 않도록 점수를 쌓는 방식을 계속 바꾸어 갔습니다.
  - 가장 마지막 토스 치킨 대회는 포켓몬 고에서 영감을 받아, 아래와 같이 눈덩이를 던져 박을 터뜨려 점수를 얻는 게임을 구현했습니다.
  - 순수 자바스크립트 로직으로 구현하였고, 투사체가 날아가는 것이 최대한 자연스럽게 보이도록 아래와 같은 기준을 세워 수많은 테스트를 거쳤습니다.
    - 어느 정도 속도로 touch move가 일어났을 때 투사체가 던져진 것으로 판단할 것인지
    - 투사체가 던져진 방향이 얼마나 벗어나야 목표물에서 빗나갔다고 판단할 것인지
    - 목표물을 향해 투사체가 잘 던져진 경우, 어느 정도 속도로 자연스럽게 이동시킬 것인지, 포물선을 그릴 것인지
    - ...

<div style="width: 100%; display: flex; justify-content: center">
  <div style="position: relative; max-width: 560px; width: 100%; height: 315px">
    <div style="width: 100%; height: 100%; background-color: black"></div>
    <iframe src="https://www.youtube.com/embed/kJXQZrcpNMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%"></iframe>
  </div>
</div>

<div style="height: 60px"></div>
