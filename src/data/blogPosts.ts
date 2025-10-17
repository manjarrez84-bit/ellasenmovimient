export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  imageUrl: string;
  content: string; // En una aplicación real, esto podría ser Markdown o HTML
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Inauguramos Nuevo Taller de Costura para Emprendedoras',
    date: '15 de Julio, 2024',
    author: 'Equipo de Ellas en Movimiento',
    summary: 'Con gran alegría, hemos inaugurado un nuevo taller de costura equipado para capacitar a 20 mujeres. Este espacio les brindará las herramientas para iniciar sus propios negocios y alcanzar la independencia económica.',
    imageUrl: '/IMG-20251015-WA0014.jpg',
    content: 'El contenido completo del artículo sobre el taller de costura iría aquí...'
  },
  {
    id: '2',
    title: 'La Importancia del Apoyo Psicológico en la Recuperación',
    date: '02 de Julio, 2024',
    author: 'Lic. Valeria Ríos, Psicóloga',
    summary: 'Una de nuestras psicólogas expertas comparte por qué la terapia y los grupos de apoyo son fundamentales para que las mujeres sanen las heridas emocionales de la violencia y reconstruyan su autoestima.',
    imageUrl: '/IMG-20251015-WA0013.jpg',
    content: 'El contenido completo del artículo sobre apoyo psicológico iría aquí...'
  },
  {
    id: '3',
    title: 'Caso de Éxito: La Historia de superación de María',
    date: '20 de Junio, 2024',
    author: 'Comunicaciones',
    summary: 'María llegó a nuestra asociación buscando ayuda legal. Hoy, no solo ha resuelto su situación, sino que ha iniciado un exitoso negocio de repostería gracias a nuestros talleres. Su historia es una inspiración.',
    imageUrl: '/hero-background.jpg',
    content: 'El contenido completo del caso de éxito de María iría aquí...'
  }
];