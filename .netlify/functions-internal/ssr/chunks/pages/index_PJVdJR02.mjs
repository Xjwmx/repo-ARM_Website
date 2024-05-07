import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro, m as maybeRenderHead } from '../astro__-VGtwrz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$MainLayout } from './brightroom_Cii6GsJv.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Austin Mueck";
  const metaDescription = "Austin is a scenic designer based in Mesa, Arizona.";
  const ogTitle = "Austin R. Mueck";
  const ogType = "website";
  const ogUrl = "http://www.austinmueck.com";
  const ogImage = "http://www.example.com/image.jpg";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "meta": metaDescription, "ogTitle": ogTitle, "ogType": ogType, "ogUrl": ogUrl, "ogImage": ogImage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Scenic Designer</h1> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
    repudiandae dolores nam, quos atque excepturi voluptates eligendi eos
    consectetur beatae quia tempore veritatis. Magni iure similique nam labore!
    Officiis ipsa quibusdam hic corporis! Eos porro harum modi, excepturi
    officiis explicabo unde rem in velit atque, repudiandae illo incidunt veniam
    similique!
</p> ` })}`;
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/index.astro", void 0);

const $$file = "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
