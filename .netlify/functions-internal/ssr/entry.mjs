import { renderers } from './renderers.mjs';
import { manifest } from './manifest_mHyfZXmL.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_jrrWqM44.mjs');
const _page1 = () => import('./chunks/info_CZdaryGY.mjs');
const _page2 = () => import('./chunks/brightroom_Cqfo7xX8.mjs');
const _page3 = () => import('./chunks/carol_0yfsyr9f.mjs');
const _page4 = () => import('./chunks/charlie_qcNSuXKu.mjs');
const _page5 = () => import('./chunks/clue_0kAtXq_y.mjs');
const _page6 = () => import('./chunks/revolutionist_Ci4hZpwI.mjs');
const _page7 = () => import('./chunks/romeo_wEHZxwoq.mjs');
const _page8 = () => import('./chunks/index_C2MkFWFz.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/info.astro", _page1],
    ["src/pages/projects/brightroom.astro", _page2],
    ["src/pages/projects/carol.astro", _page3],
    ["src/pages/projects/charlie.astro", _page4],
    ["src/pages/projects/clue.astro", _page5],
    ["src/pages/projects/revolutionist.astro", _page6],
    ["src/pages/projects/romeo.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a45a85a7-01eb-43e0-95ab-b739e4227c59"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
