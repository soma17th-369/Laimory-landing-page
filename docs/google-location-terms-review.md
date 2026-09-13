# Google 지도·주소 변환 약관 검토

상태: **사용자가 선택한 문구를 PR의 공개 HTML에 반영 · 아직 운영 게시 전**. 확인일: 2026-09-13.
관련 작업: [이슈 #23](https://github.com/soma17th-369/Laimory-landing-page/issues/23), [PR #24](https://github.com/soma17th-369/Laimory-landing-page/pull/24).

실사용자 0명인 출시 전 보완으로 v1.0·기존 시행일·URL을 유지한다. Android·서버·DB/catalog 및 자동 배포 설정은 이번 변경 범위가 아니다. 기존 Crashlytics 항목과 [이슈 #22](https://github.com/soma17th-369/Laimory-landing-page/issues/22)의 삭제 수단 후속은 유지한다.

## 선택한 문구와 적용 범위

사용자는 Google에 문의하지 않고 [Somewhere의 공개 안내](https://npsomewhere.com/privacy.html)와 같은 포괄적 국가·보유기준 표현을 사용하도록 지시했다. 지도 표시와 주소 변환은 전송 항목·시점이 달라 각각의 행으로 기재하고, 아래 두 표현을 통일했다.

| 항목 | 반영 문구 |
| --- | --- |
| 이전 국가 | **미국 및 Google이 관련 서비스 서버를 운영하는 국가** |
| 보유·이용 기간 | **Google의 개인정보처리방침 및 보관 정책에 따라 서비스 운영·법령상 필요한 기간** |

Google의 [개인정보처리방침](https://policies.google.com/privacy?hl=ko), [데이터 보관 정책](https://policies.google.com/technologies/retention?hl=ko), [위치정보 처리 안내](https://policies.google.com/technologies/location-data?hl=ko)를 문서에서 직접 연결한다. Maps의 개발자 캐시 기간이나 다른 Google 서비스의 보관 일수를 Geocoder에 대입하지 않는다. Google에 문의를 발송하지 않았으며, 개별 회신을 이번 문안 반영의 선행 조건으로 두지 않는다.

## 반영한 문서

| 문서 | 반영 내용 |
| --- | --- |
| `public/terms/privacy-policy/1.0.html` | 제1조 위치정보 목적·동의 근거·Google 자체 SDK 수집 안내, 제3조 Google 보유기준, 제5조 제3자 제공 및 제7조 국외이전 표의 Google 두 행, 제8조 개인위치정보 제공 안내 |
| `public/terms/third-party-provision-consent/1.0.html` | Google 두 행과 보유기준, 홈·초안 화면의 제공 시점, Google 정책 링크, 거부·철회 효과 |
| `public/terms/cross-border-transfer-consent/1.0.html` | Google 지도 표시·주소 변환을 별도 표로 추가, 국가·목적·항목·시점·보유기준·연락처·이전 근거, 거부·철회 효과 |
| `public/terms/location-based-service-terms/1.0.html` | 홈·초안 화면의 위치 이용 목적, Google 제공에 대한 별도 동의 및 관련 문서 안내, 최종 AI 전송 선택과 Google 처리의 구분 |
| `public/terms/terms-of-service/1.0.html` | Google Maps 기능·콘텐츠 및 추가약관·개인정보처리방침 링크 |

공개 HTML에는 검토용 미확정 표시가 없다. 이 검토 문서는 게시본 원문이 아니며 Astro의 게시 경로 밖에 둔다.

## 문서 간 정합성

- Google Maps에는 체류·이동 위치로 구성한 지도 영역 정보를, 기본 Android Geocoder에는 주소가 없는 체류 위치 및 이동 시작·종료 위치의 위도·경도를 제공한다고 구분한다.
- Maps SDK가 자체적으로 수집하는 IP·기기·SDK·식별자·진단·상호작용 정보는 처리방침 제1조 라에서 안내하고 두 동의서에서 연결한다.
- Google 전송은 홈·초안 확인 중 발생하며, 최종 AI 전송 선택을 해제해도 앞선 Google 전송이 취소되지는 않는다고 안내한다.
- AWS의 기존 제공 항목·국가·보유기간은 유지한다. 처리방침 제7조의 AWS 항목 참조를 `제5조 Amazon Web Services, Inc. 행`으로 한정하고, 동의서의 선택한 항목만 전송한다는 설명도 AWS에 한정한다.
- Google 지도·주소 변환은 제3자 제공·국외이전 별도 동의 항목으로 작성하며 FCM·Crashlytics 위탁 행에 합치지 않는다.
- 미동의 시 앱을 이용하지 못하게 한다는 운영팀 결정에 따라 두 동의서와 처리방침의 거부·철회 효과를 맞췄다. 권리 행사와 회원 탈퇴 요청은 이메일로 가능하도록 안내한다.
- 개인위치정보 통보 조항에서 현재 지정 제3자 제공 서비스를 하지 않는다는 단정을 제거하고, 해당 제공 시 관계 법령에 따라 통보한다는 조건부 의무로 정리했다. 실제 통보 절차가 구현되었다고 검증한 것은 아니다.

## 공식 자료에서 확인한 사실과 한계

| 자료 | 확인한 사실 | 확정하지 못한 부분 |
| --- | --- | --- |
| [Maps 보안·개인정보 설명](https://developers.google.com/maps/security/compliance/security-compliance) | 데이터센터 7개국(미국·칠레·벨기에·핀란드·네덜란드·대만·싱가포르)과 EEA·영국 처리 가능성을 설명한다. 로그는 기술지원·운영·보안·용량 계획·제품 개선 등 필요에 따라 보유하고 불필요해지면 삭제한다. | 전체 이전 국가 범위, 기본 Geocoder에 같은 기준이 적용되는지 여부 |
| [Google 공통 개인정보처리방침](https://policies.google.com/privacy?hl=ko) 및 [위치정보 보관 안내](https://policies.google.com/technologies/location-data?hl=ko) | 공통 방침은 Android를 포함하며 별도 방침이 있는 서비스는 예외다. 위치정보 보유기간은 정보 내용·사용 방식·기기 및 계정 설정에 따라 달라진다. | 기본 Geocoder 요청에 적용되는 개별 국가·보유 범주 및 최대 기간 |
| [Maps 서비스별 약관](https://cloud.google.com/maps-platform/terms/maps-service-terms) | `Android Geocoder SDK (Restricted GA)` 및 개발자의 캐시 조건을 명시한다. | 앱이 사용하는 프레임워크 `android.location.Geocoder`와 동일한 계약 대상인지 여부. 캐시 조건은 Google의 요청 로그 보유기간이 아니다. |
| [Google EU 표준계약조항 Annex I.B](https://business.safety.google/gdprcontrollerterms/sccs/eu-c2c/) | 보유기간을 수입자의 개인정보·데이터 보관 정책에 따라 정하는 방식으로 설명한다. | 기본 Geocoder의 계약 적용 및 한국법상 고지 충족 여부 |

[개인정보위 2026년 4월 처리방침 작성지침](https://pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS217&mCode=G010030030&nttId=12018) 31쪽은 보유기간을 특정할 수 없으면 결정 기준을 기재할 수 있다고 설명한다. 45쪽은 여러 국가로 이전되는 경우 해당 국가를 모두 기재하도록 안내한다.

**문구 반영 결정은 위 사실 확인이나 법적 적정성 검증을 대신하지 않는다.** 현재 포괄적 표현이 모든 이전 국가의 특정 등 법정 고지사항을 충족한다고 확정하지 않았다. Somewhere의 문안은 표현을 선택한 참고 사례이며, Google의 실제 처리 범위 또는 적법성을 증명하는 자료로 사용하지 않는다.

동의·철회 절차 및 제공 통보의 추가 검증은 사용자 요청에 따라 이번 작업에서 제외했다. 운영팀이 해당 절차를 담당하며, HTML 문구나 미동의 시 앱 이용 제한만으로 실제 구현·법적 적정성이 확인됐다고 기록하지 않는다.

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

## 검증 결과

- Node 22에서 `npm exec --yes --package=node@22 -- npm run build` 통과.
- 6개 약관 HTML의 태그 구조·중복 ID·표 열 수·내부 및 문서 간 링크 검사 통과. 버전·시행일·canonical·스타일 유지 확인.
- Google 국가·보유기준과 수신자·목적·항목·시점의 문서 간 일치 확인.
- 기존 AWS·Langfuse·FCM·Crashlytics 표 내용 및 Crashlytics 파기 조항 유지 확인. AWS의 제5조 참조 범위만 해당 수신자 행으로 한정.
- 6개 `public` HTML과 `dist` 파일 일치 및 검토 문서의 게시 산출물 제외 확인.
- 국외이전 동의서의 데스크톱(1280px)·모바일(390px) 표시, 제3자 제공 동의서·처리방침·위치약관의 모바일 표시 확인. 페이지 가로 넘침 없이 표 안에서 가로 스크롤 가능.
- `git diff --check` 통과. 위 검증은 문서·빌드 검사이며 법적 적정성이나 앱 동의·권리 절차의 구현 검증을 뜻하지 않는다.
