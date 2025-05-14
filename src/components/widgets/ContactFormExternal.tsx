// Componente de formulario con soporte para servicio externo

import { Form } from '~/components/ui/Form';
import Headline from '~/components/ui/Headline.astro';
import { Icon } from 'astro-icon/components';

export default function ContactForm() {
  return (
    <div class="grid gap-10">
      <div class="max-w-xl mx-auto text-center">
        <Headline>Contáctanos</Headline>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Estamos aquí para ayudarte. Rellena el formulario y te contactaremos pronto.
        </p>
      </div>
      <div class="max-w-3xl mx-auto">
        <Form
          method="POST"
          action="https://formspree.io/f/your-formspree-id" /* Reemplaza con tu ID de Formspree */
          class="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label for="name" class="block mb-2 text-sm text-gray-700 dark:text-gray-300">Nombre completo</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Tu nombre"
              required
              class="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm text-gray-700 dark:text-gray-300">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Tu correo electrónico"
              required
              class="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <div class="md:col-span-2">
            <label for="message" class="block mb-2 text-sm text-gray-700 dark:text-gray-300">Mensaje</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Tu mensaje"
              required
              class="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            ></textarea>
          </div>
          <div class="md:col-span-2 text-center">
            <button
              type="submit"
              class="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <Icon name="tabler:send" class="w-5 h-5 mr-2" />
              Enviar mensaje
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
