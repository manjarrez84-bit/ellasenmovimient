"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, CheckCircle, XCircle } from 'lucide-react';

const SupabaseStatusCheck: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Verificando conexión con Supabase...');

  useEffect(() => {
    const checkConnection = async () => {
      try {
        // Intenta obtener la hora actual del servidor de Supabase (una consulta simple)
        const { data, error } = await supabase.rpc('now'); 

        if (error) {
          throw error;
        }

        setStatus('success');
        setMessage('¡Conexión a Supabase exitosa! El servicio está en línea.');
      } catch (err: any) {
        console.error("Error de conexión a Supabase:", err);
        setStatus('error');
        setMessage(`Error al conectar con Supabase: ${err.message || 'Verifica tus variables de entorno y la configuración de la base de datos.'}`);
      }
    };

    checkConnection();
  }, []);

  const Icon = status === 'success' ? CheckCircle : status === 'error' ? XCircle : Terminal;
  const variant = status === 'success' ? 'default' : status === 'error' ? 'destructive' : 'default';
  const colorClass = status === 'success' ? 'text-green-600' : status === 'error' ? 'text-red-600' : 'text-blue-600';

  return (
    <div className="container mx-auto px-4 py-4 max-w-4xl">
      <Alert variant={variant} className={colorClass}>
        <Icon className="h-4 w-4" />
        <AlertTitle className="font-bold">Estado de Supabase</AlertTitle>
        <AlertDescription>
          {message}
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default SupabaseStatusCheck;