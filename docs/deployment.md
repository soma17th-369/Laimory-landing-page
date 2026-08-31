# Vercel 배포 및 Route 53 연결 가이드

이 문서는 CLI 없이 Vercel Dashboard, GitHub, AWS Management Console에서 설정하는 절차를
설명합니다.

배포 흐름은 다음과 같습니다.

- Pull Request → GitHub Actions 빌드 → Vercel Preview
- `main` push → GitHub Actions 빌드 → Vercel Production
- 대표 주소 → `https://laimory.app`
- `www.laimory.app` → `https://laimory.app` 영구 리다이렉트

`vercel.json`에서 Vercel Git 자동 배포를 비활성화했으므로 실제 배포는 GitHub Actions가
담당합니다.

## 0. 시작 전 확인

먼저 이 저장소의 배포 설정을 `main` 브랜치에 반영합니다. Vercel 프로젝트를 만들 때
Vercel이 `vercel.json`과 GitHub Actions 워크플로를 확인할 수 있어야 합니다.

준비할 권한은 다음과 같습니다.

- Vercel 프로젝트를 생성할 수 있는 Owner 또는 Member 권한
- GitHub 저장소의 Actions Secrets를 등록할 수 있는 권한
- Route 53의 `laimory.app` Public Hosted Zone 레코드를 변경할 수 있는 AWS 권한

## 1. Vercel 프로젝트 생성

1. [Vercel Dashboard](https://vercel.com/dashboard)에 로그인합니다.
2. 왼쪽 위 Team/Workspace 선택기에서 이 프로젝트를 소유할 팀을 선택합니다.
3. 오른쪽 위 **Add New… → Project**를 선택합니다.
4. **Import Git Repository**에서 GitHub 저장소
   `soma17th-369/Laimory-landing-page`를 찾습니다.
5. 저장소가 보이지 않으면 **Adjust GitHub App Permissions**를 눌러 해당 저장소 접근을
   허용합니다.
6. 저장소 옆의 **Import**를 누릅니다.
7. Configure Project 화면에서 다음 값을 확인합니다.

| 항목 | 값 |
| --- | --- |
| Project Name | `laimory-landing-page` |
| Framework Preset | `Astro` |
| Root Directory | `.` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | 기본값 유지 |

8. Environment Variables는 현재 필수 값이 없으므로 비워 둡니다.
9. **Deploy**를 눌러 프로젝트를 생성합니다.

초기 Git 배포가 `Canceled`로 표시되더라도 `vercel.json`의 Git 자동 배포 비활성화 설정에
따른 것일 수 있습니다. 프로젝트가 생성되었다면 다음 단계에서 GitHub Actions로 Production
배포를 실행합니다.

프로젝트 생성 후 **Project → Settings → General**에서 Node.js Version이 `22.x`인지
확인합니다. 저장소의 `package.json`에도 `22.x`가 지정되어 있습니다.

## 2. Vercel 식별자와 Access Token 확인

GitHub Actions에는 다음 세 값이 필요합니다.

### VERCEL_PROJECT_ID

1. Vercel Dashboard에서 생성한 프로젝트를 엽니다.
2. **Settings → General**로 이동합니다.
3. 페이지 아래쪽 **Project ID**에서 `prj_`로 시작하는 값을 복사합니다.

이 값이 `VERCEL_PROJECT_ID`입니다.

### VERCEL_ORG_ID

1. Vercel 왼쪽 위 Team/Workspace 선택기에서 프로젝트 소유 팀을 선택합니다.
2. 팀 Dashboard의 **Settings → General**로 이동합니다.
3. **Team ID**에서 `team_`으로 시작하는 값을 복사합니다.

Secret 이름은 `VERCEL_ORG_ID`이지만 입력값은 프로젝트를 소유한 Vercel **Team ID**입니다.

### VERCEL_TOKEN

1. 오른쪽 위 프로필 사진을 선택합니다.
2. **Account Settings → Tokens**로 이동합니다.
3. **Create Token**을 누릅니다.
4. 알아보기 쉬운 이름을 입력합니다. 예: `laimory-github-actions`
5. Scope는 프로젝트를 소유한 Team/Workspace를 선택합니다.
6. 만료 기간을 정하고 토큰을 생성합니다.
7. 화면에 한 번 표시되는 토큰을 안전한 곳에 복사합니다.

토큰은 저장소 파일, 이슈, PR, 채팅 또는 빌드 로그에 기록하지 않습니다.

## 3. GitHub Actions Secrets 등록

1. GitHub에서 `soma17th-369/Laimory-landing-page` 저장소를 엽니다.
2. **Settings** 탭을 선택합니다.
3. 왼쪽 메뉴에서 **Secrets and variables → Actions**를 선택합니다.
4. **Secrets** 탭에서 **New repository secret**을 누릅니다.
5. 다음 세 Secret을 각각 등록합니다.

| Name | Secret 값 |
| --- | --- |
| `VERCEL_TOKEN` | Vercel에서 생성한 Access Token |
| `VERCEL_ORG_ID` | Vercel Team ID |
| `VERCEL_PROJECT_ID` | Vercel Project ID |

등록 후 Secret 목록에는 이름만 표시되고 값은 다시 조회할 수 없습니다.

## 4. 첫 Production 배포

1. GitHub 저장소의 **Actions** 탭을 엽니다.
2. 왼쪽에서 **CI and Vercel deployment**를 선택합니다.
3. **Run workflow**를 누릅니다.
4. Branch에서 `main`을 선택하고 다시 **Run workflow**를 누릅니다.
5. 실행 상세 화면에서 `Build`와 `Deploy production`이 모두 성공하는지 확인합니다.
6. `Deploy production`의 Job Summary에 표시된 `*.vercel.app` 주소를 엽니다.
7. 한국어 `/`와 영어 `/en/` 페이지를 모두 확인합니다.

도메인은 이 Vercel Production 주소가 정상 동작하는 것을 확인한 다음 연결합니다.

워크플로가 처음 실행되면 GitHub에 `preview`, `production` Environment가 생성됩니다.
운영 배포 전 승인이 필요하면 **GitHub 저장소 → Settings → Environments → production**에서
Required reviewers를 설정합니다.

## 5. Vercel에 운영 도메인 추가

1. Vercel Dashboard에서 `laimory-landing-page` 프로젝트를 엽니다.
2. **Settings → Domains**로 이동합니다.
3. 입력란에 `laimory.app`을 입력하고 **Add**를 누릅니다.
4. 이어서 `www.laimory.app`도 별도로 추가합니다.
5. 두 도메인 카드에 표시되는 DNS 레코드의 **Type**, **Name**, **Value**를 기록합니다.

Route 53이 DNS를 관리하므로 Vercel이 Nameserver 변경을 제안하더라도 네임서버는 바꾸지
않습니다. Vercel 도메인 카드가 안내하는 `A`, `CNAME`, 필요 시 `TXT` 레코드만 Route 53에
등록합니다.

현재 프로젝트는 `https://laimory.app`을 대표 주소로 사용합니다. 두 도메인이 모두 추가되면:

1. `www.laimory.app` 도메인 카드에서 **Edit**을 누릅니다.
2. **Redirect to**에서 `laimory.app`을 선택합니다.
3. Permanent Redirect를 선택해 저장합니다.

## 6. AWS Route 53에 apex A 레코드 등록

먼저 기존 DNS 레코드 화면을 캡처하거나 현재 값을 별도로 기록합니다. 문제가 생겼을 때
이전 웹 호스팅 값으로 되돌리는 데 필요합니다.

1. [AWS Management Console](https://console.aws.amazon.com/)에 로그인합니다.
2. 상단 검색창에서 **Route 53**을 검색해 서비스를 엽니다.
3. 왼쪽 메뉴에서 **Hosted zones**를 선택합니다.
4. `laimory.app` Public Hosted Zone을 선택합니다.
5. 기존에 이름이 `laimory.app`인 `A` 레코드가 있는지 확인합니다.
6. 기존 레코드가 있으면 선택 후 **Edit record**, 없으면 **Create record**를 누릅니다.
7. 다음과 같이 입력합니다.

| Route 53 필드 | 입력값 |
| --- | --- |
| Record name | 비워 둠 |
| Record type | `A – Routes traffic to an IPv4 address` |
| Alias | `Off` |
| Value | Vercel의 `laimory.app` 도메인 카드에 표시된 IPv4 주소 |
| TTL | `300` |
| Routing policy | `Simple routing` |

8. **Create records** 또는 **Save**를 누릅니다.

Vercel 공식 문서의 일반 A 값은 `76.76.21.21`이지만, Vercel 프로젝트의 Domains 화면에
다른 값이 표시되면 화면에 표시된 프로젝트별 값을 사용합니다.

## 7. AWS Route 53에 www CNAME 레코드 등록

1. 같은 Hosted Zone에서 이름이 `www.laimory.app`인 기존 `A` 또는 `CNAME`을 확인합니다.
2. 기존 웹 호스팅 레코드가 있으면 **Edit record**, 없으면 **Create record**를 누릅니다.
3. 다음과 같이 입력합니다.

| Route 53 필드 | 입력값 |
| --- | --- |
| Record name | `www` |
| Record type | `CNAME – Routes traffic to another domain name` |
| Value | Vercel의 `www.laimory.app` 도메인 카드에 표시된 CNAME 대상 |
| TTL | `300` |
| Routing policy | `Simple routing` |

4. **Create records** 또는 **Save**를 누릅니다.

Vercel 공식 문서의 일반 CNAME 값은 `cname.vercel-dns-0.com`이지만, 프로젝트 화면에
고유한 값이 표시되면 그 값을 사용합니다.

zone apex인 `laimory.app`에는 CNAME을 만들 수 없습니다. apex에는 6단계의 `A` 레코드를,
`www`에는 이 단계의 `CNAME`을 사용합니다.

## 8. Vercel이 소유권 확인 TXT를 요구하는 경우

도메인이 다른 Vercel 계정이나 프로젝트에서 사용 중이면 Vercel Domains 화면에 TXT 검증
레코드가 표시될 수 있습니다.

1. Route 53 Hosted Zone에서 **Create record**를 누릅니다.
2. Record name에는 Vercel이 보여 주는 검증 이름을 입력합니다. 보통 `_vercel` 형태입니다.
3. Record type은 `TXT`를 선택합니다.
4. Value에는 Vercel이 보여 주는 검증 값을 그대로 붙여 넣습니다.
5. TTL은 `300`, Routing policy는 `Simple routing`으로 저장합니다.
6. Vercel의 Domains 화면으로 돌아가 **Refresh** 또는 **Verify**를 누릅니다.

## 9. 변경하면 안 되는 Route 53 레코드

다음 레코드는 이번 웹 호스팅 연결과 별개이므로 삭제하거나 덮어쓰지 않습니다.

- `NS`, `SOA`
- 이메일 수신용 `MX`
- SPF, DKIM, DMARC, 서비스 검증용 기존 `TXT`
- 다른 서비스에서 사용 중인 서브도메인 레코드

기존 apex `AAAA`가 이전 웹 호스팅을 가리키거나 `www`에 서로 충돌하는 레코드가 있으면
Vercel에서 Invalid Configuration이 발생할 수 있습니다. 기존 레코드의 용도를 확인한 뒤,
이전 웹 호스팅용으로 확인된 충돌 레코드만 제거합니다.

제한적인 `CAA` 레코드가 이미 있다면 Vercel Domains 화면에 추가로 요구되는 인증기관 값만
등록합니다.

## 10. 연결 완료 확인

1. Vercel 프로젝트의 **Settings → Domains**를 새로고침합니다.
2. `laimory.app`과 `www.laimory.app`이 모두 **Valid Configuration**인지 확인합니다.
3. 인증서 발급이 끝나 HTTPS가 활성화될 때까지 기다립니다.
4. 시크릿 브라우저 창에서 `https://laimory.app`을 엽니다.
5. `https://laimory.app/en/`도 엽니다.
6. `https://www.laimory.app`이 `https://laimory.app`으로 이동하는지 확인합니다.
7. 브라우저 주소창의 자물쇠/사이트 정보에서 인증서 오류가 없는지 확인합니다.

Route 53 변경 자체는 일반적으로 빠르게 반영되지만 기존 TTL과 각 DNS resolver 캐시에 따라
사용자별 반영 시점은 달라질 수 있습니다.

## 11. 이후 배포와 롤백

- Pull Request를 만들면 `Build` 후 Vercel Preview가 생성됩니다.
- PR을 `main`에 병합하면 Production이 배포되고 운영 도메인이 새 배포를 가리킵니다.
- 외부 fork와 Dependabot PR은 보안상 Vercel Secrets를 사용하지 않고 `Build`만 실행합니다.
- 운영 장애 시 Vercel 프로젝트의 **Deployments**에서 정상인 이전 배포의 메뉴를 열어
  **Promote to Production**합니다.
- 토큰을 폐기하거나 갱신하면 GitHub의 **Settings → Secrets and variables → Actions**에서
  `VERCEL_TOKEN`을 즉시 갱신합니다.

## 공식 문서

- [Vercel Dashboard에서 프로젝트 만들기](https://vercel.com/docs/projects/managing-projects)
- [Vercel Project ID 확인](https://vercel.com/docs/project-configuration/general-settings)
- [Vercel Team ID 확인](https://vercel.com/docs/accounts#find-your-team-id)
- [Vercel에 커스텀 도메인 추가](https://vercel.com/kb/guide/how-do-i-add-a-custom-domain-to-my-vercel-project)
- [Vercel 도메인 리다이렉트](https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting)
- [GitHub Actions Secrets 등록](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets)
- [Route 53 콘솔에서 레코드 생성](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-creating.html)
- [Route 53 DNS 레코드 유형](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html)
