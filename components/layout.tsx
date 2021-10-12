import styles from '/styles/layout.module.scss'
import Image from 'next/image'
import Head from 'next/head'
import Menu from './menu'

function Layout({ children }) {
  let d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.body} id="outer-container">
        <Image src="/images/background.jpg" layout="fill" objectFit="cover" alt="背景画像" className={styles.background} />
        <Menu width={ 260 } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
        <header>
          <h1>DREMATER</h1>
        </header>
        <main id="page-wrap">
          {children}
        </main>
        <footer>
          <small>&copy; {year} DREMATER</small>
        </footer>
      </div>
    </>
  );
}

export default Layout
