import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeCount() {
    setLikeCount(prevState => {
      return prevState + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/mathvsk.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Viscki</strong>
              <time title="" dateTime="">Cerca de 1h atrás </time>
            </div>

            <button 
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        
        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}