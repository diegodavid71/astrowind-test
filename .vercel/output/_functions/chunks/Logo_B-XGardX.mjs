import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_Dr01PQfJ.mjs';
import 'kleur/colors';
import 'clsx';
import logo from './logo_Cpq8fKAO.mjs';

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white"> <img${addAttribute(logo.src, "src")} class="logoWidth"> </span>`;
}, "C:/Users/d.olivas.trujillano/Documents/Astro/astrowind-test/src/components/Logo.astro", void 0);

export { $$Logo as $ };
