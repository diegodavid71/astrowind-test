# Despliegue en Vercel (Modo Estático)

Este proyecto está configurado para ser desplegado en Vercel como un sitio estático. A continuación, se detallan las configuraciones necesarias y recomendaciones para un despliegue exitoso.

## Configuración

El proyecto usa la siguiente configuración para Vercel:

```js
// astro.config.ts
output: 'static',
adapter: vercel()
```

## Formularios en Modo Estático

Al usar el modo estático (`output: 'static'`), las API en la carpeta `/src/pages/api` no funcionan como endpoints de servidor. Para gestionar formularios, hay dos opciones:

### 1. Usar un servicio externo para formularios

Se ha incluido un componente (`src/components/widgets/ContactFormExternal.tsx`) que usa Formspree como servicio de manejo de formularios. Para usarlo:

1. Regístrate en [Formspree](https://formspree.io/)
2. Crea un nuevo formulario y obtén tu ID
3. Actualiza la propiedad `action` en el componente con tu ID:

```jsx
action="https://formspree.io/f/tu-id-de-formspree"
```

### 2. Usar Funciones de Vercel

Si necesitas más control, puedes crear Funciones de Vercel en la carpeta `/api` a nivel raíz del proyecto:

1. Crea una carpeta `api` en la raíz del proyecto
2. Crea un archivo para tu función, por ejemplo `api/submit-form.js`:

```js
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Procesar datos del formulario
    const { name, email, message } = req.body;
    
    // Lógica de procesamiento (enviar email, guardar en BD, etc.)
    
    return res.status(200).json({ success: true });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}
```

3. Actualiza el formulario para que apunte a esta función:

```html
<form action="/api/submit-form" method="POST">
```

## Pasos para Desplegar

1. Sube tu código a un repositorio Git (GitHub, GitLab, Bitbucket)
2. Inicia sesión en [Vercel](https://vercel.com/)
3. Haz clic en "New Project" y selecciona tu repositorio
4. Configura el proyecto:
   - Framework preset: Astro
   - Build Command: npm run build
   - Output Directory: dist
5. Haz clic en "Deploy"

## Solución de problemas comunes

1. **Error 404 en rutas dinámicas**: Asegúrate de que todas las rutas dinámicas estén pre-renderizadas mediante el uso de `getStaticPaths()`.

2. **Problemas con las imágenes**: Si usas imágenes optimizadas de Astro, asegúrate de que estén pre-renderizadas.

3. **URLs de API no funcionan**: Recuerda que en el modo estático, no puedes usar API routes de Astro. Usa las alternativas mencionadas arriba.

## Referencias

- [Documentación de Astro sobre Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
- [Adaptador de Vercel para Astro](https://github.com/withastro/astro/tree/main/packages/integrations/vercel)
- [Funciones Serverless de Vercel](https://vercel.com/docs/concepts/functions/serverless-functions)
