import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CqabHeVL.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_jrrWqM44.mjs');
const _page1 = () => import('./chunks/info_BNdTLnOg.mjs');
const _page2 = () => import('./chunks/brightroom_BxGk2B1U.mjs');
const _page3 = () => import('./chunks/carol_DAT2JHX9.mjs');
const _page4 = () => import('./chunks/charlie_C5mZ1MrU.mjs');
const _page5 = () => import('./chunks/clue_y9fZyt64.mjs');
const _page6 = () => import('./chunks/revolutionist_BeLxAEqW.mjs');
const _page7 = () => import('./chunks/romeo_CEQ2ECDA.mjs');
const _page8 = () => import('./chunks/index_B3LfIOiw.mjs');
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
    "middlewareSecret": "7773ed0d-271e-470c-92f8-ca5b23092cb5"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
