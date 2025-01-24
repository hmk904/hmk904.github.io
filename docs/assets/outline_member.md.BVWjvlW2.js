import{_ as l,c as i,o as e,a8 as t}from"./chunks/framework.CFn5PexY.js";const h=JSON.parse('{"title":"회원","description":"그누보드 회원의 레벨과 권한, 관리자의 권한에 대한 설명","frontmatter":{"head":[["link",{"name":"canonical","content":"https://g5guide.github.io/gnuboard/member.html"}]],"description":"그누보드 회원의 레벨과 권한, 관리자의 권한에 대한 설명"},"headers":[],"relativePath":"outline/member.md","filePath":"outline/member.md","lastUpdated":1737685906000}'),a={name:"outline/member.md"},o=t('<h1 id="회원" tabindex="-1">회원 <a class="header-anchor" href="#회원" aria-label="Permalink to &quot;회원&quot;">​</a></h1><p>회원 기능은 ID를 기반으로하여 회원의 계정을 생성, 관리하고 권한을 관리하는데 필요한 기능을 제공한다.</p><p>회원은 &#39;회원 레벨&#39;로 권한을 제한할 수 있다. 글/댓글 쓰기 및 읽기, 파일 다운로드, 쪽지 기능 사용 등의 권한을 제한하는데 사용된다. 특별한 권한을 가진 그룹 관리자, 게시판 관리자를 설정할 수도 있다.</p><h2 id="회원-레벨" tabindex="-1">회원 레벨 <a class="header-anchor" href="#회원-레벨" aria-label="Permalink to &quot;회원 레벨&quot;">​</a></h2><p>회원의 레벨은 <em>가장 낮은 1 레벨</em>부터 <em>가장 높은 10 레벨</em>까지 설정할 수 있으며, 일반적으로 다음과 같이 활용한다.</p><ul><li>1 레벨 (가장 낮음) : 비회원 및 비회원 수준으로 취급되는 권한이 제한된 회원</li><li>2~9 레벨 : 일반적인 회원</li><li>10 레벨 (가장 높음) : 관리자 유형의 회원</li></ul><p>그누보드에서 보편적으로 통용되는 수준의 해석이며, 스킨이나 플러그인 등의 설정에 따라 이 유형의 구분은 다르게 취급될 수 있다.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>그룹관리자, 게시판관리자의 레벨이 낮으면 더 높은 레벨의 회원이 작성한 글과 댓글을 수정, 삭제 할 수 없다.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>그룹, 게시판의 관리자의 레벨을 높게 설정하면 이런 문제를 해결할 수 있지만 레벨 설정으로 기능을 제한한 게시판 등의 기능에 원하지 않는 권한이 주어질 수 있다.</p></div></div><div class="tip custom-block"><p class="custom-block-title">권장하는 레벨 활용</p><ul><li>1 레벨 : 비회원 및 비회원 취급의 제한된 회원</li><li>2~7 레벨 : 일반 회원. 필요에 따라 세분화하여 활용</li><li>8 레벨 : 게시판관리자</li><li>9 레벨 : 그룹관리자</li><li>10 레벨: 최고관리자</li></ul><p>게시판 관리자가 그룹관리자에게 허용된 접근이나 기능을 사용할 수 없도록 제한하고, 그룹관리자가 작성한 공지사항 등의 글이나 댓글을 수정하거나 삭제하는 행위를 제한할 수 있다.</p><p>10 레벨은 최고관리자 단 한 명만 지정하는 것을 권장한다.</p></div><h2 id="관리-권한" tabindex="-1">관리 권한 <a class="header-anchor" href="#관리-권한" aria-label="Permalink to &quot;관리 권한&quot;">​</a></h2><p>관리자 권한은 최고관리자(super), 그룹관리자(group), 게시판관리자(board)로 구분된다.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>관리 권한은 유형별로 전체, 그룹 및 개별 게시판의 관리 권한을 가진다. 비밀글에 대한 접근이나 글, 댓글 삭제 등의 권한과 주요 설정 값을 변경할 수 있으므로 신뢰할 수 있는 회원에게만 부여해야 한다.</p><p>설정 항목에 따라 악성코드를 삽입할 수 있는 위험성이 있으므로 주의해야 한다.</p></div><p>각 관리자 유형별로 최고관리자는 한 명, 그룹과 게시판 관리자는 각 개별 그룹과 게시판별로 한 명씩만 지정할 수 있다.</p><ul><li>최고관리자 <ul><li>그누보드의 모든 기능 및 설정 등의 모든 권한을 가진 유일한 권한이다</li></ul></li><li>그룹관리자 <ul><li>그룹에 속한 모든 게시판의 관리 권한을 가진다</li></ul></li><li>게시판관리자 <ul><li>특정 게시판의 관리 권한을 가진다</li></ul></li></ul>',14),s=[o];function c(p,r,n,u,d,m){return e(),i("div",null,s)}const b=l(a,[["render",c]]);export{h as __pageData,b as default};
