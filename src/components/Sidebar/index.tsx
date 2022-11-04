import { PencilLine } from "phosphor-react";
import styles from "./styles.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1583897167431-9d7b49f590e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="capa do perfil"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/matheusTA.png"
          alt="foto de perfil"
        />

        <strong>Matheus Antonino</strong>
        <span>Software Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
