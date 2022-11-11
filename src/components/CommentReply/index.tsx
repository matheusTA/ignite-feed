import { ThumbsUp, Trash } from "phosphor-react";
import Avatar from "../Avatar";
import styles from "./styles.module.css";

interface CommentReplyProps {
  content: string;
}

const CommentReply = ({ content }: CommentReplyProps) => {
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

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CommentReply;
