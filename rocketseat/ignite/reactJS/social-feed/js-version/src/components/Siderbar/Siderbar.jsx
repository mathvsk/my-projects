import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="" 
      />

      <div className={styles.profile}>
        <Avatar className="avatarWithBorder" src="https://github.com/mathvsk.png"/>

        <strong>Matheus</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}