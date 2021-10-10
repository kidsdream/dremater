import styles from '/styles/profile.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

function Profile() {
  return (
    <div className={styles.profileArea}>
      <Image src="/images/test-icon.png" alt="DREAMのプロフィール画像" width={120} height={120} />
      <p className={`${styles.fontBold} ${styles.px20}`}>DREAM</p>
      <p>
        大阪で駆け回っている<br />
        サーバーサイド・モバイル(Android)<br />
        エンジニア猫
      </p>
      <p className={`${styles.fontBold} ${styles.margintop16}`}>最近の活動</p>
      <div className={styles.recentlyArea}>
        <p>
          ①ブログをWordPressから<br />
          Next.js + microCMS　に移行
        </p>
        <p>
          ②ビットコインの<br />
          自動運用ツールを作ったり
        </p>
        <p>
          ③体調管理アプリ作ったり
        </p>
      </div>
      <div className={styles.flex}>
        <div className={styles.iconArea}>
          <Link href="https://twitter.com/new_kidsdream">
            <a target="_blank" className={styles.buttonArea}><FontAwesomeIcon icon={faTwitter} className={`${styles.linkIcon} ${styles.linkTwitter}`}/></a>
          </Link>
        </div>
        <div className={styles.iconArea}>
          <Link href="https://github.com/kidsdream">
            <a target="_blank" className={styles.buttonArea}><FontAwesomeIcon icon={faGithub}  className={styles.linkIcon}/></a>
          </Link>
        </div>
        <div className={styles.iconArea}>
          <Link href="https://qiita.com/kidsdream">
          <a target="_blank" className={styles.buttonArea}><Image src="/images/qiita.png" alt="Qiitaアイコン画像" width={42} height={42} className={styles.linkIcon}/></a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile
