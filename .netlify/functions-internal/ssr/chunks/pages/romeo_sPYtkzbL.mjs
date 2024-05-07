import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro } from '../astro__-VGtwrz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ProjectLayout } from './brightroom_Cii6GsJv.mjs';

const $$Astro = createAstro();
const $$Romeo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Romeo;
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, { "title": "Romeo & Juliet", "showMoreProps": {
    description: "",
    date: "January, 2024",
    location: "McDonald Theatre, Nebraska Wesleyan University, Lincoln, NE",
    writer: "William Shakespeare",
    director: "Anne McAlexander",
    techDirector: "Dustin Witte",
    coDesign: "Light Design: Bentley Heydt, Costume Design: Elizabeth Ennis, Hair & Makeup: Inna Gomez",
    addMore: "The script was addapted by Anne McAlexander for this production. The show was set in the 1920s and featured a live jazz band."
  }, "imageSliderProps": {
    images: [
      {
        src: "/src/assets/images/romeo/project__romeo--1.png",
        alt: "Romeo and Juliet image 1"
      },
      {
        src: "/src/assets/images/romeo/project__romeo--2.png",
        alt: "Romeo and Juliet image 2"
      },
      {
        src: "/src/assets/images/romeo/project__romeo--3.png",
        alt: "Romeo and Juliet image 3"
      },
      {
        src: "/src/assets/images/romeo/project__romeo--4.png",
        alt: "Romeo and Juliet image 4"
      },
      {
        src: "/src/assets/images/romeo/project__romeo--5.png",
        alt: "Romeo and Juliet image 5"
      },
      {
        src: "/src/assets/images/romeo/project__romeo--6.png",
        alt: "Romeo and Juliet image 6"
      },
      {
        src: "/src/assets/images/romeo/project__romeo--7.png",
        alt: "Romeo and Juliet image 7"
      },
      {
        src: "/src/assets/images/romeo/project__romeo--8.png",
        alt: "Romeo and Juliet image 8"
      }
    ]
  } })}`;
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/projects/romeo.astro", void 0);

const $$file = "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/projects/romeo.astro";
const $$url = "/projects/romeo";

export { $$Romeo as default, $$file as file, $$url as url };
