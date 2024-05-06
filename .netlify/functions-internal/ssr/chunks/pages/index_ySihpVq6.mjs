import { e as createComponent, r as renderTemplate, m as maybeRenderHead, h as createAstro, i as renderComponent, j as renderSlot, k as renderHead, g as addAttribute } from '../astro_CZKDlDvu.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                              */

const $$Astro$2 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="navigation__container" data-astro-cid-pux6a34n> <div class="navigation__catagories container__margin--bottom" data-astro-cid-pux6a34n> <ul data-astro-cid-pux6a34n> <li data-astro-cid-pux6a34n><a href="/projects" id="btn__projects" data-astro-cid-pux6a34n>Projects</a></li> <li data-astro-cid-pux6a34n><a href="/info" id="btn__information" data-astro-cid-pux6a34n>Information</a></li> </ul> </div> <div class="navigation__content" data-astro-cid-pux6a34n> <div class="navigation__content--projects container__margin--bottom" data-astro-cid-pux6a34n> <ul data-astro-cid-pux6a34n> <li data-astro-cid-pux6a34n><a href="/projects/project-1" data-astro-cid-pux6a34n>Project 1</a></li> <li data-astro-cid-pux6a34n><a href="/projects/project-2" data-astro-cid-pux6a34n>Project 2</a></li> <li data-astro-cid-pux6a34n><a href="/projects/project-3" data-astro-cid-pux6a34n>Project 3</a></li> <li data-astro-cid-pux6a34n><a href="/projects/project-4" data-astro-cid-pux6a34n>Project 4</a></li> </ul> </div> <div class="navigation__content--information container__margin--bottom" data-astro-cid-pux6a34n> <ul data-astro-cid-pux6a34n> <li data-astro-cid-pux6a34n><a href="/info#about" data-astro-cid-pux6a34n>About</a></li> <li data-astro-cid-pux6a34n><a href="/info#contact" data-astro-cid-pux6a34n>Contact</a></li> <li data-astro-cid-pux6a34n><a href="/info#resume" data-astro-cid-pux6a34n>Resume</a></li> <li data-astro-cid-pux6a34n><a href="/info#social" data-astro-cid-pux6a34n>Social</a></li> </ul> </div> </div></div>`;
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/components/Navigation.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, meta, ogTitle, ogType, ogUrl, ogImage } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html data-astro-cid-ouamjn2i> <head><title>", '</title><meta name="description"', '><meta property="og:title"', '><meta property="og:type"', '><meta property="og:url"', '><meta property="og:image"', ">", '</head> <body data-astro-cid-ouamjn2i> <div class="container__global--padding" data-astro-cid-ouamjn2i> <div class="mobile__header-global" data-astro-cid-ouamjn2i> <div class="mobile__header-col1" data-astro-cid-ouamjn2i> <h1 data-astro-cid-ouamjn2i><a href="/" data-astro-cid-ouamjn2i>Portfolio Site</a></h1> </div> </div> <div class="layout__pageContainer" data-astro-cid-ouamjn2i> <header class="layout__sidebar-container" data-astro-cid-ouamjn2i> ', ' </header> <div class="layout__pageContent-container" data-astro-cid-ouamjn2i> ', ' </div> </div> </div> <div class="mobile__menu--trigger" data-astro-cid-ouamjn2i> <button class="menu-btn" role="button" data-astro-cid-ouamjn2i>MENU</button> </div> <div class="mobile__menu container__global--padding" data-astro-cid-ouamjn2i> ', ' </div>  <script>\n  const mobileMenuTrigger = document.querySelector(".mobile__menu--trigger");\n\n  const mobileMenu = document.querySelector(".mobile__menu");\n\n  mobileMenuTrigger.addEventListener("click", () => {\n    mobileMenu.classList.toggle("active");\n\n    if (mobileMenu.classList.contains("active")) {\n      mobileMenu.style.display = "block";\n    } else {\n      mobileMenu.style.display = "none";\n    }\n    S;\n  });\n<\/script></body></html>'])), title, addAttribute(meta, "content"), addAttribute(ogTitle, "content"), addAttribute(ogType, "content"), addAttribute(ogUrl, "content"), addAttribute(ogImage, "content"), renderHead(), renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-ouamjn2i": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-ouamjn2i": true }));
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/layouts/MainLayout.astro", void 0);

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

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, index as i };
