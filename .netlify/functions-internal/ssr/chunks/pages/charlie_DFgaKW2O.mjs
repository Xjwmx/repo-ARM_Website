import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro } from '../astro__-VGtwrz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ProjectLayout } from './brightroom_DT7qz0-7.mjs';

const $$Astro = createAstro();
const $$Charlie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Charlie;
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, { "title": "You're a Good Man, Charlie Brown", "showMoreProps": {
    description: "Music and Lyrics by Clark Gesner. Book by John Gordon. Additional Music by Andrew Lippa.",
    date: "November, 2016",
    location: "This Musical was performed at Jesse H. and Mary Gibbs Jones Theater, Southwestern University, Georgetown, TX",
    writer: "Based on The Comic Strip \u201CPeanuts\u201D by Charles M. Schulz.",
    director: "Directed by Brian Fahey",
    techDirector: "Technical Direction by Justin Smith",
    coDesign: "",
    addMore: "This production won 'Best Scenic Design Award' at the 2017 Texas Educational Theatre Association Conference."
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
