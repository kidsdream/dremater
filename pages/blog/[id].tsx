import { client } from '../../libs/client';
import styles from '../../styles/blog_detail.module.scss';
import Head from 'next/head'
import Date from '../../components/date'

export default function BlogId({ blog }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet"></link>
        <title>{blog.title} | DREMATER</title>
      </Head>
      <div className={styles.body}>
        <main className={styles.main}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.publishedAt}>更新日：<Date dateString={blog.publishedAt} /></p>
          <p className={styles.category}>{blog.category && `${blog.category.name}`}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
            className={styles.post}
          />
        </main>
      </div>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data: any = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data: any = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
