import Sidebar from "../../components/Sidebar";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <div>postagem</div>
      </main>
    </div>
  );
};

export default Home;
