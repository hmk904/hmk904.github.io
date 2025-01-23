import { defineConfig } from 'vitepress';
import deepmerge from 'deepmerge';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import timeline from "vitepress-markdown-timeline";

let mergeConfig = {
    head: []
};

const links = [];

if (process.env.NODE_ENV === 'production') {
    mergeConfig.head = [
        [
            'meta',
            { name: 'google-site-verification', content: 'zxNvFXHnilnwtr39rTNOFwgfG4lsyDevcbXIcC0FZS0' }
        ],
        [
            'meta',
            { name: 'naver-site-verification', content: 'aa33e9f3d99e5091b736c3754f4c9fbbc905a0a7' }
        ],
        [
            'meta',
            { name: 'msvalidate.01', content: 'B4DA8C58849C0563FAE8F91A627C7500' }
        ],
    ]
} else {
    mergeConfig = {
        markdown: {
            lineNumbers: true,
        },
    }
}

export default deepmerge(mergeConfig, defineConfig({
    lang: 'ko-KR',
    ignoreDeadLinks: true,
    titleTemplate: ':title',
    description: 'MSD 프로젝트 설명 ',
    base: '/',
    lastUpdated: true,
    themeConfig: {
        siteTitle: 'MSD 프로젝트',
        outline: [2, 4],
        sidebar: {
            
            '/monitoring/': [
                
                {
                    text: '생산관리 모니터링',
                    items: [
                        { text: '시스템 개요', link: '/monitoring/info' },
                        { text: '생산 공정 모니터링', link: '/monitoring/process' },
                        { text: '품질 검사 모니터링', link: '/monitoring/vision' },
                        { text: '실시간 서버 상태', link: '/monitoring/server' }
                    ]
                },
                {
                    text: '품질비전 AI',
                    items: [
                        { text: '시스템 개요', link: '/monitoring/info' },
                        { text: 'VisionAI 기반 품질 검사', link: '/developers/polluted_variables' },
                        { text: '실시간 데이터 처리 및 통신', link: '/developers/file_security' }
                    ]
                },
                
            ]
        },
        nav: [
            { text: '개요', link: '/outline/install' },
            { text: '아키텍처', link: '/make/skin/about' },
            { text: '서버', link: '/make/theme/about' },
            { text: '생산관리 모니터링', link: '/developers/lifecycle' },
            { text: '품질비전AI', link: '/developers/lifecycle' },
            { text: 'PLC생산관리', link: '/developers/lifecycle' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/g5guide/g5guide.github.io' },
        ],
        search: {
            provider: 'local'
        },
        editLink: {
            pattern: 'https://github.com/g5guide/g5guide.github.io/edit/main/docs/:path',
            text: '이 페이지 수정하기'
        },
        docFooter: {
            prev: '이전',
            next: '다음'
        },
        footer: {
            // message: '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="크리에이티브 커먼즈 라이선스" style="display: inline-block;border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />이 저작물은 <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">크리에이티브 커먼즈 저작자표시-동일조건변경허락 4.0 국제 라이선스</a>에 따라 이용할 수 있습니다.'
        },
    },
    sitemap: {
        hostname: 'https://g5guide.github.io/',
    },
    transformHtml: (_, id, { pageData }) => {
        if (!/[\\/]404\.html$/.test(id))
            links.push({
                // you might need to change this if not using clean urls mode
                url: pageData.relativePath.replace(/\/index\.md$/, '/').replace(/\.md$/, '.html'),
                lastmod: pageData.lastUpdated
            })
    },
    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin);
            md.use(timeline);
        },
    },
}));



