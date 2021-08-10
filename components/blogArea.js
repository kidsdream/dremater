import Link from "next/link";
import styles from '/styles/blogArea.module.scss'
import Date from './date'

function BlogArea(props) {
  const blog = props.value;
  return (
    <div>
      <article key={blog.id} className={styles.blogArea}>
        <Link href={`/blog/${blog.id}`}>
          <a>{blog.title}</a>
        </Link>
        <br />
        更新日：
        <Date dateString={blog.updatedAt} />
      </article>
    </div>
  );
}

export default BlogArea
