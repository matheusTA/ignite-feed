import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import Avatar from "../Avatar";
import styles from "./styles.module.css";

interface CommentReplyProps {
  content: string;
  onDeleteCommentReply: (commentReplyToDelete: string) => void;
}

const CommentReply = ({ content, onDeleteCommentReply }: CommentReplyProps) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteCommentReply = (commentReplyToDelete: string) => {
    onDeleteCommentReply(commentReplyToDelete);
  };

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/matheusTA.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Antonino</strong>
              <time
                title="08 de novembro às 10h"
                dateTime="2022-11-08 08:13:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button
              title="Deletar comentário"
              onClick={() => handleDeleteCommentReply(content)}
              type="button"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CommentReply;
