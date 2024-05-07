import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, e as renderComponent, f as renderSlot, g as renderHead, h as addAttribute } from '../astro__-VGtwrz.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                               */
/* empty css                               */

const $$Astro$5 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="navigation__container" data-astro-cid-pux6a34n> <!-- <div class="navigation__catagories container__margin--bottom">
    <ul>
      <li><a href="/projects" id="btn__projects">Projects</a></li>
      <li><a href="/info" id="btn__information">Information</a></li>
    </ul>
  </div> --> <div class="navigation__content" data-astro-cid-pux6a34n> <div class="navigation__content--projects container__margin--bottom" data-astro-cid-pux6a34n> <ul data-astro-cid-pux6a34n> <!-- <li><a href="/projects/revolutionist">The Revolutionist</a></li> --> <li data-astro-cid-pux6a34n><a href="/projects/romeo" data-astro-cid-pux6a34n>Romeo & Juliet</a></li> <li data-astro-cid-pux6a34n><a href="/projects/carol" data-astro-cid-pux6a34n>A Christmas Carol</a></li> <li data-astro-cid-pux6a34n><a href="/projects/clue" data-astro-cid-pux6a34n>Clue</a></li> <li data-astro-cid-pux6a34n><a href="/projects/brightroom" data-astro-cid-pux6a34n>A Bright Room</a></li> <li data-astro-cid-pux6a34n><a href="/projects/charlie" data-astro-cid-pux6a34n>Charlie Brown</a></li> </ul> </div> <div class="navigation__content--information container__margin--bottom" data-astro-cid-pux6a34n> <ul data-astro-cid-pux6a34n> <li data-astro-cid-pux6a34n><a href="/info#about" data-astro-cid-pux6a34n>About</a></li> <li data-astro-cid-pux6a34n><a href="/info#contact" data-astro-cid-pux6a34n>Contact</a></li> <li data-astro-cid-pux6a34n><a href="/info#resume" data-astro-cid-pux6a34n>Resume</a></li> <li data-astro-cid-pux6a34n><a href="/info#social" data-astro-cid-pux6a34n>Social</a></li> </ul> </div>  </div> </div>`;
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/components/Navigation.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, meta, ogTitle, ogType, ogUrl, ogImage } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<html data-astro-cid-ouamjn2i> <head><title>", '</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"', '><meta property="og:title"', '><meta property="og:type"', '><meta property="og:url"', '><meta property="og:image"', ">", '</head> <body data-astro-cid-ouamjn2i> <div class="container__global--padding" data-astro-cid-ouamjn2i> <div class="mobile__header-global" data-astro-cid-ouamjn2i> <div class="mobile__header-col1" data-astro-cid-ouamjn2i> <h1 data-astro-cid-ouamjn2i><a href="/" data-astro-cid-ouamjn2i>Austin R. Mueck</a></h1> </div> </div> <div class="layout__pageContainer" data-astro-cid-ouamjn2i> <header class="layout__sidebar-container" data-astro-cid-ouamjn2i> ', ' </header> <div class="layout__pageContent-container" data-astro-cid-ouamjn2i> ', ' </div> </div> </div> <div class="mobile__menu--trigger" data-astro-cid-ouamjn2i> <button class="menu-btn" role="button" data-astro-cid-ouamjn2i>MENU</button> </div> <div class="mobile__menu container__global--padding" data-astro-cid-ouamjn2i> ', ' </div>  <script>\n  const mobileMenuTrigger = document.querySelector(".mobile__menu--trigger");\n\n  const mobileMenu = document.querySelector(".mobile__menu");\n\n  mobileMenuTrigger.addEventListener("click", () => {\n    mobileMenu.classList.toggle("active");\n\n    if (mobileMenu.classList.contains("active")) {\n      mobileMenu.style.display = "block";\n    } else {\n      mobileMenu.style.display = "none";\n    }\n    S;\n  });\n<\/script></body></html>'])), title, addAttribute(meta, "content"), addAttribute(ogTitle, "content"), addAttribute(ogType, "content"), addAttribute(ogUrl, "content"), addAttribute(ogImage, "content"), renderHead(), renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-ouamjn2i": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-ouamjn2i": true }));
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/layouts/MainLayout.astro", void 0);

const $$Astro$3 = createAstro();
const $$ShowMore = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ShowMore;
  const {
    description,
    date,
    location,
    writer,
    director,
    techDirector,
    coDesign,
    addMore
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details class="details__container--page" data-astro-cid-krys6nzm> <summary class="summary" data-astro-cid-krys6nzm><em data-astro-cid-krys6nzm>Details</em></summary> <ul class="details__content" data-astro-cid-krys6nzm> <li class="details__content--item" data-astro-cid-krys6nzm>${description}</li> <li class="details__content--item" data-astro-cid-krys6nzm>${date}</li> <li class="details__content--item" data-astro-cid-krys6nzm>${location}</li> <li class="details__content--item" data-astro-cid-krys6nzm>Writter: ${writer}</li> <li class="details__content--item" data-astro-cid-krys6nzm>Director: ${director}</li> <li class="details__content--item" data-astro-cid-krys6nzm>Technical Director: ${techDirector}</li> <li class="details__content--item" data-astro-cid-krys6nzm>${coDesign}</li> <li class="details__content--item" data-astro-cid-krys6nzm>${addMore}</li> </ul> </details> `;
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/components/ShowMore.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$ImageSlider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ImageSlider;
  const { images } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="slider__container" data-astro-cid-fbnxtyi4> <div class="slider__controls" data-astro-cid-fbnxtyi4> <button class="slider__prev slider__nav" onclick="prevSlide()" data-astro-cid-fbnxtyi4>Prev</button> <button class="slider__next slider__nav" onclick="nextSlide()" data-astro-cid-fbnxtyi4>Next</button> </div> <div class="slider__content" data-astro-cid-fbnxtyi4> ', ' </div> </div> <script>\n  let slides = Array.from(document.querySelectorAll(".slider__content img"));\n  let slideIndex = 0;\n  let intervalID = setInterval(nextSlide, 3000); // Change this to your desired interval\n\n  function showSlide(index) {\n    if (index >= slides.length) {\n      slideIndex = 0;\n    } else if (index < 0) {\n      slideIndex = slides.length - 1;\n    }\n    slides.forEach((slide) => {\n      slide.classList.remove("displaySlide");\n    });\n    slides[slideIndex].classList.add("displaySlide");\n  }\n\n  function nextSlide() {\n    clearInterval(intervalID);\n    slideIndex++;\n    showSlide(slideIndex);\n  }\n\n  function prevSlide() {\n    clearInterval(intervalID);\n    slideIndex--;\n    showSlide(slideIndex);\n  }\n<\/script> '])), maybeRenderHead(), images.map((image) => renderTemplate`<div class="slider__slide" data-astro-cid-fbnxtyi4> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} data-astro-cid-fbnxtyi4> </div>`));
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/components/ImageSlider.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProjectLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectLayout;
  const { title, showMoreProps, imageSliderProps } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-eo3wme6m": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-eo3wme6m>${title}</h1> ${renderComponent($$result2, "ShowMore", $$ShowMore, { ...showMoreProps, "data-astro-cid-eo3wme6m": true })} ${renderComponent($$result2, "ImageSlider", $$ImageSlider, { ...imageSliderProps, "data-astro-cid-eo3wme6m": true })} ` })} `;
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/layouts/ProjectLayout.astro", void 0);

const $$Astro = createAstro();
const $$Brightroom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Brightroom;
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, { "title": "A Brightroom Called Day", "showMoreProps": {
    description: "",
    date: "April, 2018",
    location: "Thomas Jones Theater, Southwestern University, Georgetown, Tx",
    writer: "Tony Kusher",
    director: "Lilly Wolff",
    techDirector: "Justin Smith",
    coDesign: "Light Design: Matthew Murphy, Projection Design: Pierce Stoneburner, Costume Design: Glenda Wolfe",
    addMore: ""
  }, "imageSliderProps": {
    images: [
      {
        src: "/images/brightroom/project__brightroom-0.png",
        alt: "Brigthroom 1"
      },
      {
        src: "/images/brightroom/project__brightroom-1.png",
        alt: "Brigthroom 2"
      },
      {
        src: "/images/brightroom/project__brightroom-2.png",
        alt: "Brigthroom 3"
      },
      {
        src: "/images/brightroom/project__brightroom-3.png",
        alt: "Brigthroom 4"
      },
      {
        src: "/images/brightroom/project__brightroom-4.png",
        alt: "Brigthroom 5"
      },
      {
        src: "/images/brightroom/project__brightroom-5.png",
        alt: "Brigthroom 6"
      },
      {
        src: "/images/brightroom/project__brightroom-6.png",
        alt: "Brigthroom 7"
      },
      {
        src: "/images/brightroom/project__brightroom-7.png",
        alt: "Brigthroom 8"
      },
      {
        src: "/images/brightroom/project__brightroom-8.png",
        alt: "Brigthroom 9"
      },
      {
        src: "/images/brightroom/project__brightroom-9.png",
        alt: "Brigthroom 10"
      },
      {
        src: "/images/brightroom/project__brightroom-10.png",
        alt: "Brigthroom 11"
      },
      {
        src: "/images/brightroom/project__brightroom-11.png",
        alt: "Brigthroom 12"
      },
      {
        src: "/images/brightroom/project__brightroom-12.png",
        alt: "Brigthroom 13"
      },
      {
        src: "/images/brightroom/project__brightroom-13.png",
        alt: "Brigthroom 14"
      },
      {
        src: "/images/brightroom/project__brightroom-14.png",
        alt: "Brigthroom 15"
      },
      {
        src: "/images/brightroom/project__brightroom-15.png",
        alt: "Brigthroom 16"
      },
      {
        src: "/images/brightroom/project__brightroom-16.png",
        alt: "Brigthroom 17"
      }
    ]
  } })}`;
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/projects/brightroom.astro", void 0);

const $$file = "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/projects/brightroom.astro";
const $$url = "/projects/brightroom";

const brightroom = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Brightroom,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ProjectLayout as $, $$MainLayout as a, brightroom as b };
