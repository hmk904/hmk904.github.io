import { h, watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Comment from './Comment.vue'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import googleAnalytics from 'vitepress-plugin-google-analytics'

import { useData, useRoute, useRouter } from 'vitepress';

import './style.css'
import "vitepress-markdown-timeline/dist/theme/index.css";


/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        enhanceAppWithTabs(app);
        googleAnalytics({
            id: 'G-GNLLQFYG4H', // Replace with your GoogleAnalytics ID, which should start with the 'G-'
        })
    },
    Layout() {
        const { isDark } = useData();
        const route = useRoute();
        const router = useRouter();

        if (process.env.NODE_ENV === 'production') {
            watch(route, (path) => {
                if (typeof document !== 'undefined') { // ✅ SSR 환경 체크 추가
                    const el = document.querySelector('giscus-widget');
                    if (el) {
                        el.update();
                    }

                    if (typeof window !== 'undefined' && window.gtag) { // ✅ window.gtag도 체크
                        gtag('send', 'pageview', path);
                    }
                }
            }, { immediate: true });

            watch(isDark, (dark) => {
                if (typeof document !== 'undefined') { // ✅ SSR 환경 체크 추가
                    const el = document.querySelector('giscus-widget');
                    if (el) {
                        el.theme = dark ? 'transparent_dark' : 'light';
                    }
                }
            });

            return h(DefaultTheme.Layout, null, {
                'doc-footer-before': () => h(Comment, { theme: isDark.value ? 'transparent_dark' : 'light' })
            })
        }

        return h(DefaultTheme.Layout, null, {
            'doc-footer-before': () => h('p', { style: 'text-align: center; font-size: 0.625rem;' }, ['댓글 출력 위치. (docs:dev 환경에서는 댓글을 출력하지 않음)'])
        });
    }
}
