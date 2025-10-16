"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

// Esquema de validación con Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }).max(50, { message: "El nombre no debe exceder los 50 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }).max(100, { message: "El asunto no debe exceder los 100 caracteres." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }).max(500, { message: "El mensaje no debe exceder los 500 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    // Aquí es donde enviarías los datos del formulario a tu backend o servicio de correo.
    // Por ahora, solo mostraremos un toast de éxito.
    console.log("Formulario enviado:", values);
    toast.success("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
    form.reset(); // Limpiar el formulario después del envío
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Nombre Completo</Label>
        <Input
          id="name"
          type="text"
          placeholder="Tu nombre"
          className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          {...form.register("name")}
        />
        {form.formState.errors.name && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Correo Electrónico</Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@ejemplo.com"
          className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          {...form.register("email")}
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="subject" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Asunto</Label>
        <Input
          id="subject"
          type="text"
          placeholder="Asunto del mensaje"
          className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          {...form.register("subject")}
        />
        {form.formState.errors.subject && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.subject.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Mensaje</Label>
        <Textarea
          id="message"
          placeholder="Escribe tu mensaje aquí..."
          rows={5}
          className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          {...form.register("message")}
        />
        {form.formState.errors.message && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensaje"}
      </Button>
    </form>
  );
};

export default ContactForm;