import styles from '/styles/layout.module.scss'
import MediaQuery from "react-responsive";
import Image from 'next/image'

function Layout({ children }) {
  let d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <div className={styles.body}>
        <Image src="/images/background.jpg" layout="fill" objectFit="cover" alt="背景画像"/>
        <MediaQuery query="(min-width: 768px)">
          <header>
            <h1>DREMATER</h1>
          </header>
          {children}
          <footer>
            <small>&copy; {year} DREMATER ver0.2.3</small>
          </footer>
        </MediaQuery>
        <MediaQuery query="(max-width: 767px)">
          {children}
        </MediaQuery>
      </div>
    </>
  );
}

export default Layout
