import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">Publicación no encontrada</h1>
            <p className="text-lg text-gray-700 mb-8">Lo sentimos, no pudimos encontrar el artículo que estás buscando.</p>
            <Link to="/blog">
              <Button>Volver al Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
        <MadeWithDyad />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <article>
            <div className="mb-8">
              <Link to="/blog" className="inline-flex items-center text-primary hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a todas las publicaciones
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 dark:text-primary-foreground">{post.title}</h1>
            <p className="text-md text-gray-500 dark:text-gray-400 mb-8">{post.date} por {post.author}</p>
            
            <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" />

            <div className="prose lg:prose-xl max-w-none dark:prose-invert text-gray-700 dark:text-gray-300">
              {/* En una aplicación real, aquí renderizarías el contenido de Markdown o HTML */}
              <p className="lead mb-6">{post.summary}</p>
              <p>{post.content}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.</p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default BlogPostPage;