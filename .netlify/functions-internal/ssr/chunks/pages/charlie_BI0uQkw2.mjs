import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro } from '../astro__-VGtwrz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ProjectLayout } from './brightroom_C__wVH9N.mjs';

const $$Astro = createAstro();
const $$Charlie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Charlie;
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, { "title": "You're a Good Man, Charlie Brown", "showMoreProps": {
    description: "Music By Alan Menken, Lyrics By Lynn Ahrens, Book By Mike Ockrent & Lynn Ahrens",
    date: "November, 2023",
    location: "Burbank Main Theatre, Santa Rosa Junior College, Santa Rosa, CA",
    writer: "Charles Dickens",
    director: "James Newman",
    techDirector: "Kyle McHarris",
    coDesign: "Light Design: John Di Giorigio, Costume, Hair & Makeup Design: Colleen Scott Trivett",
    addMore: ""
  }, "imageSliderProps": {
    images: [
      {
        src: "/images/charlie/project__charlie--1.png",
        alt: "Charlie Brown 1"
      },
      {
        src: "/images/charlie/project__charlie--2.jpg",
        alt: "Charlie Brown 2"
      },
      {
        src: "/images/charlie/project__charlie--3.jpg",
        alt: "Charlie Brown 3"
      },
      {
        src: "/images/charlie/project__charlie--4.jpg",
        alt: "Charlie Brown 4"
      },
      {
        src: "/images/charlie/project__charlie--5.jpg",
        alt: "Charlie Brown 5"
      },
      {
        src: "/images/charlie/project__charlie--6.jpg",
        alt: "Charlie Brown 6"
      },
      {
        src: "/images/charlie/project__charlie--7.jpg",
        alt: "Charlie Brown 7"
      }
    ]
  } })}`;
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/projects/charlie.astro", void 0);

const $$file = "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/projects/charlie.astro";
const $$url = "/projects/charlie";

export { $$Charlie as default, $$file as file, $$url as url };
