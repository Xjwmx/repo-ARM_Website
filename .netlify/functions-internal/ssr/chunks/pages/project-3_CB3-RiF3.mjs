import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro } from '../astro_CZKDlDvu.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ProjectLayout } from './project-1_yb_16kb4.mjs';

const $$Astro = createAstro();
const $$Project3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Project3;
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, { "title": "Project #3", "showMoreProps": {
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut",
    date: "2021-09-01",
    location: "J. Cole Theatre, New York, NY",
    writer: "Mark Johnson",
    director: "lorry Smith",
    coDesign: "Alex Hofstein, Photography by Jason Alexander, Mindy Cunningham",
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
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/projects/project-3.astro", void 0);

const $$file = "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/projects/project-3.astro";
const $$url = "/projects/project-3";

export { $$Project3 as default, $$file as file, $$url as url };
