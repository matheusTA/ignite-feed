import { Author } from "./Author";
import { Comment } from "./Comment";

export interface Post {
  id: number;
  author: Author;
  comment: Comment[];
  publishedAt: Date;
}
