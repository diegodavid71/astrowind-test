import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, c as createAstro, F as Fragment } from '../chunks/astro/server_Dr01PQfJ.mjs';
import 'kleur/colors';
import { b as $$PageLayout } from '../chunks/PageLayout_DiZnkisn.mjs';
import { $ as $$Hero } from '../chunks/Hero_BlmBd3Kw.mjs';
import { $ as $$Icon } from '../chunks/ToggleTheme_BkKY6H_9.mjs';
import { $ as $$Features } from '../chunks/Features_Bth9AfYG.mjs';
import { $ as $$Content } from '../chunks/Content_DJCVh-dH.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_BGpjNfzn.mjs';
import { $ as $$Features2 } from '../chunks/Features2_VdYSA2hi.mjs';
export { renderers } from '../renderers.mjs';

const $$Note = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-50 dark:bg-slate-800 not-prose"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium"> <span class="font-bold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:info-square", "class": "w-5 h-5 inline-block align-text-bottom" })} Nuestra filosofía:</span> Eficiencia, Detalle y Compromiso.
</div> </section>`;
}, "C:/Users/d.olivas.trujillano/Documents/Astro/astrowind-test/src/components/widgets/Note.astro", void 0);

const $$Astro = createAstro("https://grupoclever.es/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const metadata = {
    title: "Grupo Clever",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {}, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline"> <span class="font-semibold">Grupo Clever</span> te ofrece soluciones de limpieza personalizadas y de alta calidad para cualquier espacio. Ideal para oficinas, talleres, hogares y negocios. Nuestro equipo profesional garantiza resultados impecables y espacios relucientes, adaptándonos a tus necesidades.
</span>` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Servicios Profesionales de Limpieza con
<span class="text-accent dark:text-white highlight"> Grupo Clever</span> ` })}` })}  ${renderComponent($$result2, "Note", $$Note, {})}  ${renderComponent($$result2, "Features", $$Features, { "id": "Ventajas", "tagline": "", "title": "Descubre las Ventajas de Elegir Grupo Clever: Servicios y Beneficios\xA0Clave", "subtitle": "", "items": [
    {
      title: "Energ\xEDa y compromiso de una nueva empresa",
      description: "Como una empresa de reciente formaci\xF3n, en Grupo Clever nos respalda un equipo talentoso y una visi\xF3n clara: ser un socio confiable para nuestros clientes. Apostamos por la innovaci\xF3n y el trabajo constante para ganarnos tu confianza y superar tus\xA0expectativas.",
      icon: "tabler:brand-tailwind"
    },
    {
      title: "Innovaci\xF3n y tecnolog\xEDa",
      description: "Utilizamos las \xFAltimas herramientas y tecnolog\xEDas para garantizar resultados efectivos, optimizando tiempos y costos en cada etapa\xA0del\xA0proceso.",
      icon: "tabler:components"
    },
    {
      title: "Atenci\xF3n personalizada",
      description: "Creemos en la importancia de escuchar y entender a nuestros clientes. Por eso, nuestro equipo trabaja contigo para garantizar que cada detalle se ajuste a tus\xA0expectativas.",
      icon: "tabler:list-check"
    },
    {
      title: "Compromiso con la sostenibilidad",
      description: "En Grupo Clever entendemos la importancia de cuidar el medio ambiente. Por eso, implementamos pr\xE1cticas sostenibles en todos nuestros procesos y promovemos soluciones que minimicen el impacto ambiental, contribuyendo al desarrollo de un futuro m\xE1s responsable\xA0y\xA0ecol\xF3gico.",
      icon: "tabler:rocket"
    },
    {
      title: "Flexibilidad y adaptabilidad",
      description: "Nos diferenciamos por nuestra capacidad de adaptarnos r\xE1pidamente a las necesidades y requerimientos espec\xEDficos de cada cliente. Gracias a nuestra estructura din\xE1mica, podemos ofrecer\xA0soluciones.",
      icon: "tabler:arrows-right-left"
    },
    {
      title: "Compromiso con tu bienestar a largo plazo",
      description: "En Grupo Clever, no solo nos interesa ofrecer un servicio puntual, sino establecer una relaci\xF3n duradera. Queremos ser tu aliado en el mantenimiento y cuidado constante de tus instalaciones, garantizando que siempre est\xE9n en las mejores condiciones. Nuestra misi\xF3n es apoyarte a lo largo del tiempo, asegurando que tu espacio se mantenga limpio, seguro y funcional en\xA0todo\xA0momento.",
      icon: "tabler:bulb"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "id": "Servicios", "tagline": "", "title": "Servicios profesionales que puedes\xA0encontrar", "items": [
    {
      title: "Limpieza diaria y programada",
      description: "Nos encargamos de mantener tus instalaciones siempre limpias y ordenadas, brindando un ambiente de trabajo saludable y profesional y garantizando que el ambiente de trabajo est\xE9 siempre en condiciones \xF3ptimas para empezar el d\xEDa."
    },
    {
      title: "Limpieza profunda y mantenimiento especializado",
      description: "Ofrecemos servicios de limpieza profunda para \xE1reas que requieren atenci\xF3n extra, como alfombras, tapicer\xEDas, equipos de oficina, sistemas de climatizaci\xF3n y de la eliminaci\xF3n de polvo en lugares dif\xEDciles de alcanzar, asegurando la calidad del aire y el confort de tus\xA0instalaciones."
    }
  ], "image": {
    src: "~/assets/images/limpieza-oficinas.jpeg",
    alt: "Colorful Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Limpieza de oficinas y locales comerciales</h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "Limpieza y mantenimiento de escaleras",
      description: "Nos encargamos de mantener impecables las escaleras y rellanos de los edificios, eliminando el polvo, las manchas y la suciedad acumulada en barandillas, pelda\xF1os y pasamanos. Adem\xE1s, utilizamos productos antideslizantes para garantizar la seguridad de\xA0los\xA0usuarios."
    },
    {
      title: "Limpieza de zonas comunes y exteriores",
      description: "Adem\xE1s de las escaleras, realizamos la limpieza de otras zonas comunes como vest\xEDbulos, ascensores, patios y accesos al edificio. Tambi\xE9n nos encargamos del mantenimiento de \xE1reas exteriores, como entradas, aceras, cristales y jardines, para asegurar una buena impresi\xF3n a visitantes\xA0y\xA0residentes."
    },
    {
      title: "Gesti\xF3n de peque\xF1as reparaciones",
      description: "Nos ocupamos de peque\xF1as reparaciones en el edificio, como cambios de bombillas, ajustes de cerraduras o reparaci\xF3n de desperfectos menores en elementos estructurales, asegurando que las instalaciones siempre est\xE9n en perfecto\xA0estado."
    },
    {
      title: "Abrillantados y acristalados profesionales",
      description: "Usamos m\xE1quinas rotativas y productos espec\xEDficos para devolver el brillo original a suelos de m\xE1rmol, terrazo y piedra natural. Este proceso no solo mejora la est\xE9tica y elimina manchas y rayajos del suelo sino que tambi\xE9n prolonga la vida \xFAtil de las\xA0superficies."
    }
  ], "image": {
    src: "~/assets/images/limpieza-comunidades.jpeg",
    alt: "Astronauts Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Mantenimiento de Edificios y Limpieza de Escaleras</h3>
En Grupo Clever, entendemos que el mantenimiento de edificios y la limpieza de áreas comunes, como las escaleras, son esenciales para garantizar la seguridad, el confort y una buena impresión de cualquier propiedad.
` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Limpieza de maquinaria y equipos industriales",
      description: "Ofrecemos servicios de limpieza espec\xEDficos para maquinaria pesada y equipos industriales. Usamos m\xE9todos adecuados para eliminar grasa, polvo y residuos acumulados, prolongando la vida \xFAtil de los equipos y asegurando su \xF3ptimo\xA0rendimiento."
    },
    {
      title: "Limpieza de zonas de producci\xF3n y almacenamiento",
      description: "Nos encargamos de la limpieza de \xE1reas clave como l\xEDneas de producci\xF3n, almacenes y zonas de carga y descarga. Garantizamos un entorno libre de residuos, contaminantes y polvo, cumpliendo con los est\xE1ndares de seguridad e higiene\xA0industrial."
    },
    {
      title: "Control y eliminaci\xF3n de residuos industriales",
      description: "Realizamos la gesti\xF3n y eliminaci\xF3n adecuada de los residuos generados durante los procesos industriales, cumpliendo con todas las normativas medioambientales y de seguridad. Nuestro objetivo es minimizar el impacto ambiental mientras mantenemos tus instalaciones limpias y en pleno\xA0funcionamiento."
    }
  ], "image": {
    src: "~/assets/images/limpieza-naves.jpeg",
    alt: "Blueprint Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Limpieza industrial de naves y fábricas</h3>
Limpiezas a fondo en instalaciones industriales, garantizando un entorno seguro, higiénico y libre de contaminantes.
` })}` })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "id": "Testimonials", "title": "\xBFQue dicen nuestros clientes?", "testimonials": [
    {
      testimonial: "El servicio de limpieza de mi comunidad fue impecable. Los espacios comunes quedaron relucientes, y se nota la atenci\xF3n al detalle en cada rinc\xF3n. Ahora da gusto ver el edificio. \xA1Altamente\xA0recomendado!",
      name: "Aitana De Andres",
      job: "",
      image: {
        src: "~/assets/images/Aitana De Andres Image.png",
        alt: "Aitana De Andres Image"
      }
    },
    {
      testimonial: "Contratamos el servicio de limpieza para nuestra oficina y fue una experiencia incre\xEDble. Todo qued\xF3 reluciente, desde los escritorios hasta las \xE1reas comunes. Adem\xE1s, el equipo fue puntual y muy profesional. Sin duda, seguiremos contando con sus servicios.",
      name: "Diego Olivas",
      job: "",
      image: {
        src: "~/assets/images/Diego Olivas Image.png",
        alt: "Diego Olivas Image"
      }
    },
    {
      testimonial: "La limpieza de mi taller super\xF3 mis expectativas. Lograron eliminar incluso las manchas m\xE1s dif\xEDciles y dejaron el espacio como nuevo. El proceso fue r\xE1pido y eficiente, y el resultado habla por s\xED solo. Recomiendo esta empresa sin ninguna duda.",
      name: "Guillermo Candeias",
      job: "",
      image: {
        src: "~/assets/images/Guillermo Candeias Image.png",
        alt: "Guillermo Candeias Image"
      }
    }
  ] })}    ${renderComponent($$result2, "Features2", $$Features2, { "id": "Contacto", "title": "Contacto", "columns": 2, "items": [
    {
      title: "D\xE9janos un mensaje",
      description: "multiservicios@grupoclever.es",
      icon: "tabler:messages"
    },
    {
      title: "Ll\xE1manos",
      description: "601 04 84 59",
      icon: "tabler:headset"
    }
  ] })} ` })}`;
}, "C:/Users/d.olivas.trujillano/Documents/Astro/astrowind-test/src/pages/index.astro", void 0);

const $$file = "C:/Users/d.olivas.trujillano/Documents/Astro/astrowind-test/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
