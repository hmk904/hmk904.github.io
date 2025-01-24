import{_ as s,c as i,o as a,a8 as h}from"./chunks/framework.CFn5PexY.js";const y=JSON.parse('{"title":"영카트 제거하기","description":"","frontmatter":{},"headers":[],"relativePath":"outline/remove-youngcart.md","filePath":"outline/remove-youngcart.md","lastUpdated":1737679776000}'),k={name:"outline/remove-youngcart.md"},n=h(`<h1 id="영카트-제거하기" tabindex="-1">영카트 제거하기 <a class="header-anchor" href="#영카트-제거하기" aria-label="Permalink to &quot;영카트 제거하기&quot;">​</a></h1><h2 id="설치된-영카트-설정-제거" tabindex="-1">설치된 영카트 설정 제거 <a class="header-anchor" href="#설치된-영카트-설정-제거" aria-label="Permalink to &quot;설치된 영카트 설정 제거&quot;">​</a></h2><p>이미 설치된 영카트를 제거하려면 <code>/data/dbconfig.php</code> 파일에서 영카트 관련 설정을 제거해야 한다.</p><p><code>dbconfig.php</code> 파일에서 <code>G5_USE_SHOP</code> 상수의 값을 <code>true</code>에서 <code>false</code>로 변경한다.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line diff remove"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;G5_USE_SHOP&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line diff add"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;G5_USE_SHOP&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span></code></pre></div><p>또는, 아래와 같은 코드 전체를 삭제해도 된다.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>이 코드를 삭제 후 아래 영카트 파일까지 전부 제거하는 것을 권장한다.</p></div><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;G5_USE_SHOP&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;G5_SHOP_TABLE_PREFIX&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_default_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;default&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 쇼핑몰설정 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_banner_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;banner&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 배너 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_cart_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cart&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 장바구니 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_category_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;category&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 상품분류 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_event_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;event&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 이벤트 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_event_item_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;event_item&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 상품, 이벤트 연결 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_item_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;item&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 상품 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_item_option_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;item_option&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 상품옵션 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_item_use_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;item_use&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 상품 사용후기 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_item_qa_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;item_qa&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 상품 질문답변 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_item_relation_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;item_relation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 관련 상품 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_order_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;order&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 주문서 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_order_delete_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;order_delete&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 주문서 삭제 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_wish_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wish&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 보관함(위시리스트) 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_coupon_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;coupon&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 쿠폰정보 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_coupon_zone_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;coupon_zone&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 쿠폰존 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_coupon_log_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;coupon_log&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 쿠폰사용정보 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_sendcost_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sendcost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 추가배송비 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_personalpay_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;personalpay&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 개인결제 정보 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_order_address_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;order_address&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 배송지이력 정보 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_item_stocksms_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;item_stocksms&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 재입고SMS 알림 정보 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_post_log_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;order_post_log&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 주문요청 로그 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_order_data_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;order_data&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 모바일 결제정보 임시저장 테이블</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$g5[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g5_shop_inicis_log_table&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> G5_SHOP_TABLE_PREFIX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;inicis_log&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 이니시스 모바일 계좌이체 로그 테이블</span></span></code></pre></div><h2 id="영카트-파일-제거" tabindex="-1">영카트 파일 제거 <a class="header-anchor" href="#영카트-파일-제거" aria-label="Permalink to &quot;영카트 파일 제거&quot;">​</a></h2>`,9),p=[n];function t(l,e,E,d,r,g){return a(),i("div",null,p)}const _=s(k,[["render",t]]);export{y as __pageData,_ as default};
