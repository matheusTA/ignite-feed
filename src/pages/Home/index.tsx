import Post from "../../components/Post";
import Sidebar from "../../components/Sidebar";
import styles from "./styles.module.css";
import { postsMock } from "../../mocks/posts";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {postsMock.map(({ id, author, comment, publishedAt }) => (
          <Post
            key={id}
            id={id}
            author={author}
            comment={comment}
            publishedAt={publishedAt}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
