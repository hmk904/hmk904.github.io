import{_ as t,c as d,o as r,a8 as s}from"./chunks/framework.CFn5PexY.js";const b=JSON.parse('{"title":"MSD 총괄 모니터링","description":"그누보드는 통일된 Request 처리를 지원하지 않으며 분산된 Endpoint를 사용한다. 요청에 따라 각자의 요청을 처리하고 대부분은 HTML로 응답한다. 대부분의 요청에 같은 초기화 로직이 실행되고 기능 확장을 위한 파일을 로드하므로 대부분의 요청에서 기능 확장을 적용할 수 있다.","frontmatter":{"head":[["link",{"name":"canonical","content":"https://g5guide.github.io/developers/lifecycle.html"}]],"description":"그누보드는 통일된 Request 처리를 지원하지 않으며 분산된 Endpoint를 사용한다. 요청에 따라 각자의 요청을 처리하고 대부분은 HTML로 응답한다. 대부분의 요청에 같은 초기화 로직이 실행되고 기능 확장을 위한 파일을 로드하므로 대부분의 요청에서 기능 확장을 적용할 수 있다."},"headers":[],"relativePath":"monitoring/info.md","filePath":"monitoring/info.md","lastUpdated":1737645842000}'),a={name:"monitoring/info.md"},o=s('<h1 id="msd-총괄-모니터링" tabindex="-1">MSD 총괄 모니터링 <a class="header-anchor" href="#msd-총괄-모니터링" aria-label="Permalink to &quot;MSD 총괄 모니터링&quot;">​</a></h1><p>asdfasdfdsfdasfdf MSD 스마트팩토리는 생산성과 품질을 극대화하기 위해 생산 공정, 품질 공정, 실시간 모니터링을 통합하며, 생산계획 및 일일계획 설정 기능을 제공합니다. 주요 구성 요소는 아래와 같습니다.</p><p>경로를 지정하여 내려받기 (<code>MyFolder</code> 폴더명 예시)</p><div class="info custom-block"><p class="custom-block-title">Git 주소</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/gnuboard/gnuboard5.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MyFolder</span></span></code></pre></div></div><h2 id="_1️⃣-기술-스택" tabindex="-1">1️⃣ 기술 스택 <a class="header-anchor" href="#_1️⃣-기술-스택" aria-label="Permalink to &quot;1️⃣ 기술 스택&quot;">​</a></h2><p>WPF에 사용된 기술 스택입니다.</p><table><thead><tr><th><strong>카테고리</strong></th><th><strong>기술/라이브러리</strong></th><th><strong>설명</strong></th></tr></thead><tbody><tr><td>언어</td><td>C#</td><td>주요 프로그래밍 언어</td></tr><tr><td>아키텍처 패턴</td><td>MVVM</td><td>뷰와 비즈니스 로직을 구분하여 유지보수성, 확장성, 테스트, 용이성 향상</td></tr><tr><td>통신 방식</td><td>REST API</td><td>서버 송수신</td></tr><tr><td>실시간 통신</td><td>MQTT.Net</td><td>MQTT 프로토콜 기반 실시간 통신</td></tr><tr><td>UI/UX</td><td>LiveCharts2, MaterialDesign</td><td>차트 및 UI 디자인</td></tr><tr><td>ORM</td><td>Dapper</td><td>경량 ORM, 데이터베이스 쿼리 처리</td></tr><tr><td>Serialization</td><td>Newtonsoft.Json</td><td>JSON 직렬화/역직렬화</td></tr><tr><td>데이터베이스</td><td>PostgreSQL</td><td>데이터 관리</td></tr></tbody></table><h2 id="_2️⃣-주요-화면-및-기능" tabindex="-1">2️⃣ 주요 화면 및 기능 <a class="header-anchor" href="#_2️⃣-주요-화면-및-기능" aria-label="Permalink to &quot;2️⃣ 주요 화면 및 기능&quot;">​</a></h2><p>총괄 모니터링 시스템을 위한 화면을 다음과 같이 구성하였습니다.</p><table><thead><tr><th>화면</th><th>설명</th><th>세부 기능</th></tr></thead><tbody><tr><td><strong>로그인 화면</strong></td><td>사용자 인증 및 권한 관리</td><td>- 사용자 정보 입력<br>- 권한 확인 및 로그인 처리</td></tr><tr><td><strong>실시간 모니터링</strong></td><td>생산성과 품질의 실시간 상태 확인</td><td>- <strong>생산 공정</strong>: 생산 실시간 모니터링<br>- <strong>품질 공정</strong>: 품질 실시간 모니터링</td></tr><tr><td><strong>품질 통계</strong></td><td>품질 지표의 통계 분석 및 시각화</td><td>- 품질 데이터 집계<br>- 통계 결과 차트화</td></tr><tr><td><strong>생산 계획 <br> 일일 계획</strong></td><td>중장기 및 일일 생산 계획 설정 기능 제공</td><td>- 생산 계획 수립<br>- 작업 일정 설정 및 관리</td></tr></tbody></table><h2 id="_3️⃣-고도화-전략" tabindex="-1">3️⃣ 고도화 전략 <a class="header-anchor" href="#_3️⃣-고도화-전략" aria-label="Permalink to &quot;3️⃣ 고도화 전략&quot;">​</a></h2><table><thead><tr><th><strong>카테고리</strong></th><th><strong>전략/요소</strong></th><th><strong>설명</strong></th></tr></thead><tbody><tr><td><strong>아키텍처 고도화</strong></td><td>MVVM 강화</td><td>View, ViewModel, Model 간 역할 분리를 재점검하고, DI(Dependency Injection)나 Event Aggregator 등의 패턴을 활용해 모듈화를 강화하여 유지보수성과 확장성을 높임</td></tr><tr><td><strong>성능 최적화 및 병목 제거</strong></td><td>UI 렌더링 최적화</td><td>대량의 데이터 바인딩, 무거운 애니메이션 등 프레임률 저하를 일으키는 요소를 식별하고 가상화(VirtualizingStackPanel), Data Virtualization 등을 활용해 성능을 개선</td></tr><tr><td></td><td>네트워크 안전성 확보</td><td>TLS/SSL을 적용하고 방화벽 정책과 암호화된 통신 프로토콜을 사용하여 데이터 전송 구간을 안전하게 관리</td></tr><tr><td><strong>운영·배포 자동화(DevOps) 도입</strong></td><td>지속적 통합/지속적 배포(CI/CD)</td><td>GitHub Actions, Azure DevOps, Jenkins 등을 이용해 빌드·테스트·배포 과정을 자동화함으로써 릴리스 사이클을 단축</td></tr><tr><td></td><td>버전 관리 정책</td><td>ClickOnce나 MSIX 같은 배포 방식을 통해 업데이트 편의성을 높이고, 롤백이 용이하도록 버전 히스토리를 체계적으로 관리</td></tr></tbody></table><h2 id="🙂-기대-효과" tabindex="-1">🙂 기대 효과 <a class="header-anchor" href="#🙂-기대-효과" aria-label="Permalink to &quot;🙂 기대 효과&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>생산성 향상</strong>:</p><ul><li>실시간 모니터링 및 사이클타임 계산으로 공정 최적화.</li><li>효율적인 생산계획 및 일일계획 수립을 통해 작업 성과 개선.</li></ul><p><strong>품질 개선</strong>:</p><ul><li>비전 검사 시스템으로 불량품 식별 및 빠른 문제 해결.</li><li>데이터 기반 분석으로 불량률 감소와 품질 목표 달성 지원.</li></ul><p><strong>운영 효율성 증대</strong>:</p><ul><li>MQTT와 RabbitMQ를 활용한 신속한 데이터 통신으로 공정 운영 효율화.</li><li>통합 시스템을 통한 작업 간소화 및 비용 절감.</li></ul><p><strong>보안 강화</strong>:</p><ul><li>JWT 인증으로 사용자별 데이터 접근 보안 강화.</li><li>RestAPI를 활용한 안전하고 신뢰성 높은 데이터 전송 구현.</li></ul><p><strong>확장성 및 유연성</strong>:</p><ul><li>Restful API와 메시지 브로커 구조로 기능 확장이 용이.</li><li>다양한 클라이언트와 연동 가능하여 미래 기술 적용에도 유연하게 대처.</li></ul></div><hr>',15),e=[o];function i(n,l,h,g,c,p){return r(),d("div",null,e)}const _=t(a,[["render",i]]);export{b as __pageData,_ as default};
