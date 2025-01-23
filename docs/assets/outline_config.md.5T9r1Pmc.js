import{_ as a,c as i,o as s,a8 as e}from"./chunks/framework.CFn5PexY.js";const g=JSON.parse('{"title":"초기 설정","description":"그누보드 설치 후 초기 설정 및 관리페이지 주소 변경, 영카트 제거, 사이트 기본 설정, 짧은 주소, 게시판 설정 등 주요 설정.","frontmatter":{"head":[["link",{"name":"canonical","content":"https://g5guide.github.io/gnuboard/config.html"}]],"description":"그누보드 설치 후 초기 설정 및 관리페이지 주소 변경, 영카트 제거, 사이트 기본 설정, 짧은 주소, 게시판 설정 등 주요 설정."},"headers":[],"relativePath":"outline/config.md","filePath":"outline/config.md","lastUpdated":1737654769000}'),l={name:"outline/config.md"},t=e(`<h1 id="초기-설정" tabindex="-1">초기 설정 <a class="header-anchor" href="#초기-설정" aria-label="Permalink to &quot;초기 설정&quot;">​</a></h1><p>그누보드를 설치 후 보안을 위한 조치나 사이트 운영에 기초적인 설정을 해주는 것이 좋다.</p><h2 id="관리페이지-접근-주소-변경" tabindex="-1">관리페이지 접근 주소 변경 <a class="header-anchor" href="#관리페이지-접근-주소-변경" aria-label="Permalink to &quot;관리페이지 접근 주소 변경&quot;">​</a></h2><p>그누보드 관리페이지 접근 주소는 <code>https://.../adm</code>이다. 취약점을 이용하는 공격자들은 이런 알려진 주소로 공격을 시도하므로 주소 자체를 변경해두면 위험을 사전에 방지할 수 있다.</p><p><code>adm</code> 폴더의 이름을 변경하고 <code>config.php</code> 파일에서 <code>G5_ADMIN_DIR</code> 상수의 값을 변경해주면 된다.</p><p>관리페이지 폴더명을 <code>adm</code>에서 <code>my_backoffice</code>로 변경하는 예시이다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># shell 에서 폴더명을 변경하거나 FTP 프로그램을 사용하여 폴더명을 변경한다</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line diff remove"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> adm</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_backoffice</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.php</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.php</span></span></code></pre></div><p><code>config.php</code> 파일에서 <code>G5_ADMIN_DIR</code> 상수의 값을 변경해준다.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line diff remove"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;G5_ADMIN_DIR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;adm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line diff add"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;G5_ADMIN_DIR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;my_backoffice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span></code></pre></div><p>관리페이지는 변경한 폴더명으로 <code>https://.../my_backoffice</code> 주소로 접근할 수 있다.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>그누보드 패치 시 <code>config.php</code> 파일을 확인없이 덮어쓰지 않도록 주의해야 한다. 덮어 썼다면 <code>G5_ADMIN_DIR</code> 값을 다시 변경해두자.</p></div><h2 id="미사용-영카트-제거" tabindex="-1">미사용 영카트 제거 <a class="header-anchor" href="#미사용-영카트-제거" aria-label="Permalink to &quot;미사용 영카트 제거&quot;">​</a></h2><h2 id="기본-사이트-설정" tabindex="-1">기본 사이트 설정 <a class="header-anchor" href="#기본-사이트-설정" aria-label="Permalink to &quot;기본 사이트 설정&quot;">​</a></h2><p>그누보드 관리페이지 &#39;환경설정 -&gt; 기본환경설정&#39;(adm/config_form.php)에서 사이트의 이름과 회원가입, 게시판 공통 설정 등을 변경해주는 것이 좋다.</p><h3 id="홈페이지-기본환경-설정" tabindex="-1">홈페이지 기본환경 설정 <a class="header-anchor" href="#홈페이지-기본환경-설정" aria-label="Permalink to &quot;홈페이지 기본환경 설정&quot;">​</a></h3><ul><li>홈페이지 제목 <ul><li>브라우저에 표시되는 제목, 검색엔진 결과에 나오는 사이트 제목이다</li></ul></li><li>관리자 메일 주소 &amp; 관리자 메일 발송이름 <ul><li>이메일 발송 시 사용되는 발신자 이메일 주소와 이름</li></ul></li><li>포인트 사용 <ul><li>포인트 기능을 사용하지 않는다면 이 기능을 비활성화하면 성능 향상에 도움이 된다</li></ul></li><li>에디터 선택 <ul><li>기본으로 사용할 DHTML 에디터를 지정해준다</li></ul></li><li>방문자분석 스크립트 <ul><li>구글, 네이버, 빙 등에서 서비스하는 방문자 추적 스크립트 및 구글 서치 콘솔, 웹마스터 도구 등에서 사이트 인증 코드를 여기에 설정할 수 있다</li></ul></li></ul><h3 id="회원가입-설정" tabindex="-1">회원가입 설정 <a class="header-anchor" href="#회원가입-설정" aria-label="Permalink to &quot;회원가입 설정&quot;">​</a></h3><ul><li>아이디,닉네임 금지단어 <ul><li>일부 기본 값이 설정되어 있으나 사이트 이름이나 도메인 및 사이트 유형에 따라 필요한 단어를 아이디, 닉네임에 사용하지 못하도록 추가 설정해두는 것이 좋다<div class="info custom-block"><p class="custom-block-title">INFO</p><p>이 설정은 비회원의 글쓴이 이름에는 적용되지 않는다.</p></div></li></ul></li><li>회원가입약관 &amp; 개인정보처리방침 <ul><li>당장 설정하지 못하더라도 회원가입 등 개인정보를 수집하는 하려면 반드시 게시해야하는 내용을 잊지 말고 설정해야 한다</li></ul></li></ul><h3 id="짧은-주소-설정" tabindex="-1">짧은 주소 설정 <a class="header-anchor" href="#짧은-주소-설정" aria-label="Permalink to &quot;짧은 주소 설정&quot;">​</a></h3><p>짧은 주소 설정은 처음 선택 후 변경하지 않는 것이 좋다. 사이트 운영 중 변경하면 기존 주소 체계에 영향을 주므로 주의해야 한다. &quot;숫자&quot; 형식을 권장한다.</p><div class="danger custom-block"><p class="custom-block-title">&quot;글 이름&quot; 형식은 사용하지 말자</p><p>글의 제목을 주소로 사용하는 &quot;글 이름&quot; 형식은 글 제목이 변경되면 글의 주소 또한 변경되므로 검색엔진의 노출이나 링크가 깨지는 문제가 있으므로 <em>절대 사용하지 말자</em>.</p><p>또한, 같은 제목을 가진 글이 여럿일 때 주소의 중복을 피하기 위한 대처가 되어있지만, 불완전하여 주소가 중복되거나 변경되는 문제가 발견되었다. 그누보드 이슈 <a href="https://github.com/gnuboard/gnuboard5/issues/293" target="_blank" rel="noreferrer">#293</a> <a href="https://github.com/gnuboard/gnuboard5/issues/294" target="_blank" rel="noreferrer">#294</a> <a href="https://github.com/gnuboard/gnuboard5/issues/295" target="_blank" rel="noreferrer">#295</a></p></div><h2 id="게시판-설정" tabindex="-1">게시판 설정 <a class="header-anchor" href="#게시판-설정" aria-label="Permalink to &quot;게시판 설정&quot;">​</a></h2><p>설치 직후에 이미 생성된 4개의 게시판이 있고, 이 게시판들을 계속 사용할 수 있으며 필요에 따라 게시판 설정을 변경해주는 것이 좋다.</p><p>각 게시판의 상단에 &#39;톱니바퀴&#39; 아이콘을 눌러 게시판 설정 페이지에 들어갈 수 있으며, 관리자페이지 &#39;게시판관리&#39;(/adm/board_list.php) 메뉴에서도 설정할 수 있다.</p><p>게시판 제목과 포인트, 에디터 그리고 권한 설정을 변경해주는 것이 좋다.</p>`,25),n=[t];function h(p,o,d,c,r,k){return s(),i("div",null,n)}const f=a(l,[["render",h]]);export{g as __pageData,f as default};
