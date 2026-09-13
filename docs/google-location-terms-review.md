# Google 지도·주소 변환 약관 검토안

상태: **Draft — 이 문서의 동의 조항은 게시본이 아니다.** 확인일: 2026-09-13.
관련 작업: [랜딩페이지 이슈 #23](https://github.com/soma17th-369/Laimory-landing-page/issues/23).

실사용자 0명인 출시 전 보완이다. v1.0·기존 시행일·URL을 유지하고, 재동의를 피하기 위해 동의 문서의 수정 범위를 제한하지 않는다. 이번 변경은 DB/catalog와 Android·서버 코드를 수정하지 않는다.

운영팀은 관련 약관에 동의하지 않으면 앱을 이용할 수 없도록 할 예정이다. 사용자 요청에 따라 동의·철회 절차와 제공 통보의 추가 검증은 이번 조사 범위에서 제외하고, 국가·보유기준에 집중한다. 이 운영 전제를 해당 절차의 구현·법적 적정성이 검증되었다는 뜻으로 사용하지 않는다.

## 이번 변경과 남은 작업

| 문서 | 이번 변경 | 게시 전 남은 작업 |
| --- | --- | --- |
| 개인정보 처리방침 | 제1조에 Google 주소 변환·지도 표시·SDK 수집 안내, 제6조에 카카오의 서버 처리 범위, 제8조에 위치 이용 목적 반영 | 아래 제3자 제공·국외이전 초안을 제5·7조 및 관련 동의 안내에 반영 |
| 이용약관 | 제9조에 Google Maps 추가약관·개인정보처리방침 링크 | 국가·보유기준 확정 후 관련 문서와 정합성 확인 |
| 위치기반서비스 이용약관 | 제4·8·11조에서 홈·초안 확인 중의 처리와 최종 AI 전송 선택을 구분 | 아래 Google 제공 및 통보 검토 결과 반영 |
| 제3자 제공 동의 | 아래 수정안을 작성. 현재 `public` HTML에는 미반영 | Google 보유기준을 확정하여 반영. 동의 절차는 운영팀의 적용 범위 |
| 국외 이전 동의 | 아래 수정안을 작성. 현재 `public` HTML에는 미반영 | 국가·보유기준을 확정하여 반영 |

**세 HTML의 사실 안내만으로 Google 관련 고지·동의가 모두 완성되는 것은 아니다.** 국가·보유기준을 확정하여 관련 공개 HTML을 완성하기 전까지 Draft로 유지한다. 미확정 필드를 공개 HTML에 넣지 않고, 이 검토 문서는 Astro의 게시 경로 밖에 둔다. 자동 배포 설정은 변경하지 않는다.

## 국가·보유기준 추가 조사 결과

| 대상 | 공식 자료로 확인한 사실 | 확정할 수 없는 부분 |
| --- | --- | --- |
| Maps 처리 국가 | [Maps 보안 문서의 데이터센터 절](https://developers.google.com/maps/security/compliance/security-compliance)은 미국·칠레·벨기에·핀란드·네덜란드·대만·싱가포르를 열거한다. 같은 절의 앞 문단은 EEA 및 영국 서버에서의 처리 가능성도 설명한다. | 7개국을 전체 이전 국가라고 단정할 수 없다. 영국 언급을 반영하여 8개국으로 늘리는 것만으로 전체 범위가 입증되는 것도 아니다. |
| Maps 보유기준 | [Maps 로그 보유 설명](https://developers.google.com/maps/security/compliance/security-compliance)은 기술지원·운영·보안·용량 계획·제품 개선에 필요한 동안 보유하고, 해당 목적에 더 이상 필요하지 않으면 삭제한다고 설명한다. 익명화된 집계 통계는 더 오래 보유할 수 있다. | 고정된 일수 또는 최대 보유기간은 이 문서에 제시되어 있지 않다. |
| Android 기본 Geocoder | [현재 API 설명](https://developer.android.com/reference/android/location/Geocoder)과 Google의 공개 개인정보·보유정책에서 해당 요청에 적용할 국가 목록·보유기간을 찾지 못했다. | Maps와 국가·보유기준이 동일하다고 확인하지 못했다. |
| Google 공통 보유정책 | [공통 정책](https://policies.google.com/technologies/retention?hl=en-US)은 정보 종류와 목적에 따라 기간이 다르며, 사용자 삭제 후 시스템에서 삭제하는 데 일반적으로 약 2개월, 백업에는 최대 6개월이 걸릴 수 있다고 설명한다. | 이 숫자는 Geocoder 요청정보의 수집일부터 적용되는 보유기간이 아니다. Geocoder가 어느 보유 범주에 속하는지도 이 정책으로 특정할 수 없다. |

현재 Maps의 [서비스별 약관](https://cloud.google.com/maps-platform/terms/maps-service-terms)에는 `Android Geocoder SDK (Restricted GA)`가 있지만, 앱이 사용하는 프레임워크 `android.location.Geocoder`와 동일한 계약 대상임을 확인할 자료는 찾지 못했다. 그 약관의 30일 또는 특정 조건의 무기한 캐시는 **개발자가 받은 결과를 저장하는 조건**이며 Google의 요청 로그 보유기간이 아니다. 2008년 Android Maps 약관에 프레임워크 Geocoder가 포함된다는 사실만으로 현재 계약 적용을 확정하지 않는다.

따라서 이번 추가 조사에서 Geocoder의 국가·보유기준 필드를 확정하지 못했다. `미국`, `30일`, `90일`, `6개월` 등의 값을 추정하여 공개 HTML에 넣지 않는다. 이는 Google의 회신이 법정 필수절차라는 뜻이 아니라, 해당 필드에 적용할 근거를 현재 확보하지 못했다는 뜻이다.

## 코드로 확인한 처리

Android `develop`의 `b676204dffbf12b1b6ba722bf195dddb7031610b`를 기준으로 확인했다. 이전 조사 커밋 `d2e3a7df3c73e176e61db1f8db20becfd2aac4af` 이후 지도·주소 변환 경로에는 변경이 없었다. Google이 제공하는 Geocoder를 사용하는 환경이라는 운영 전제를 적용한다.

- [AndroidLocationAddressResolver](https://github.com/soma17th-369/Laimory-android/blob/b676204dffbf12b1b6ba722bf195dddb7031610b/core/collection/src/main/java/com/soma369/laimory/core/collection/location/AndroidLocationAddressResolver.kt): Android 프레임워크 `android.location.Geocoder.getFromLocation`에 위도·경도를 전달한다. Maps Geocoding REST API를 직접 호출하지 않는다.
- [ResolveStayAddressUseCase](https://github.com/soma17th-369/Laimory-android/blob/b676204dffbf12b1b6ba722bf195dddb7031610b/core/domain/src/main/java/com/soma369/laimory/core/domain/usecase/ResolveStayAddressUseCase.kt): 주소 변환 결과를 기기의 원래 위치 항목에 저장한다. 이동 시작·종료 좌표도 같은 resolver를 사용한다.
- [HomeViewModel](https://github.com/soma17th-369/Laimory-android/blob/b676204dffbf12b1b6ba722bf195dddb7031610b/feature/home/src/main/java/com/soma369/laimory/feature/home/viewmodel/HomeViewModel.kt): 홈의 체류 장소 표시에서도 주소를 변환한다.
- [DraftConsentViewModel](https://github.com/soma17th-369/Laimory-android/blob/b676204dffbf12b1b6ba722bf195dddb7031610b/feature/home/src/main/java/com/soma369/laimory/feature/home/viewmodel/DraftConsentViewModel.kt), [DraftConsentLocationMap](https://github.com/soma17th-369/Laimory-android/blob/b676204dffbf12b1b6ba722bf195dddb7031610b/feature/home/src/main/java/com/soma369/laimory/feature/home/component/DraftConsentLocationMap.kt): 최종 AI 전송 전에 주소를 변환하고 지도 영역을 구성한다. SDK에 전달하는 마커 제목 등 모든 인자가 Google 서버로 전송된다고 단정하지 않는다.
- [OnboardingViewModel](https://github.com/soma17th-369/Laimory-android/blob/b676204dffbf12b1b6ba722bf195dddb7031610b/feature/onboarding/src/main/java/com/soma369/laimory/feature/onboarding/viewmodel/OnboardingViewModel.kt): 현재 온보딩은 `TIMELINE_FIRST_CREATE`와 `TIMELINE_LOCATION`의 문서를 함께 받아 동의를 기록한다. 다만 홈·초안의 지도/주소 호출 자체는 위치약관 단계만 확인한다. 최초 동의 수집과 개별 동의 철회 후 호출 차단은 구분하여 확인해야 한다.

## 동의 경로를 택하는 이유와 한계

Google에 전달하는 위치 이력은 제3자 제공·국외이전 동의를 받는 안으로 작성한다. 이는 현재 확보한 근거에 따른 보수적 수정안이며, Maps/Geocoder가 한국법상 반드시 제3자 제공이라는 개별 유권해석을 확인한 것은 아니다.

[Google Maps 약관 제4.4조](https://cloud.google.com/maps-platform/terms)는 Google 자체 서비스 개선 등 독자적 이용을 허용한다. 앱에 필요한 기능이라는 이유만으로 Firebase Cloud Messaging과 같은 위탁 근거를 그대로 적용하지 않는다. [대법원 2016도13263](https://www.law.go.kr/precInfoP.do?precSeq=184700)도 위탁·제공을 목적과 실질적 관리·이용 관계에 따라 판단한다.

SDK가 직접 수집하는 기기·SDK 정보와 앱이 위치 기록에서 골라 전달하는 좌표는 구분한다. 해외 사업자의 직접 수집을 설명한 [개인정보위 자료](https://pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS292&mCode=I040010000&nttId=10972)를 모든 SDK 호출에 대한 국외이전 면제로 해석하지 않는다.

## 제3자 제공 동의 수정안

대상: `public/terms/third-party-provision-consent/1.0.html`. 아래 `[확정 필요]`는 검토용 표시이며 게시 문구가 아니다.

서문에 다음 목적을 추가한다.

> 회사는 홈 화면의 체류 장소와 타임라인 초안의 위치 정보를 주소·지도로 표시하기 위하여 아래와 같이 Google에 위치정보를 제공합니다.

제1항의 기존 AWS 표와 구분하여 다음 Google 항목을 추가한다. SDK 자체 수집 정보는 처리방침 제1조 라의 안내와 구분한다.

| 제공받는 자 | 제공받는 자의 이용 목적 | 제공하는 개인정보 항목 | 보유·이용 기간 |
| --- | --- | --- | --- |
| **Google LLC — Google Maps 지도 표시** | **위치에 맞는 지도 표시, Google 지도 서비스 제공 및 제품·서비스 개선·운영·보안** | 지도에 표시할 체류·이동 위치로 구성한 지도 영역 정보 | **Maps 요청 로그는 기술지원·운영 감시·보안·용량 계획·제품 개선에 필요한 기간 동안 보관하고 더 이상 필요하지 않으면 삭제. 익명화된 집계 통계는 더 오래 보관할 수 있음.** |
| **Google LLC — Android Geocoder를 통한 주소 변환** | **홈 화면과 초안 확인 화면에서 위치 좌표를 주소로 변환. [확정 필요: 해당 서비스에 적용되는 Google의 추가 이용 목적]** | **주소가 없는 체류 위치와 이동 시작·종료 위치의 위도·경도** | **[확정 필요: Android 기본 Geocoder 요청정보에 적용되는 보유기간 또는 구체적인 보유 결정 기준]** |

Maps 보유기준은 [Google의 로그 보유 설명](https://developers.google.com/maps/security/compliance/security-compliance)에 근거한다. 이를 Geocoder의 보유기간으로 복사하지 않는다.

제2항의 AWS 제공 시점은 AWS에 한정하고 Google 시점을 별도로 추가한다.

> Google에는 홈 화면의 체류 장소 또는 초안 확인 화면에서 주소 변환이 필요할 때, 그리고 위치 상세 지도를 표시·이동·확대축소할 때 관련 정보가 전달됩니다. 이는 타임라인 생성 요청 전에 이루어질 수 있습니다. 최종 AI 전송 대상에서 위치 항목을 해제하더라도 앞서 Google에 전달된 정보가 소급하여 취소되지는 않습니다.

제3·4항의 Google 거부·철회 안내 제안:

> 회원은 Google 지도 표시·주소 변환을 위한 개인정보 제공에 동의하지 않을 수 있습니다. 동의하지 않으면 해당 Google 지도·주소 변환 기능은 이용할 수 없습니다. Google 제공에 관한 동의의 철회 또는 처리 중지 요구는 laimory369@gmail.com으로 접수할 수 있습니다. 회사는 요청을 확인하고 관계 법령에 따라 후속 제공 중단 등 필요한 조치를 한 뒤 처리 결과를 안내합니다. 이미 제공된 정보의 삭제 요구도 같은 창구로 접수할 수 있습니다.

**운영팀 적용 사항 — 이번 추가 조사에서는 검증하지 않음:** 위 초안은 Google 지도·주소 기능에 한정한 거부 효과를 가정했다. 운영팀이 결정한 미동의 시 앱 이용 제한과 일치하도록, 최종 게시 때 기존 AWS 거부 안내와 함께 문구를 맞춘다. 최초 이용 조건을 정했다는 이유로 동의 철회·후속 제공 중단 절차까지 검증된 것으로 보지 않는다. 앱 삭제나 최종 위치 선택 해제를 Google에 대한 별도 동의 철회 수단이라고 쓰지 않는다.

## 국외 이전 동의 수정안

대상: `public/terms/cross-border-transfer-consent/1.0.html`. 기존 AWS·Langfuse 항목과 별도의 Google 항목을 추가하고, 서문이 AWS·Langfuse만 다루는 부분도 함께 고친다.

| 고지 항목 | Google Maps 지도 표시 | Android Geocoder 주소 변환 |
| --- | --- | --- |
| 이전받는 자 | **Google LLC** | **Google LLC** |
| 연락처 | googlekrsupport@google.com — Google 한국어 개인정보처리방침의 문의 창구 | 같은 창구 |
| 이전 근거 | 개인정보 보호법 제28조의8 제1항 제1호(별도 동의) | 같은 근거 |
| 이전 국가 | **[범위 확정 필요]** Maps 보안 문서가 열거한 데이터센터 국가: 미국, 칠레, 벨기에, 핀란드, 네덜란드, 대만, 싱가포르 | **[확정 필요]** Android 기본 Geocoder에 적용되는 국가 |
| 이전 항목 | 체류·이동 위치로 구성한 지도 영역 정보 | 체류 위치 및 이동 시작·종료 위치의 위도·경도 |
| 이전 시기·방법 | 초안 확인 화면에서 위치 상세 지도를 표시·조작할 때 앱의 Maps SDK를 통한 네트워크 전송 | 홈·초안 확인 화면에서 주소 변환이 필요할 때 Android Geocoder를 통한 네트워크 전송 |
| 이용 목적 | 위 제3자 제공 동의 수정안의 Maps 목적 | 위 제3자 제공 동의 수정안의 Geocoder 목적 |
| 보유·이용 기간 | 위 제3자 제공 동의 수정안의 Maps 보유기준 | **[확정 필요]** 위 Geocoder 보유기준 |

Google 연락처는 [Google 개인정보처리방침](https://policies.google.com/privacy?hl=ko)의 공개 문의 주소를 사용했다. Firebase 전용 문의 주소를 다른 제품에 복사하지 않았다.

Maps 문서는 위 7개국을 데이터센터 범위로 안내하면서 앞 문단에 EEA·영국 서버에서의 처리 가능성도 기재한다. 따라서 전체 이전 국가를 확인한 목록으로 과장하지 않는다. Geocoder가 Maps의 계약·처리 범위를 그대로 따른다는 근거도 아직 확인되지 않았다. Google 위치 서비스의 확인자료 6개월, 계정 활동 18개월, 개발자 캐시 30일 등 다른 정보의 보유기간을 여기에 대입하지 않는다.

국외이전 동의의 제2·3항에도 Google 이전 거부·철회 방법과 효과를 위 제공 동의 수정안과 동일한 범위로 추가한다. 동의하지 않는 이용자를 위한 처리 차단 시점은 **최종 타임라인 생성 버튼을 누르기 전인 첫 지도·주소 요청**이다. [개인정보 보호법 제28조의8 제2항](https://law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1029331899)의 고지사항은 동의를 받기 전에 완성해야 한다.

## 처리방침·위치약관에 함께 반영할 후속 문구

- 처리방침 제5조에 위 Google 제공 표를, 제7조에 위 국외이전 표와 거부·철회 안내를 추가한다. 제1조 위치정보 행의 동의 문서도 이에 맞춰 연결한다.
- 처리방침 제7조 AWS 행의 `제5조의 제공 항목`은 `제5조 Amazon Web Services, Inc. 행의 제공 항목`으로 좁힌다. Google 항목까지 AWS가 받는 것으로 읽히지 않도록 한다.
- 처리방침 제6조 FCM·Crashlytics 위탁 행에는 Maps·Geocoder를 덧붙이지 않는다.
- 위치약관 제8조 제4항의 제공 목적에 아래 Google 문구를 추가한다.

> 회사가 제4조의 Google 지도 표시·주소 변환을 위해 위치정보를 제공하는 경우에는 관련 제공·국외이전 동의를 먼저 받습니다. 제공받는 자·목적·항목·보유기준과 국외이전에 관한 사항은 각 동의서에서 정합니다.

- 위치약관 제8조 제5항 및 처리방침 제8조 라의 `이용자가 지정하는 제3자에게 제공하는 서비스를 제공하지 않습니다`는 최종 분류와 대조해야 한다. [위치정보법 제19조](https://www.law.go.kr/LSW/lsLinkCommonInfo.do?lsJoLnkSeq=1032065431)의 통보 대상이라면 실제 통보 절차와 함께 고친다. 확인하지 않은 매회 통보나 30일 모아 알림을 구현된 기능처럼 약속하지 않는다.

## 게시 전 확인사항

1. **국가·보유기준:** 위 표의 미확정 필드를 적용 가능한 공식 자료로 채운다. Google의 개별 회신만이 가능한 입증 방법은 아니지만, 단순 추정은 사용하지 않는다.
2. 위 수정안을 두 동의서 HTML과 처리방침·위치약관에 반영하고 이 Draft 상태 표시를 실제 결과에 맞춰 갱신한다. 최초 게시 후 새 세션에서 본문·URL을 확인한다.

동의·권리 절차의 추가 검증은 사용자 요청으로 이번 조사에서 제외했다. 운영팀의 미동의 시 이용 제한 전제와 실제 적용 문구를 구분하며, 이 문서를 해당 절차에 대한 검증 완료 기록으로 사용하지 않는다.

기존 Crashlytics 공개사항과 [이슈 #22](https://github.com/soma17th-369/Laimory-landing-page/issues/22)의 삭제 수단 후속은 이번 지도·주소 변환 검토와 별도 범위다.
