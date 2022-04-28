import { client } from "../libs/client"
import styles from '../styles/index.module.scss'
import Layout from '../components/layout'
import Profile from '../components/profile'
import MobileProfile from '../components/mobileProfile'
import NewsArea from '../components/newsArea'
import BlogArea from '../components/blogArea'
import OpAnim from '../components/opAnim'
import NavBanner from '../components/navBanner'
import PopularBlogBanner from '../components/popularBlogBanner'
import LpArea from '../components/lpArea'
import ReturnTopButton from '../components/returnTopButton'
import Head from 'next/head'
import Link from "next/link"
import Script from 'next/script'

export default function Home({ newses, blogs }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>DREMATER | クリエイトを手助けするハンズオンWebサイト</title>
      </Head>
      <Layout>
        <OpAnim />
        <div className={styles.opAnimArea} />
        <NavBanner />
        <div className={styles.mainContentsOuter}>
          <div className={styles.mainContentsInner}>
            <div className={styles.blogArea}>
              <div className={styles.blogList}>
                {blogs.map((blog, index) => (
                  <BlogArea key={index} value={blog} >
                  </BlogArea>
                ))}
              </div>
              <div className={styles.listButtonArea}>
                <Link href="/blog">
                  <a className={styles.listButton}>全ての記事を見る</a>
                </Link>
              </div>
            </div>
            <Profile></Profile>
            <div className={styles.newsArea}>
              <h2 className={styles.areaTitle}>NEWS</h2>
              {newses.map((news, index) => (
                <NewsArea key={index} value={news} >
                </NewsArea>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.cb} />
        <PopularBlogBanner />
        <LpArea />
        <ReturnTopButton />
        {/* <MobileProfile></MobileProfile> */}
      </Layout>
    </>
  );

}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blogData: any = await client.get({
    endpoint: "blog",
    queries: { limit: 6 }
  });
  const newsData: any = await client.get({
    endpoint: "news",
    queries: { limit: 3 }
  });
  return {
    props: {
      blogs: blogData.contents,
      newses: newsData.contents,
    },
  };
};
