import { client } from "../../libs/client";
import styles from '../../styles/blogIndex.module.scss';
import Layout from '../../components/layout'
import BlogArea from '../../components/blogArea'
import Head from 'next/head'
import React from 'react';

export default function News({ blogs }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>DREMATER | ブログ</title>
      </Head>
      <Layout>
        <h2 className={styles.blogTitle}>BLOG</h2>
        <div className={styles.blogList}>
          {blogs.map((blog, index) => (
            <BlogArea key={index} value={blog} >
            </BlogArea>
          ))}
        </div>
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
