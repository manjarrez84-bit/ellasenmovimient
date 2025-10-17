import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/data/blogPosts';
import { ArrowRight } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl dark:bg-gray-800">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary dark:text-primary-foreground">{post.title}</CardTitle>
        <p className="text-sm text-gray-500 dark:text-gray-400">{post.date} por {post.author}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 dark:text-gray-300">{post.summary}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/blog/${post.id}`} className="w-full">
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Leer Más <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;