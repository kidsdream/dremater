import styles from '/styles/layout.module.scss'

function Layout({ children }) {
  let d = new Date();
  let year = d.getFullYear();
  return (
    <div className={styles.body}>
      <header>
        <h1>DREMATER</h1>
      </header>
      {children}
      <footer>
        <small>&copy; {year} DREMATER ver0.2.0</small>
      </footer>
    </div>
  );
}

export default Layout
