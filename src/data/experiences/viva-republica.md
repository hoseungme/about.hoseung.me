<div class="cover">
  <img src="/experiences/viva-republica/cover.jpeg" alt="Toss" />
</div>

- [프론트엔드 라이브러리 프로젝트 운영](#프론트엔드-라이브러리-프로젝트-운영)
- [웹 네비게이션 바 프로젝트 리딩](#웹-네비게이션-바-프로젝트-리딩)
- [날짜, 시간 데이터 교환시 타임존 도입](#날짜-시간-데이터-교환시-타임존-도입)
- [대용량 3D 리소스 용량 92% 절감](#대용량-3d-리소스-용량-92-절감)
- [저금통 대표 이미지 생성과 마이그레이션](#저금통-대표-이미지-생성과-마이그레이션)

# 프론트엔드 라이브러리 프로젝트 운영

- 100명이 넘는 모든 사내 프론트엔드 개발자가 사용하는 라이브러리 프로젝트의 운영에 적극적으로 참여했습니다. 입사 후 가장 먼저 목표한 것은 토스의 프론트엔드가 만들어지는 모든 기반 환경을 전부 파악하는 일이었고, 가장 흥미있게 본 것이 공용 라이브러리 프로젝트였던 것이 시작점이었습니다.
- 크고 작은 기여를 정말 많이 하게 되면서 [모듈 시스템](https://blog.hoseung.me/2022-10-04-commonjs-esm-exports-field), [번들링](https://blog.hoseung.me/2023-07-22-improve-library-bundling), 모노레포 등 Node.js 라이브러리 개발과 운영에 대해 깊이 이해하게 되었고, 또한 라이브러리 프로젝트에 대한 거의 모든 질문과 이슈에 답하고 대응할 수 있을 정도로 주요한 기여자가 되었습니다. 이런 이해도를 바탕으로 [거대 오픈소스의 내부 구현으로부터 근본적인 원인을 찾아내 문제를 해결](https://github.com/hoseungme/wiki/blob/4ceddf9f12f17592317174ce9fd2010cf34f41ca/front-end/nextjs/server-side-module-resolution/ko.md)해드리기도 했습니다.
- 그러다보니 프로젝트의 운영에 비효율이 보이기도 했는데, 이미 새로운 기능을 다 구현하고 올린 PR에서 해당 기능의 필요성에 대해 논의하는 등, 사전에 논의를 했다면 시간을 아꼈을 것으로 보이는 일이 많았습니다. 따라서 실제로 작업을 해서 PR을 올리기 전, 작업의 필요성과 구현체의 인터페이스 등을 Issue로 올려 미리 논의하는 PoC 프로세스를 도입하여 메인 리뷰어로 활동했습니다.
- 라이브러리 프로젝트 일부를 오픈소스화한 [Slash 프로젝트의 메인테이너로 활동](https://github.com/toss/slash/issues?q=involves%3Ahoseungme)하기도 했습니다.

# 웹 네비게이션 바 프로젝트 리딩

- 토스 웹뷰 제품의 상단 네비게이션 바는 네이티브 단에서 렌더링됩니다. 하지만 디자인 요구사항에 따라 네비게이션 바의 스타일을 복잡하게 수정해야 하는 경우가 많았습니다.
- 이미 그것을 가능하게 해주는 네이티브단의 구현체가 존재하긴 했지만, 사용하지도 못할 만큼 동작에 버그가 너무 많았고, 코드레벨에서만 제어할 수 있는게 아니라 어드민 웹에서도 설정이 가능한 예측 불가능한 구조로 이루어져 있었습니다. 또한 프론트엔드 단 구현체는 불필요하게 여러 라이브러리와 강결합 되어있었습니다. 결국 개발자들이 본인의 작업 보다는 상단 네비게이션 바의 동작을 디버깅하는 것에 더 많은 시간을 쏟게 되는 일이 빈번했습니다.
- 개선 작업을 위해 이 문제에 접근한 방식은 기존 구현체의 동작이 너무 복잡해지고 불안정해진 근본적인 시작점을 찾는 것이었습니다. 애초에 네이티브에서 웹 제품의 UI 일부를 책임지려고 했던 것 자체가 유연하지 못한 설계였습니다. 기존 구현체의 버그를 하나씩 고쳐나가는 일은 여전히 네이티브와 웹이 UI 책임을 나눠갖게 하는 방식이므로, 이 문제를 근본적으로 제거하려면 웹뷰를 디바이스 스크린 전체에 렌더링하여 모든 UI 책임을 웹뷰가 갖도록 하는 새로운 구현체를 만들어야 했습니다.
- 그 결론에 초점을 맞추어 iOS, 안드로이드 개발자 분들과 긴밀히 협업하였고, 강결합 없이 완전히 독립적으로 동작하며 서비스 코드 한 곳에서만 제어되는 새로운 웹 네비게이션 바 라이브러리를 만들어 기존에 불편을 겪고 있던 수많은 서비스에 안정적으로 적용하였습니다.

# 날짜, 시간 데이터 교환시 타임존 도입

- 토스 서버에서는 API에서는 날짜, 시간 데이터에 타임존을 명시하고 있지 않았습니다. 토스의 물리 서버는 모두 한국에 위치해 있다는 이유 때문이었습니다. 기본적으로 UTC를 기준으로 하는 Unix Timestamp로 관리하는 것도 아니었습니다. 결국 프론트엔드 개발자가 직접 서버가 내려준 ISO 8601 문자열에 `+09:00`을 임의로 붙여서 사용하는, 유연하지 못하고 암묵적이며 비직관적인 구현을 해야했습니다.
- 또한 이런 암묵적인 규칙을 모든 프론트엔드 개발자가 알고 있는 것도 아니었습니다. 따라서 해외로 출국하여 토스앱을 사용하게된 유저들의 문의가 들어와 장애 대응을하는 일이 밤낮을 가리지 않고 빈번했습니다. 개발자 경험 뿐만 아니라 유저에게까지 악영향을 주고 있음에도 누구도 해결하려 나서지 않는 심각한 문제였습니다.
- 바로 [타임존의 필요성에 대한 글](https://blog.hoseung.me/2023-03-23-how-to-transfer-date)을 작성하여 사내 개발자 전체가 즉시 확인할 수 있는 채널에 공유하여 정식으로 공론화했습니다. 이는 토스가 실제로 글로벌 사업을 시작하게 되면서 아주 중요한 기반이 되었습니다.

# 대용량 3D 리소스 용량 92% 절감

- 카드 디자인을 선택하는 화면에서 리소스를 효율적으로 로딩하도록 리팩토링을 하던 중, 3D 리소스의 크기 자체가 근본적으로 너무 크다는 문제를 발견하게 되었습니다. 유저가 5가지 디자인을 모두 둘러보는 경우 다운로드 받는 리소스 용량의 총합은 21.5MB였습니다.
- 카드는 모서리가 둥근 직사각형이라는 아주 단순한 형태를 가지며 색상 또한 복잡하지 않은 조합으로 이루어져 있었으므로, 용량이 큰 이유를 그저 3D 리소스이기 때문이라고 치부하기엔 근거가 부족했습니다. 분명히 최적화할 수 있는 부분이 아주 많이 존재할 것으로 보였습니다.
- 그래픽 디자이너 분과 함께 용량을 많이 차지할만한 부분을 제거해가며 리소스를 다시 뽑아내는 것은 좋은 해결책이 아니며, 그걸 알아서 다 해주는 최적화 도구가 분명히 있을 것이라고 판단하였고, 구글에서 개발한 3D 리소스 압축기인 [Draco](https://github.com/google/draco)를 찾아 사용하게 되었습니다.
- 무리해서 압축을 하면 리소스 외관이 손상되는 문제가 있어서 리소스 별로 여러번 테스트를 거쳐 손상이 없는 최소 용량으로 압축했고, 모든 리소스 용량의 총합을 1.8MB까지 대폭 줄일 수 있었습니다. 이는 기존의 21.5MB에서 92%나 개선된 수치입니다.
- 카드 디자인 선택 화면은 하루에도 수천명 단위의 신규 유저가 유입되는 곳이므로, 유저 네트워크 비용 뿐만 아니라 CDN 인프라 비용도 크게 개선할 수 있었습니다.

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

# 저금통 대표 이미지 생성과 마이그레이션

- 팀에서 청소년이 목표를 설정하여 저축을 할 수 있는 저금통 제품을 운영하고 있었는데, 토스앱 홈에서 유저가 가지고 있는 저금통 목록을 보여줘야 하는 요구사항이 생겼습니다.
- 홈은 Server Driven UI로 이루어져 있었는데, 그곳에 정의된 리스트 아이템 컴포넌트는 대표 이미지 파일을 요구하고 있었습니다. 하지만 저금통 제품에서는 유니코드 이모지 하나와 배경색 색상 코드를 각각 문자열로 가지고 있을 뿐, 그걸 하나의 이미지 파일로써 가지고 있진 않았습니다.
- 여기서 선택지는 두 가지였습니다. 홈 팀에서 저금통의 기존 데이터 형식에 따라 새로운 컴포넌트를 정의하고 네이티브에서 대응한 뒤 버전 분기를 만들거나, 저희 팀에서 저금통이 대표 이미지를 갖도록 마이그레이션을 진행하거나.
- 전자로 진행하면 홈 팀의 iOS, 안드로이드, 서버 개발자 세 분과 소통해야하며 결과물에 최소 버전이 생기기 때문에, 작업의 요구사항은 "저금통 목록을 보여준다"로 간단한 것에 비해 과정이 복잡하다고 생각했습니다. 반면 후자로 진행하면 저와 저희 팀의 서버 개발자 분만 작업하면 되었고, 무엇보다 유저 경험에 결정권이 있는 동료분이 버전 분기 없이 전체 반영이 되길 희망하셨기에 후자를 선택했습니다.
- 대표 이미지를 생성하는 코드 구현 자체는 간단했습니다. [이모지를 유니코드로 변환하는 방법](https://blog.hoseung.me/2022-08-25-emoji-and-unicode)을 공부하여 [토스페이스](https://toss.im/tossface) 이미지 파일을 불러왔고, [sharp](https://sharp.pixelplumbing.com) 라이브러리를 사용해 불러온 이미지 뒤에 배경색을 입혔습니다.
- 고민이 되었던 지점은 저금통의 대표 이미지를 요청이 왔을 때 실시간으로 생성하여 영구 캐싱할지, 미리 모든 경우의 수에 대해 대표 이미지를 생성 해둘지를 결정하는 것이었습니다. 저금통을 생성할 때 선택할 수 있는 이모지는 약 3000개이고 배경색이 8종류로 제한되어 있었기 때문에, CDN 앞에 새로운 인프라 구성을 필요로 하고 캐시 적중률도 높지 않을 전자에 비해 작업 비용과 인프라 비용 모두 저렴했던 후자를 선택했습니다.
- 다른 방식을 선택했다면 타 팀과 소통하며 개발에 일주일 이상, 모든 유저에게 노출되기까지 3주 이상이 걸렸을 일이었지만, 위 방식대로 진행하여 단 2일만에 마무리할 수 있었습니다.

<!-- 
# 다양한 단기 이벤트 제품 개발

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
- 따라서 웹에서 팀원 누구나 특정 색상 카드의 신청을 일정 기간 막을 수 있도록 만들었고, 매번 팀원의 요청부터 배포까지 걸리던 10~20분의 시간을 10초 아래로 단축시켰습니다. -->
<!-- 
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
</div> -->
