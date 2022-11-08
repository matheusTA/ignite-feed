import Post from "../../components/Post";
import Sidebar from "../../components/Sidebar";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post />
        <Post />
      </main>
    </div>
  );
};

export default Home;
