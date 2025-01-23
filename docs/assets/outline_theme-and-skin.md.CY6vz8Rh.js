import{_ as t,c as d,o as e,a8 as a}from"./chunks/framework.CFn5PexY.js";const m=JSON.parse('{"title":"테마와 스킨","description":"그누보드 테마와 스킨 기능과 설정 안내 가이드","frontmatter":{"head":[["link",{"name":"canonical","content":"https://g5guide.github.io/gnuboard/theme-and-skin.html"}]],"description":"그누보드 테마와 스킨 기능과 설정 안내 가이드"},"headers":[],"relativePath":"outline/theme-and-skin.md","filePath":"outline/theme-and-skin.md","lastUpdated":1737612054000}'),o={name:"outline/theme-and-skin.md"},r=a('<h1 id="테마와-스킨" tabindex="-1">테마와 스킨 <a class="header-anchor" href="#테마와-스킨" aria-label="Permalink to &quot;테마와 스킨&quot;">​</a></h1><p>그누보드는 사이트의 전체 디자인을 구성하는 레이아웃과 게시판, 회원 등의 스킨으로 사이트 디자인을 구성할 수 있다. 테마에는 레이아웃과 스킨이 포함되어 있다.</p><h2 id="테마" tabindex="-1">테마 <a class="header-anchor" href="#테마" aria-label="Permalink to &quot;테마&quot;">​</a></h2><p>그누보드에는 &quot;basic&quot; 테마를 포함하고 있으며 기본으로 적용된 상태로 그누보드가 설치된다.</p><p>테마는 <code>/theme</code> 폴더에 설치되어있으며, <a href="https://sir.kr/g5_theme" target="_blank" rel="noreferrer">테마를 내려받아</a> 이 폴더에 설치하여 사용할 수 있다. 관리페이지 &quot;환경설정 -&gt; 테마설정&quot;에서 테마를 선택하여 사용할 수 있다.</p><div class="tip custom-block"><p class="custom-block-title">테마 사용을 권장</p><p>그누보드에 테마 기능이 추가되기 전에는 설치 루트 폴더에 있는 파일이 레이아웃을 구성하는데 사용됐었다.</p><p>이런 파일 중 <code>head.sub.php</code>, <code>tail.sub.php</code> 파일 및 관련 CSS, JS 파일은 그누보드 관리페이지에도 사용된다. 이 파일들을 수정하면 관리페이지 기능에 영향을 줄 수 있으므로 주의해야 한다. 테마를 사용하면 이런 주요 파일들과 분리하여 사용할 수 있다.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>&quot;basic&quot; 테마를 수정할 때 그누보드 업데이트 시 부담을 줄이려면 테마 폴더를 복제한 후 수정하여 사용하는 것을 권장한다.</p></div></div><h2 id="스킨" tabindex="-1">스킨 <a class="header-anchor" href="#스킨" aria-label="Permalink to &quot;스킨&quot;">​</a></h2><p>스킨은 게시판과 회원, 최근게시물 위젯, 검색 결과, FAQ 페이지 등에서 적용할 수 있다.</p><p>스킨은 <code>/skin</code> 폴더 또는 사용하는 테마의 <code>skin</code> 폴더(예: <code>/theme/basic/skin</code>)에 설치하여 사용할 수 있다.</p><table><thead><tr><th>스킨 폴더</th><th>설명</th></tr></thead><tbody><tr><td>board</td><td>게시판 스킨</td></tr><tr><td>connect</td><td>접속자 목록 스킨</td></tr><tr><td>content</td><td>페이지 컨텐츠 스킨</td></tr><tr><td>faq</td><td>FAQ 스킨</td></tr><tr><td>latest</td><td>최근게시물 위젯 스킨</td></tr><tr><td>member</td><td>회원 스킨</td></tr><tr><td>neww</td><td>새글 페이지 스킨</td></tr><tr><td>outlogin</td><td>로그인 위젯 스킨</td></tr><tr><td>poll</td><td>설문조사 위젯 스킨</td></tr><tr><td>popular</td><td>인기검색어 위젯 스킨</td></tr><tr><td>qa</td><td>1:1문의 스킨</td></tr><tr><td>search</td><td>검색 결과 스킨</td></tr><tr><td>shop</td><td>영카트 스킨</td></tr><tr><td>social</td><td>소셜로그인 스킨</td></tr><tr><td>visit</td><td>방문자 통계 위젯 스킨</td></tr></tbody></table>',10),c=[r];function s(i,n,l,h,p,u){return e(),d("div",null,c)}const b=t(o,[["render",s]]);export{m as __pageData,b as default};
