import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro } from '../astro_CZKDlDvu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ProjectLayout } from './project-1_BOVNLvDq.mjs';

const $$Astro = createAstro();
const $$Project4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Project4;
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, { "title": "Project #4", "showMoreProps": {
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut",
    date: "2020-12-12",
    location: "Drake University, Des Moines, IA",
    writer: "Samantha Smith",
    director: "Post Malone",
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
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/projects/project-4.astro", void 0);

const $$file = "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/projects/project-4.astro";
const $$url = "/projects/project-4";

export { $$Project4 as default, $$file as file, $$url as url };
