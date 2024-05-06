import { e as createComponent, r as renderTemplate, m as maybeRenderHead, h as createAstro, g as addAttribute, i as renderComponent } from '../astro_CZKDlDvu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from './index_ySihpVq6.mjs';
import 'clsx';
/* empty css                              */

const $$Astro$3 = createAstro();
const $$ShowMore = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ShowMore;
  const { description, date, location, writer, director, coDesign, addMore } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details class="details__container--page" data-astro-cid-krys6nzm> <summary class="summary" data-astro-cid-krys6nzm><em data-astro-cid-krys6nzm>Details</em></summary> <ul class="details__content" data-astro-cid-krys6nzm> <li class="details__content--item" data-astro-cid-krys6nzm>${description}</li> <li class="details__content--item" data-astro-cid-krys6nzm>Opened: ${date}</li> <li class="details__content--item" data-astro-cid-krys6nzm>${location}</li> <li class="details__content--item" data-astro-cid-krys6nzm>Written By: ${writer}</li> <li class="details__content--item" data-astro-cid-krys6nzm>Directed By: ${director}</li> <li class="details__content--item" data-astro-cid-krys6nzm>Additional Design by: ${coDesign}</li> <li class="details__content--item" data-astro-cid-krys6nzm>${addMore}</li> </ul> </details> `;
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
const $$Project1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Project1;
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, { "title": "Project #1", "showMoreProps": {
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut",
    date: "October 2021",
    location: "Kendrick Lamar Junior High School Theater, New York, NY",
    writer: "Tony Kushner",
    director: "Eugene McMegateux",
    coDesign: "Kimberly Scott, Photography by Jason Alexander, Mindy Cunningham",
    addMore: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc"
  }, "imageSliderProps": {
    images: [
      {
        src: "https://picsum.photos/1200/600?random=1",
        alt: "Image 1"
      },
      {
        src: "https://picsum.photos/1200/600?random=2",
        alt: "Image 2"
      },
      {
        src: "https://picsum.photos/1200/600?random=3",
        alt: "Image 3"
      }
    ]
  } })}`;
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/projects/project-1.astro", void 0);

const $$file = "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/projects/project-1.astro";
const $$url = "/projects/project-1";

const project1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Project1,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ProjectLayout as $, project1 as p };
