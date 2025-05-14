export { renderers } from '../../renderers.mjs';

const get = async ({ request, params }) => {
  try {
    return new Response(
      JSON.stringify({
        imageUrl: "https://via.placeholder.com/300x200",
        alt: "Imagen de ejemplo"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error al procesar la solicitud de imagen:", error);
    return new Response(
      JSON.stringify({
        error: "No se pudo procesar la solicitud de imagen"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
