import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../astro_CZKDlDvu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from './index_EN6qdDlM.mjs';

const $$Astro = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Information</h1> ` })}`;
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/info.astro", void 0);

const $$file = "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/info.astro";
const $$url = "/info";

export { $$Info as default, $$file as file, $$url as url };
