import { client } from "../../libs/client";
import styles from '../../styles/newsIndex.module.scss';
import Layout from '../../components/layout'
import NewsArea from '../../components/newsArea'
import Head from 'next/head'
import React from 'react';


export default function News({ newses }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>DREMATER | ニュース</title>
      </Head>
      <Layout>
        <h2 className={styles.newsTitle}>NEWS</h2>
        <div className={styles.newsList}>
          {newses.map((news, index) => (
            <NewsArea key={index} value={news} >
            </NewsArea>
          ))}
        </div>
      </Layout>
    </>
  );

}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const newsData: any = await client.get({
    endpoint: "news"
  });
  return {
    props: {
      newses: newsData.contents,
    },
  };
};
