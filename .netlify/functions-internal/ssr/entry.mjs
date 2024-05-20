import { renderers } from './renderers.mjs';
import { manifest } from './manifest_xxCuDutS.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_jrrWqM44.mjs');
const _page1 = () => import('./chunks/info_fLrGzayC.mjs');
const _page2 = () => import('./chunks/brightroom_BsRA3Zgf.mjs');
const _page3 = () => import('./chunks/carol_BVTxxDNO.mjs');
const _page4 = () => import('./chunks/charlie_CUDNGpEJ.mjs');
const _page5 = () => import('./chunks/clue_CG5xXV5O.mjs');
const _page6 = () => import('./chunks/revolutionist_MRqqHhaF.mjs');
const _page7 = () => import('./chunks/romeo_BQ0fKeoH.mjs');
const _page8 = () => import('./chunks/index_CWG8q1d4.mjs');
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
    "middlewareSecret": "7cf22c1f-a4db-45a1-b271-e5fad65d4792"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
