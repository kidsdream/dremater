import Link from "next/link";
import styles from '/styles/blogArea.module.scss'
import Date from './date'

function BlogArea(props) {
  const blog = props.value;
  return (
    <div>
      <Link href={`/blog/${blog.id}`}>
        <a>
          <article key={blog.id} className={styles.blogArea}>
            {blog.title}
            <br />
            更新日：
            <Date dateString={blog.updatedAt} />
          </article>
        </a>
      </Link>
    </div>
  );
}

export default BlogArea
