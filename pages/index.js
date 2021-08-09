import { client } from "../libs/client";
import styles from '../styles/blog_list.module.scss';
import Layout from '../components/layout'
import Profile from '../components/profile'
import BlogArea from '../components/blogArea'
import Head from 'next/head'
import MediaQuery from "react-responsive";
import React from 'react';

export default function Home({ blogs }) {
  return (
    <>
      <MediaQuery query="(min-width: 768px)">
        <Layout>
          <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>DREMATER</title>
          </Head>
          <Profile></Profile>
          <div className={styles.blogList}>
            {blogs.map((blog, index) => (
              <BlogArea key={index} value={blog} >
              </BlogArea>
            ))}
          </div>
        </Layout>
      </MediaQuery>
      <MediaQuery query="(max-width: 767px)">
        <Layout>
          <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>DREMATER</title>
          </Head>
          <div className={styles.blogList}>
            {blogs.map((blog, index) => (
              <BlogArea key={index} value={blog} >
              </BlogArea>
            ))}
          </div>
          <Profile></Profile>
        </Layout>
      </MediaQuery>
    </>
  );

}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
