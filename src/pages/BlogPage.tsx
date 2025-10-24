import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import BlogPostCard from '@/components/BlogPostCard';
import { getAllPosts } from '@/services/blogService';
import { BlogPost } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        setError('No se pudieron cargar las publicaciones. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const renderSkeletons = () => (
    Array.from({ length: 3 }).map((_, index) => (
      <div key={index} className="flex flex-col space-y-3">
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    ))
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-primary mb-4">Noticias y Actualizaciones</h1>
              <p className="text-lg text-foreground max-w-3xl mx-auto">
                Mantente al día con nuestras últimas noticias, historias de impacto y próximos eventos.
              </p>
            </div>
            {error && <p className="text-center text-destructive">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? renderSkeletons() : posts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default BlogPage;