import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { blogPosts } from '@/data/blogPosts';
import BlogPostCard from '@/components/BlogPostCard';

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-primary mb-4">Noticias y Actualizaciones</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Mantente al día con nuestras últimas noticias, historias de impacto y próximos eventos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
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