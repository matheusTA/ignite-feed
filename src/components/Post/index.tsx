import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Post as PostProps } from "../../models/Post";
import Avatar from "../Avatar";
import CommentReply from "../CommentReply";
import styles from "./styles.module.css";

const Post = ({ id, author, comment, publishedAt }: PostProps) => {
  const [commentReplies, setCommentReplies] = useState([
    "Respondendo um comentario",
  ]);
  const [commentReply, setCommentReply] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewCommentReply = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setCommentReplies([...commentReplies, commentReply]);
    setCommentReply("");
  };

  const deleteCommentReply = (commentReplyToDelete: string) => {
    const commentsWithoutDeletedOne = commentReplies.filter(
      (commentReply) => commentReply !== commentReplyToDelete
    );

    setCommentReplies(commentsWithoutDeletedOne);
  };

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {comment.map(({ type, content }) =>
          type === "paragraph" ? (
            <p key={content}>{content}</p>
          ) : (
            <p key={content}>
              <a href="#">{content}</a>
            </p>
          )
        )}
      </div>

      <form
        className={styles.commentForm}
        onSubmit={(e) => handleCreateNewCommentReply(e)}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          value={commentReply}
          onChange={(e) => setCommentReply(e.target.value)}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {commentReplies.map((commentReply) => (
          <CommentReply
            key={commentReply}
            content={commentReply}
            onDeleteCommentReply={deleteCommentReply}
          />
        ))}
      </div>
    </article>
  );
};

export default Post;
