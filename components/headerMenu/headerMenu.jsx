import Link from "next/link";
import styles from "./styles.module.scss";

const HeaderMenu = () => {
  return (
    <div className={styles.headerMenu}>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <div className={styles.logo}>Logo</div>
          <ul>
            <li>
              <Link href="/catalogs">Catalogs</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;
