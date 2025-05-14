import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const message = formData.get('message')?.toString();

    // Aquí puedes implementar el envío de email o almacenamiento en base de datos
    // Por ahora, solo validamos que los campos existan
    
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Faltan campos requeridos'
        }), 
        { status: 400 }
      );
    }

    // Simulación de procesamiento exitoso
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Formulario enviado correctamente'
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error al procesar el formulario'
      }),
      { status: 500 }
    );
  }
}