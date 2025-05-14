// Función de Vercel para manejar formularios
export default function handler(req, res) {
  // Sólo permitir solicitudes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    // Capturar datos del formulario
    const { name, email, message } = req.body;

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Faltan campos requeridos'
      });
    }

    // Aquí puedes implementar:
    // 1. Envío de email (con SendGrid, Mailgun, etc.)
    // 2. Almacenamiento en base de datos (con Supabase, Firebase, etc.)
    // 3. Notificaciones (con Slack, Telegram, etc.)

    console.log('Datos recibidos:', { name, email, message });

    // Simulación de procesamiento exitoso
    return res.status(200).json({
      success: true,
      message: 'Formulario enviado correctamente'
    });
  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return res.status(500).json({
      success: false,
      message: 'Error al procesar el formulario'
    });
  }
}
