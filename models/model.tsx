// Comment.ts
export interface Comment {
    id: string;
    text: string;
    author?: string | null;
    blogId: string;
    blog?: Blog | null;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // Blog.ts
  export interface Blog {
    id: string;
    imageUrl?: string | null;
    title: string;
    author: string;
    description?: string | null;
    category: string;
    createdAt: Date;
    updatedAt: Date;
    comments: Comment[];
  }