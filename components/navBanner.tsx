import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from 'next/image'
import styles from '/styles/navBanner.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function navBanner() {

    const settings = {
      autoplay: true,
      dots: true,
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };

  return (
    <>
      <div className={styles.navBanner}>
        <Slider {...settings}>
          <div>
            <Link href={`/`}>
              <div className={styles.navContent}>
                {/* TODO Webハンズオンの画像を正式なものに差し替え */}
                <Image src={"/images/background.jpg"} width={440} height={260} objectFit="cover" layout={"fixed"} priority={true} alt={"Webハンズオンのイメージ画像"} className={styles.navImage} />
                <span className={styles.navTitle}>Web開発</span>
                <span className={styles.navDescription}>おしゃれなデザインのサイトを一緒に作ろう！</span>
                <div className={styles.navButton}>
                  <span>Webハンズオンはこちら</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href={`/`}>
              <div className={styles.navContent}>
                {/* TODO Webハンズオンの画像を正式なものに差し替え */}
                <Image src={"/images/background.jpg"} width={440} height={260} objectFit="cover" layout={"fixed"} priority={true} alt={"Webハンズオンのイメージ画像"} className={styles.navImage} />
                <span className={styles.navTitle}>アプリ開発</span>
                <span className={styles.navDescription}>モダンなアプリを一緒に作ろう！</span>
                <div className={styles.navButton}>
                  <span>アプリハンズオンはこちら</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href={`/`}>
              <div className={styles.navContent}>
                {/* TODO Webハンズオンの画像を正式なものに差し替え */}
                <Image src={"/images/background.jpg"} width={440} height={260} objectFit="cover" layout={"fixed"} priority={true} alt={"Webハンズオンのイメージ画像"} className={styles.navImage} />
                <span className={styles.navTitle}>音楽制作</span>
                <span className={styles.navDescription}>一緒にDTMを始めてみよう！</span>
                <div className={styles.navButton}>
                  <span>DTMハンズオンはこちら</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href={`/`}>
              <div className={styles.navContent}>
                {/* TODO Webハンズオンの画像を正式なものに差し替え */}
                <Image src={"/images/background.jpg"} width={440} height={260} objectFit="cover" layout={"fixed"} priority={true} alt={"Webハンズオンのイメージ画像"} className={styles.navImage} />
                <span className={styles.navTitle}>動画制作</span>
                <span className={styles.navDescription}>YouTuberを一緒に目指してみる？</span>
                <div className={styles.navButton}>
                  <span>動画ハンズオンはこちら</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href={`/`}>
              <div className={styles.navContent}>
                {/* TODO Webハンズオンの画像を正式なものに差し替え */}
                <Image src={"/images/background.jpg"} width={440} height={260} objectFit="cover" layout={"fixed"} priority={true} alt={"Webハンズオンのイメージ画像"} className={styles.navImage} />
                <span className={styles.navTitle}>デザイン</span>
                <span className={styles.navDescription}>デザインを知ろう！</span>
                <div className={styles.navButton}>
                  <span>デザインハンズオンはこちら</span>
                </div>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default navBanner
