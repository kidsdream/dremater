import Link from "next/link";
import styles from '/styles/newsArea.module.scss'
import Date from './date'

function NewsArea(props) {
  const blog = props.value;
  return (
    <>
      <dl className={styles.newsArea}>
        <dt className={styles.newsDate}><Date dateString={blog.createdAt} /></dt>
        <dd>{blog.title}</dd>
      </dl>
    </>
  );
}

export default NewsArea
