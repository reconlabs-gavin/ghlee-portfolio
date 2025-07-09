# AWS S3 + CloudFront + GitHub Actions 설정 가이드

## 1. S3 버킷 생성
1. AWS Console → S3 → "Create bucket"
2. 버킷 이름: `your-portfolio-bucket` (고유한 이름)
3. Region: `ap-northeast-2` (서울)
4. 퍼블릭 액세스 차단 해제
5. "정적 웹사이트 호스팅" 활성화
   - Index document: `index.html`
   - Error document: `index.html`

## 2. S3 버킷 정책 설정
- 권한 탭 → 버킷 정책 → `s3-bucket-policy.json` 내용 붙여넣기
- `YOUR_BUCKET_NAME`을 실제 버킷 이름으로 변경

## 3. CloudFront 배포 생성
1. AWS Console → CloudFront → "Create Distribution"
2. Origin Domain: S3 버킷 정적 웹사이트 엔드포인트
3. Viewer Protocol Policy: "Redirect HTTP to HTTPS"
4. Default Root Object: `index.html`
5. Custom Error Pages:
   - HTTP Error Code: 403, 404
   - Response Page Path: `/index.html`
   - HTTP Response Code: 200

## 4. IAM 사용자 생성
1. AWS Console → IAM → Users → "Create user"
2. 사용자 이름: `github-actions-user`
3. 정책 연결: `github-actions-policy.json` 내용으로 커스텀 정책 생성
4. Access Key 생성 및 저장

## 5. GitHub Secrets 설정
Repository → Settings → Secrets and variables → Actions

다음 secrets 추가:
- `AWS_ACCESS_KEY_ID`: IAM 사용자의 Access Key ID
- `AWS_SECRET_ACCESS_KEY`: IAM 사용자의 Secret Access Key
- `AWS_REGION`: ap-northeast-2
- `S3_BUCKET_NAME`: 생성한 S3 버킷 이름
- `CLOUDFRONT_DISTRIBUTION_ID`: CloudFront 배포 ID
- `DOMAIN_NAME`: 연결할 도메인 (선택사항)

## 6. Route 53 도메인 연결 (선택사항)
1. Route 53 → Hosted zones → 도메인 선택
2. A 레코드 생성:
   - Record name: 비워두기 (root domain용)
   - Record type: A
   - **Alias: Yes** (반드시 체크)
   - Route traffic to: **"Alias to CloudFront distribution"** 선택
   - Distribution: CloudFront distribution 도메인 선택 (예: d10qv6lzjlgx83.cloudfront.net)
   
   ⚠️ **주의**: S3 웹사이트 엔드포인트 URL을 직접 입력하지 마세요!

## 7. SSL 인증서 (선택사항)
1. Certificate Manager → Request certificate
2. 도메인 이름 입력 및 DNS 검증
3. CloudFront 배포에 SSL 인증서 연결

## 배포 프로세스
1. `main` 브랜치에 코드 푸시
2. GitHub Actions가 자동으로:
   - 의존성 설치
   - 테스트 실행
   - 프로젝트 빌드
   - S3에 배포
   - CloudFront 캐시 무효화
3. 몇 분 후 웹사이트 접속 가능

## 예상 비용
- S3: 월 $0.01 미만
- CloudFront: 월 $0.10 미만
- Route 53: 월 $0.50
- 총 예상 비용: 월 $1 미만

## 트러블슈팅

### 도메인 일시 중지 해결
Route 53 도메인이 이메일 미인증으로 일시 중지된 경우:

1. **새 인증 이메일 요청**
   - AWS Console → Route 53 → Registered domains → 도메인 선택
   - "Send email again" 버튼 클릭

2. **이메일 인증**
   - 등록된 이메일 주소 확인 (스팸 메일함 포함)
   - 발신자: noreply@registrar.amazon.com
   - 인증 링크를 15일 이내에 클릭

3. **도메인 재활성화 확인**
   - 인증 후 몇 시간 내에 도메인 상태 변경
   - 웹사이트 접속 가능 여부 확인

### 일반적인 배포 문제
- **403/404 에러**: CloudFront Custom Error Pages 설정 확인
- **빌드 실패**: GitHub Actions 로그에서 오류 메시지 확인
- **S3 업로드 실패**: IAM 정책 및 AWS Secrets 확인

### Route 53 A 레코드 생성 오류

**오류 1**: `ARRDATAIllegalIPv4Address` 또는 잘못된 IPv4 주소
- **원인**: 값 필드에 URL을 직접 입력
- **해결**: 드롭다운에서 CloudFront distribution 선택

**오류 2**: "엔드포인트 필드은(는) 값이 있어야 합니다"
- **원인**: Alias 설정이 불완전하거나 잘못됨

**올바른 A 레코드 생성 순서**:
1. 레코드 이름: 비워두기 (root domain용)
2. 레코드 유형: **A – IPv4 주소 및 일부 AWS 리소스로 트래픽 라우팅**
3. **별칭 토글: ON** (반드시 활성화)
4. 트래픽 라우팅 대상: **"CloudFront 배포에 대한 별칭"** 선택
5. 엔드포인트: 드롭다운에서 CloudFront distribution 선택
6. 라우팅 정책: 단순 라우팅

⚠️ **중요**: 값이나 엔드포인트 필드에 직접 타이핑하지 마세요!
