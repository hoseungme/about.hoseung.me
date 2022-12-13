## 프론트엔드 챕터 기여

- 토스 내부 라이브러리들 일부를 오픈소스화한 [toss/slash](https://github.com/toss/slash) 프로젝트의 메인테이너로 기여했습니다.
  - [기여한 PR 및 Issue 목록](https://github.com/toss/slash/issues?q=involves%3AHoseungJang)
- 코드를 작성하며 좋은 아이디어가 생기면 프론트엔드 공통 라이브러리에 추가하고, 기존의 라이브러리에서 불편한 부분은 수정하여 개발 생산성에 기여했습니다.
  - [@toss/storage](https://github.com/toss/slash/tree/main/packages/common/storage)
    - [문서](https://slash.page/ko/libraries/common/storage/README.i18n)
- 생산성을 올리거나 원활한 소통에 도움이 되는 지식들을 문서화하고 공유했습니다. 필요하다면 기술 블로그에도 작성했습니다.
  - [CommonJS와 ESM에 모두 대응하는 라이브러리 개발하기: exports field](https://toss.tech/article/commonjs-esm-exports-field)

## 토스유스카드 교통카드 인앱 잔액조회 및 충전

- [토스유스카드](https://www.hankyung.com/economy/article/202204251165i)의 교통카드 잔액을 토스 앱에서도 NFC 태깅으로 조회 및 충전할 수 있는 기능을 추가했습니다.
- 교통카드 기능 첫 진입시 거치는 가이드 퍼널의 통과율이 낮은 문제를 개선했습니다.
  - NFC 태깅 단계에서 실패하는 경우, 가이드 퍼널에서 내보내져서 다시는 볼 수 없었습니다.
  - 가이드 퍼널을 최초 1회가 아닌, NFC 태깅 성공 이력이 있기 전까지 항상 거치도록 로직을 수정했습니다.
  - NFC 태깅에 실패하더라도 퍼널에서 내보내지지 않도록 수정하여, 유저가 재진입 후 가이드를 처음부터 거쳐야했던 불편한 경험을 개선했습니다.
  - 결과적으로 안드로이드 11%, iOS 6%의 최종 전환율 개선을 이뤄냈습니다.
- 교통카드는 실시간 잔액 동기화가 불가능하다는 특징에서 나오는 유저 경험 문제를 적극적으로 방지했습니다.
  - 유저가 잔액 조회를 하지 않으면, 잔액이 업데이트되지 않기 때문에 충전 시 혼동이 발생할 수 있습니다.
  - 충전 퍼널에 진입했을 때 유저의 잔액 정보가 오래된 경우 조회를 유도하여 혼동을 방지했습니다.

## 토스 치킨 대회

- 입사 후 처음 개발한 제품으로, 만 7세 ~ 만 18세 유저들의 신규 가입과 리텐션 증가를 유도하기 위한 이벤트 제품입니다.
- [데이터 응답을 적절한 형태로 정규화](https://blog.hoseung.me/2022-06-02-normalization-for-intuitive-component/)하는 등, 직관적으로 이해되는 코드를 작성하기 위해 노력했습니다.
