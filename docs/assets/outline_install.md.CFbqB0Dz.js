import{_ as a,D as s,c as e,l,a as o,I as c,a8 as i,o as n}from"./chunks/framework.CFn5PexY.js";const f=JSON.parse('{"title":"MSD 스마트팩토리란?","description":"그누보드5 설치를 위한 환경 및 설치 방법","frontmatter":{"head":[["link",{"name":"canonical","content":"https://g5guide.github.io/gnuboard/install.html"}]],"description":"그누보드5 설치를 위한 환경 및 설치 방법"},"headers":[],"relativePath":"outline/install.md","filePath":"outline/install.md","lastUpdated":1737660060000}'),p={name:"outline/install.md"},r=i('<h1 id="msd-스마트팩토리란" tabindex="-1">MSD 스마트팩토리란? <a class="header-anchor" href="#msd-스마트팩토리란" aria-label="Permalink to &quot;MSD 스마트팩토리란?&quot;">​</a></h1><p>MSD 스마트팩토리는 생산 공정과 비전검사를 기반으로 한 불량품 검사 시스템입니다. 이 시스템은 생산성과 품질 향상을 목표로 하며, 다음과 같은 기능을 제공합니다.</p><h2 id="_1️⃣-설치-환경" tabindex="-1">1️⃣ 설치 환경 <a class="header-anchor" href="#_1️⃣-설치-환경" aria-label="Permalink to &quot;1️⃣ 설치 환경&quot;">​</a></h2><p>그누보드5를 설치하기 위해서는 아래 조건을 만족해야한다</p><ul><li>PHP 7.2 이상 권장 (최소 PHP 5.2.17 이상)</li><li>MySQL 5.0 이상 또는 MySQL 5.0 이상의 기능을 만족하는 MariaDB</li><li>리눅스 호환 OS</li><li>필수 PHP 확장 <ul><li>GD Library 2.0 이상</li><li>iconv</li></ul></li><li>권장 PHP 확장 <ul><li><a href="https://www.php.net/curl" target="_blank" rel="noreferrer">cURL</a></li><li><a href="https://www.php.net/manual/en/" target="_blank" rel="noreferrer">MBString (Multibyte String)</a></li></ul></li></ul><div class="tip custom-block"><p class="custom-block-title">권장사항</p><p>PHP 7.4 이상, MySQL 5.7(&amp; MariaDB) 사용을 권장한다.</p></div><div class="danger custom-block"><p class="custom-block-title">PHP 5 사용을 권장하지 않음</p><p>PHP 5 버전은 최종 버전인 PHP 5.6.40을 마지막으로 2018년 12월 지원이 완전히 종료되었다.</p></div><div class="warning custom-block"><p class="custom-block-title">환경에 따른 주의 사항</p><ul><li>Nginx에서는 폴더 및 파일에 대한 접근제한 설정이 적용되지 않아 위험에 노출될 수 있으니 주의해야한다 <ul><li>Nginx 사용 시 개발사가 설정을 안내하지 않으니 폴더, 파일 접근제한을 사용자가 알아서 설정해야한다</li></ul></li><li>MySQL 8.0.11 이상의 버전에서 MySQL <code>password()</code> 함수의 제거로 인해 오류가 발생할 수 있다 <ul><li>그누보드 5.2.9.3 버전(2015년 출시) 이전부터 운영되어 오던 사이트(DB 데이터)에서 문제가 발생할 수 있으며, 일부 회원이 로그인에 실패하거나 글, 댓글 수정에 문제를 겪을 수 있다</li><li>이 문제는 보고되었으나 고쳐지지 않고 있다. <a href="https://github.com/gnuboard/gnuboard5/issues/247" target="_blank" rel="noreferrer">그누보드 이슈 #247</a></li></ul></li></ul></div><div class="warning custom-block"><p class="custom-block-title">빌더 사용 시 유의할 내용</p><p>그누보드 기능을 확장해주는 빌더를 사용할 때는 아래와 같은 사항을 유의해야한다.</p><ul><li>그누보드 최신 버전을 지원하는 빌더 선택을 권장 <ul><li>그누보드 업데이트가 제한되므로 보안취약점 및 기능 사용 및 스킨, 플러그인 사용에 제약이 있음</li></ul></li><li>테마와 스킨 선택에 제약이 있음 <ul><li>빌더와 호환되는 테마와 스킨을 사용해야 기능이 온전히 동작할 수도 있음</li><li>일반 테마나 스킨 선택 시 기능 및 사용성 문제가 발생할 수 있음</li></ul></li></ul></div><h2 id="설치-방법" tabindex="-1">설치 방법 <a class="header-anchor" href="#설치-방법" aria-label="Permalink to &quot;설치 방법&quot;">​</a></h2><ol><li>그누보드 최신 버전 다운로드: <a href="https://sir.kr/g5_pds" target="_blank" rel="noreferrer">https://sir.kr/g5_pds</a></li><li>(S)FTP, SSH 접속 등을 통해 서버에 업로드</li></ol>',11),d={class:"tip custom-block"},h={class:"custom-block-title"},u=i('<p>1~2 과정의 그누보드를 다운로드하여 설치하는 대신 Git을 이용해 설치할 수도 있다.</p><p>설치할 폴더에서 코드 내려받기 (뒤에 <code>.</code>은 현재 폴더를 지칭함)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/gnuboard/gnuboard5.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><p>또는 경로를 지정하여 내려받기 (<code>public_html</code> 폴더명 예시)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/gnuboard/gnuboard5.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public_html</span></span></code></pre></div>',5),_=i('<ol start="3"><li>그누보드 파일들을 업로드한 폴더에 <code>data</code> 폴더 생성</li><li>브라우저에서 설치 페이지 접속</li><li>그누보드 약관 동의</li><li>DB 정보 및 관리자 정보, 설치 옵션 입력</li></ol><div class="danger custom-block"><p class="custom-block-title">그누보드 재설치 옵션</p><p>회원, 글, 댓글 등의 <strong>모든 데이터가 삭제</strong>될 수 있으니, 선택에 주의해야 한다. 그누보드 DB 데이터를 삭제하여 초기화할 때만 선택해야 한다.</p></div><div class="tip custom-block"><p class="custom-block-title">쇼핑몰설치 옵션</p><p>쇼핑몰(영카트) 기능을 사용할 때만 선택해야 한다. 쇼핑몰 기능을 사용하지 않는다면 선택을 해제한 후 설치하면 된다.</p><p>쇼핑몰 기능을 사용하지 않는다면, 그누보드 설치 완료 후 <a href="./remove-youngcart.html">영카트 제거</a>를 참고하여 관련된 파일을 삭제하기를 권장한다.</p></div><div class="warning custom-block"><p class="custom-block-title">최고관리자 정보 입력</p><p>그누보드의 모든 권한을 가지는 계정이다.</p><p>최고관리자 계정의 ID의 기본값은 <code>admin</code>이며, 이는 쉽게 공격에 노출될 수 있으니 ID를 적절히 변경하고 비밀번호를 영문 대소문자, 숫자, 특수문자를 조합하여 유추하기 어렵게 설정해야 한다.</p></div><ol start="7"><li>설치가 완료되면 이제 그누보드를 사용할 수 있다.</li><li><a href="./config.html">초기 설정</a>을 참고하여 그누보드의 기본 설정을 참고하여 주요 설정을 살펴보고 변경해주는 것이 좋다.</li></ol>',5);function g(k,b,m,v,P,S){const t=s("Badge");return n(),e("div",null,[r,l("div",d,[l("p",h,[o("Git으로 설치 "),c(t,{type:"tip",text:"권장"})]),u]),_])}const y=a(p,[["render",g]]);export{f as __pageData,y as default};
