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
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary">{post.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{post.date} por {post.author}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{post.summary}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/blog/${post.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            Leer Más <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;