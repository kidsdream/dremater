import styles from '/styles/profile.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

function Profile() {
  return (
    <div className={styles.profileArea}>
      <h2 className={styles.areaTitle}>PROFILE</h2>
      <div className={styles.profileTop}>
        <Image src="/images/test-icon.png" alt="DREAMのプロフィール画像" width={120} height={120} />
        <p className={styles.margintop8}>DREAM</p>
      </div>
      <div className={styles.profileDescription}>
        <p>
          大阪でサーバーサイド兼Androidエンジニア<br />
          として活動しています。<br />
          フロントエンドやiOSに関しても学んでおり、学んだ情報をまとめて分かりやすく発信しています。<br />
          <br />
          大学時代から簡単なWebサービスを開発し、実際にリリースした際に<br />
          ・実際に使ってもらった人の反応<br />
          ・収益化することによるサービスの反応<br />
          で実際にサービスを開発して、そのサービスの反応を見ることにより、大学の授業の、「なんとなくのプログラミング」から「実際に使えるプログラミング」になった時に、プログラミングの楽しさに気づきました。<br />
          このプログラミングの楽しさを共有するために本ブログを作成しました。<br />
          <br />
          最近はFlutterやGoが特に気になっており、習得しつつハンズオン形式で発信する予定です。<br />
        </p>
      </div>
      <div className={styles.buttonArea}>
        <div className={styles.twitterButton}><Link href="https://twitter.com/new_kidsdream/"><a target="_blank">Twitter</a></Link></div>
        <div className={styles.githubButton}><Link href="https://github.com/kidsdream/"><a target="_blank">GitHub</a></Link></div>
        <div className={styles.qiitaButton}><Link href="https://qiita.com/kidsdream/"><a target="_blank">Qiita</a></Link></div>
      </div>
    </div>
  );
}

export default Profile
