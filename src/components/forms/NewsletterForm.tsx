"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Mail } from 'lucide-react';

const newsletterFormSchema = z.object({
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
});

type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

const NewsletterForm = () => {
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: NewsletterFormValues) => {
    console.log("Suscripción al boletín:", values);
    toast.success("¡Gracias por suscribirte! Te mantendremos al tanto.");
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
      <div className="relative flex-grow">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          id="newsletter-email"
          type="email"
          placeholder="tu@ejemplo.com"
          className="pl-10 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
          {...form.register("email")}
        />
      </div>
      <Button type="submit" className="bg-white text-primary hover:bg-gray-100" disabled={form.formState.isSubmitting}>
        Suscribirse
      </Button>
      {form.formState.errors.email && (
        <p className="text-red-400 text-sm mt-1 sm:absolute sm:bottom-[-20px]">{form.formState.errors.email.message}</p>
      )}
    </form>
  );
};

export default NewsletterForm;