import Link from "next/link";
import Image from 'next/image'
import styles from '/styles/layout.module.scss'
import Menu from './menu'

function Layout({ children }) {
  let year = new Date().getFullYear();
  return (
    <>
      <div className={styles.body} id="outer-container">
        {/* TODO ハンバーガーメニューはスマホサイズのみに表示 */}
        {/* <Menu width={260} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} /> */}
        <header>
          <div className={styles.headerContent}>
            <div className={styles.titleArea}>
              <Link href={`/`}>
                <div className={styles.mainTitle}>
                  <Image src={"/images/dremater-logo.svg"} width={120} height={60} priority={true} alt={"DREMATERロゴ"} />
                </div>
              </Link>
              <p className={styles.subTitle}>クリエイトを手助けするハンズオンWebサイト</p>
            </div>
            <ul className={styles.navArea}>
              <li>
                <Link href={`/blog`}>BLOG</Link>
                <span>ブログ</span>
              </li>
              <li>
                <Link href={`/service`}>SERVICE</Link>
                <span>開発サービス</span>
              </li>
              <li>
                <Link href={`/work`}>WORK</Link>
                <span>実績</span>
              </li>
              <li>
                <Link href={`/contact`}>CONTACT</Link>
                <span>お問い合わせ</span>
              </li>
            </ul>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <div className={styles.footerContact}>
            <div className={styles.contactNote}>
              <p>「こんなハンズオンがみたいな」</p>
              <p>「Webサイト・アプリ制作のお仕事を依頼したいな」</p>
              <p>などありましたら下のボタンより、お気軽にお問い合わせください👇</p>
            </div>
            <div className={styles.contactButton}>
              <Link href={`/contact`}>
                <span>お問い合わせはこちら</span>
              </Link>
            </div>
          </div>
          <div className={styles.footerButton}>
            <div className={styles.footerSiteMap}>
              <div className={styles.siteListArea}>
                <h3 className={styles.siteListTitle}>BLOG</h3>
                <div className={styles.siteMapList}>
                  <ul>
                    <li><Link href={`/blog`}>ブログTOP</Link></li>
                    <li><Link href={`/`}>Web制作</Link></li>
                    <li><Link href={`/`}>アプリ制作</Link></li>
                    <li><Link href={`/`}>デザイン</Link></li>
                    <li><Link href={`/`}>音楽制作</Link></li>
                    <li><Link href={`/`}>動画制作</Link></li>
                  </ul>
                </div>
              </div>
              <div className={styles.siteListArea}>
                <h3 className={styles.siteListTitle}>SERVICE</h3>
                <div className={styles.siteMapList}>
                  <ul>
                    <li><Link href={`/`}>GRUMBLE</Link></li>
                    <li><Link href={`/`}>値札生成ツール</Link></li>
                  </ul>
                </div>
              </div>
              <div className={styles.siteListArea}>
                <h3 className={styles.siteListTitle}>OTHER</h3>
                <div className={styles.siteMapList}>
                  <ul>
                    <li><Link href={`/`}>プライバシーポリシー</Link></li>
                    <li><Link href={`/`}>お問い合わせ</Link></li>
                    <li><Link href={`/`}>サイトマップ</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerCopy}>
            <small>&copy; {year} DREMATER</small>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout
