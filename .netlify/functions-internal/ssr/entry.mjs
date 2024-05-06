import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BrhZCruI.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DoNnQ0u6.mjs');
const _page1 = () => import('./chunks/info_BVjOzmzU.mjs');
const _page2 = () => import('./chunks/project-1_BN3-YQ9x.mjs');
const _page3 = () => import('./chunks/project-2_DyuIKVhQ.mjs');
const _page4 = () => import('./chunks/project-3_g4JxvHsf.mjs');
const _page5 = () => import('./chunks/project-4_2zzekjAe.mjs');
const _page6 = () => import('./chunks/index_Duts659u.mjs');
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
    "middlewareSecret": "525e6e19-b392-4ce1-b42a-41501ec5bf95"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
