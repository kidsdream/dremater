import styles from '/styles/profile.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

function Profile() {
  return (
    <div className={styles.profileArea}>
      <Image src="/images/test-icon.png" alt="DREAMのプロフィール画像" width={120} height={120} />
      <p>DREAM</p>
      <p>大阪のサーバーサイドエンジニア</p>
      <div>
        <Link href="https://twitter.com/new_kidsdream">
          <a><FontAwesomeIcon icon={faTwitter} /></a>
        </Link>
        <Link href="https://github.com/kidsdream">
          <a><FontAwesomeIcon icon={faGithub} /></a>
        </Link>
        <Link href="https://qiita.com/kidsdream">
          <a><Image src="/images/qiita.png" alt="Qiitaアイコン画像" width={40} height={40} /></a>
        </Link>
      </div>
    </div>
  );
}

export default Profile
