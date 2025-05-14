export { renderers } from '../../renderers.mjs';

const post = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Faltan campos requeridos"
        }),
        { status: 400 }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Formulario enviado correctamente"
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al procesar el formulario:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error al procesar el formulario"
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
