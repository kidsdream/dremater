import Link from "next/link";
import { fallDown as Menu } from "react-burger-menu";
import styles from '/styles/menu.module.scss'

function menu(props) {
  return (
    <Menu {...props}>
      <Link href={`/`}>
        <a className={styles.menuItem}>トップページ</a>
      </Link>
      <Link href={`/`}>
        <a className={styles.menuItem}>お知らせ</a>
      </Link>
      <Link href={`/`}>
        <a className={styles.menuItem}>ブログ</a>
      </Link>

    </Menu>
  );
};

export default menu
