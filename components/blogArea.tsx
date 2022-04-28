import Link from "next/link";
import Image from 'next/image'
import styles from '/styles/blogArea.module.scss'
import Date from './date'

function BlogArea(props) {
  const blog = props.value;
  return (
    <>
    <Link href={`/blog/${blog.id}`}>
      <a className={styles.singleBlog}>
        <article key={blog.id} >
            {blog.thumbnail ? (
              <div className={styles.blogThumbnail}>
                <picture>
                  <source srcSet={blog.thumbnail.url + "?w=340&h=240&fit=crop&dpr=2 2x"} />
                  <Image src={blog.thumbnail.url + "?w=340&h=240&fit=crop"} width={340} height={240} objectFit="cover" priority={true} alt={blog.title + "のサムネイル"} />
                </picture>
              </div>
          ) : (
            <div className={styles.noImage} />
          )}
          <div className={styles.blogStringArea}>
            <p className={styles.blogTitle}>{blog.title}</p>
            <p className={styles.blogDate}><Date dateString={blog.updatedAt} /></p>
          </div>
        </article>
      </a>
    </Link>
    </>
  );
}

export default BlogArea
