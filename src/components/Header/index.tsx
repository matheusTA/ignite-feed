import styles from "./styles.module.css";

import igniteLogo from "../../assets/ignite-logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
};

export default Header;
