import { client } from "../../libs/client";
import styles from '../styles/index.module.scss';
import Layout from '../../components/layout'
import Profile from '../../components/profile'
import MobileProfile from '../../components/mobileProfile'
import NewsArea from '../../components/newsArea'
import BlogArea from '../../components/blogArea'
import Head from 'next/head'
import React from 'react';
import Link from "next/link";

export default function News({ blogs }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>DREMATER</title>
      </Head>
      <Layout>
        <p>ブログページ</p>
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
