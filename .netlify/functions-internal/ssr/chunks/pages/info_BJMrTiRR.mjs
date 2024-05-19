import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro, m as maybeRenderHead } from '../astro__-VGtwrz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$MainLayout } from './brightroom_DT7qz0-7.mjs';

const $$Astro = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Information</h1> ` })}`;
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/info.astro", void 0);

const $$file = "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/info.astro";
const $$url = "/info";

export { $$Info as default, $$file as file, $$url as url };
