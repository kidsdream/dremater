import { client } from "../libs/client";
import styles from '../styles/index.module.scss';
import Layout from '../components/layout'
import Profile from '../components/profile'
import MobileProfile from '../components/mobileProfile'
import NewsArea from '../components/newsArea'
import BlogArea from '../components/blogArea'
import Head from 'next/head'
import React from 'react';
import Link from "next/link";

export default function Home({ newses, blogs }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>DREMATER</title>
      </Head>
      <Layout>
        <Profile></Profile>
        <div className={styles.mainContentsArea}>
          <div className={styles.contentHeader}>
            <div className={styles.titleArea}>
              <h2 className={styles.mainTitle}>NEWS</h2>
              <p className={styles.subTitle}>お知らせ</p>
            </div>
            <Link href="#">
              <a className={styles.listButton}>お知らせ一覧</a>
            </Link>
          </div>
          <div className={styles.newsList}>
            {newses.map((news, index) => (
              <NewsArea key={index} value={news} >
              </NewsArea>
            ))}
          </div>
          <div className={`${styles.contentHeader} ${styles.margintop40}`}>
            <div className={styles.titleArea}>
              <h2 className={styles.mainTitle}>BLOG</h2>
              <p className={styles.subTitle}>ブログ</p>
            </div>
            <Link href="#">
              <a className={styles.listButton}>ブログ一覧</a>
            </Link>
          </div>
          <div className={styles.blogList}>
            {blogs.map((blog, index) => (
              <BlogArea key={index} value={blog} >
              </BlogArea>
            ))}
          </div>
        </div>
        <MobileProfile></MobileProfile>
      </Layout>
    </>
  );

}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blogData: any = await client.get({
    endpoint: "blog",
    queries: { limit: 10 }
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
