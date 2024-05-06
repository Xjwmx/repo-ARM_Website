import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CSYtCLC-.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DoNnQ0u6.mjs');
const _page1 = () => import('./chunks/info_3siBhFD_.mjs');
const _page2 = () => import('./chunks/project-1_CiVivGWH.mjs');
const _page3 = () => import('./chunks/project-2_D0xwfTru.mjs');
const _page4 = () => import('./chunks/project-3_qxldVPoZ.mjs');
const _page5 = () => import('./chunks/project-4_BaRti3JY.mjs');
const _page6 = () => import('./chunks/index_BUMjq-Az.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/info.astro", _page1],
    ["src/pages/projects/project-1.astro", _page2],
    ["src/pages/projects/project-2.astro", _page3],
    ["src/pages/projects/project-3.astro", _page4],
    ["src/pages/projects/project-4.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "d847c43a-18bb-49da-a245-2e978343350d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
