import styles from '/styles/layout.module.scss'
import MediaQuery from "react-responsive";

function Layout({ children }) {
  let d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <div className={styles.body}>
        <MediaQuery query="(min-width: 768px)">
          <header>
            <h1>DREMATER</h1>
          </header>
          {children}
          <footer>
            <small>&copy; {year} DREMATER ver0.2.2</small>
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
