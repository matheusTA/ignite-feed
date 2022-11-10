type CommentType = "paragraph" | "link";

export interface Comment {
  type: CommentType;
  content: string;
}
