import { client } from "../libs/client";
import styles from '../styles/blog_list.module.scss';
import Layout from '../components/layout'
import Profile from '../components/profile'
import BlogArea from '../components/blogArea'
import Head from 'next/head'

export default function Home({ blogs }) {
  return (
    <Layout>
      <Head>
        <title>DREMATER</title>
      </Head>
      <div>
        <Profile></Profile>
        <div className={styles.blogList}>
          {blogs.map((blog, index) => (
            <BlogArea key={index} value={blog} >
              {/* {index} */}
            </BlogArea>
          ))}
        </div>
      </div>
    </Layout>
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
