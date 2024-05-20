import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro, m as maybeRenderHead } from '../astro__-VGtwrz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$MainLayout } from './brightroom_V6zVEyEX.mjs';

const $$Astro = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="about" class="info__section section__about"> <h2>About Austin</h2> <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, fugit,
      iure provident non voluptate ipsum assumenda cum perspiciatis nemo harum
      quo, labore inventore molestias sapiente dicta neque! Pariatur non sint
      aperiam quisquam, sequi voluptatem impedit tempore architecto ad, quos
      nesciunt mollitia ea accusantium aliquid fugit?
</p> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      repudiandae aliquid sint autem eos dolor ea maiores dolores distinctio.
      Quo delectus nobis magnam ea in voluptas numquam corporis vitae tenetur, a
      animi?
</p> <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit at totam
      suscipit, cum id quo ipsam deleniti molestiae. Porro eveniet quaerat
      cumque? Corrupti impedit vel, quod et quibusdam id eligendi! Doloremque
      consequatur eveniet voluptas voluptates fugit. Placeat qui rem cum,
      molestiae quae sunt dignissimos, ad officiis quos, tempore laborum error
      modi nesciunt ratione quis quaerat eligendi!
</p> </section> <section id="contact" class="section__contact"> <h2>Contact Information</h2> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea
      possimus autem amet culpa magni fugit. Excepturi magnam, officiis eos
      quasi sequi aliquam explicabo unde.
</p> <div class="contact__section"> <a class="button-55" href="mailto:austinrmueck@gmail.com">Email Me</a> </div> </section> <section id="resume"> <h2>Resume</h2> <div class="resume__section"> <h4>Entry 1</h4> <em>March 20, 2024. Location at location</em> </div> </section> ` })}`;
}, "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/info.astro", void 0);

const $$file = "D:/00-FILES/CODE PROJECTS/repo-ARM_Website/src/pages/info.astro";
const $$url = "/info";

export { $$Info as default, $$file as file, $$url as url };
