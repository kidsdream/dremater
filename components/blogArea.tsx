import Link from "next/link";
import Image from 'next/image'
import styles from '/styles/blogArea.module.scss'
import Date from './date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

function BlogArea(props) {
  const blog = props.value;
  return (
    <>
    <Link href={`/blog/${blog.id}`}>
      <a>
        <article key={blog.id} className={styles.blogArea}>
          {blog.thumbnail ? (
            <picture>
              <source srcSet={blog.thumbnail.url + "?w=180&h=180&fit=crop&dpr=2 2x"} />
              <Image src={blog.thumbnail.url + "?w=180&h=180&fit=crop"} width={180} height={180} objectFit="cover" layout={"fixed"} priority={true} alt={blog.title + "のサムネイル"} className={styles.blogThumbnail}/>
            </picture>
          ) : (
            <div className={styles.noImage} />
          )}
          <div className={styles.blogStringArea}>
            <p className={styles.blogTitle}>{blog.title}</p>
            <p className={styles.blogDate}><FontAwesomeIcon icon={faClock} className={`${styles.dateIcon} ${styles.marginright4}`}/><Date dateString={blog.updatedAt} /></p>
          </div>
        </article>
      </a>
    </Link>
    </>
  );
}

export default BlogArea
