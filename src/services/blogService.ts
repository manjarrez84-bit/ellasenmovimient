import { supabase } from '@/lib/supabase';
import { BlogPost } from '@/types';

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    throw new Error('No se pudieron cargar las publicaciones.');
  }

  return data as BlogPost[];
};

export const getPostById = async (id: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching post with id ${id}:`, error);
    // No lanzamos un error si no se encuentra, simplemente devolvemos null
    if (error.code === 'PGRST116') {
        return null;
    }
    throw new Error('No se pudo cargar la publicación.');
  }

  return data as BlogPost | null;
};