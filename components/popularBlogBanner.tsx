import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from 'next/image'
import styles from '/styles/navBanner.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function popularBlogBanner() {

    const settings = {
      autoplay: true,
      dots: true,
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(`Slider Changed to: ${index + 1}`);
      }
    };

  return (
    <>
      <div className={styles.popularNavBanner}>
        <div className={styles.textCenter}>
          <p className={styles.margintop40}>\ みんな注目しています /</p>
          <h2>👑人気記事👑</h2>
        </div>
        <Slider {...settings}>
          <div>
            <Link href={`/`}>
              <div className={styles.navContent}>
                {/* TODO Webハンズオンの画像を正式なものに差し替え */}
                <Image src={"/images/background.jpg"} width={440} height={260} objectFit="cover" layout={"fixed"} priority={true} alt={"Webハンズオンのイメージ画像"} className={styles.navImage} />
                <span className={styles.navBlogDescription}>テストブログ1へ遷移する。</span>
                <p className={styles.navBlogDate}>2022.04.01</p>
              </div>
            </Link>
          </div>
          <div>
            <Link href={`/`}>
              <div className={styles.navContent}>
                {/* TODO Webハンズオンの画像を正式なものに差し替え */}
                <Image src={"/images/background.jpg"} width={440} height={260} objectFit="cover" layout={"fixed"} priority={true} alt={"Webハンズオンのイメージ画像"} className={styles.navImage} />
                <span className={styles.navBlogDescription}>テストブログ1へ遷移する。</span>
                <p className={styles.navBlogDate}>2022.04.01</p>
              </div>
            </Link>
          </div>
          <div>
            <Link href={`/`}>
              <div className={styles.navContent}>
                {/* TODO Webハンズオンの画像を正式なものに差し替え */}
                <Image src={"/images/background.jpg"} width={440} height={260} objectFit="cover" layout={"fixed"} priority={true} alt={"Webハンズオンのイメージ画像"} className={styles.navImage} />
                <span className={styles.navBlogDescription}>テストブログ1へ遷移する。</span>
                <p className={styles.navBlogDate}>2022.04.01</p>
              </div>
            </Link>
          </div>
          <div>
            <Link href={`/`}>
              <div className={styles.navContent}>
                {/* TODO Webハンズオンの画像を正式なものに差し替え */}
                <Image src={"/images/background.jpg"} width={440} height={260} objectFit="cover" layout={"fixed"} priority={true} alt={"Webハンズオンのイメージ画像"} className={styles.navImage} />
                <span className={styles.navBlogDescription}>テストブログ1へ遷移する。</span>
                <p className={styles.navBlogDate}>2022.04.01</p>
              </div>
            </Link>
          </div>
          <div>
            <Link href={`/`}>
              <div className={styles.navContent}>
                {/* TODO Webハンズオンの画像を正式なものに差し替え */}
                <Image src={"/images/background.jpg"} width={440} height={260} objectFit="cover" layout={"fixed"} priority={true} alt={"Webハンズオンのイメージ画像"} className={styles.navImage} />
                <span className={styles.navBlogDescription}>テストブログ1へ遷移する。</span>
                <p className={styles.navBlogDate}>2022.04.01</p>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default popularBlogBanner
