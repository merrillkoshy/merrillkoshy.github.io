import Head from "next/head";

import SmoothScroll from "../components/SmoothScroll";
import Section from "../components/Section";
import styles from "../styles/Home.module.css";

export default function Home() {
  const finalWords = "Full Stack | MERNstack | JAMstack developer";
  const Intro = () => {
    return (
      <>
        <h1 className={styles.title}>Merrill Koshy Thomas</h1>

        <a className={styles.circle}>
          <img
            height="auto"
            width="100%"
            src="/profile.png"
            alt="Merrill Koshy Thomas"
          />
        </a>
        <div className={` bg-white`}>
          <div className=" p-t-2 p-b-2">
            <h1 className={`${styles.headBoard} ml-5 mt-5 pt-2 pb-2`}>
              <a className={styles.regular} href="">
                I'm a{" "}
                <span className={styles.reveal} text={finalWords}>
                  {finalWords}
                </span>
                <br />
                <span className={styles.typing_words}>
                  <span className={styles.word} text="Full Stack Developer">
                    Full Stack Developer
                  </span>
                  <span className={styles.word} text="MERNstack Developer">
                    MERNstack Developer
                  </span>
                  <span className={styles.word} text="JAMstack Developer">
                    JAMstack Developer
                  </span>
                </span>
              </a>
            </h1>
          </div>
        </div>

        <div className="col-md-3 p-t-2 p-b-2">
          <blockquote className="blockquote">
            <h6 className="text-xs-right small">
              <a className={styles.tagLine}>Stackin' it up since 2016.</a>
            </h6>
          </blockquote>
        </div>
      </>
    );
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Merrill Koshy Thomas</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={styles.main}>
        <Intro />
        {/* <Section content={<Intro />} /> */}
        {/* <Section flexDirection="row" />
          <Section flexDirection="row-reverse" /> */}
        <div className="d-flex flex-column">
          <span
            className="d-flex flex-row"
            style={{
              alignSelf: "center",
              justifyContent: "center",
              textAlign: "center",
              flexWrap: "wrap",
            }}
          >
            <a className={styles.regular}> My Projects</a>
          </span>
          {/* <SmoothScroll> */}
          <div
            className="d-flex flex-row"
            style={{
              alignSelf: "center",
              justifyContent: "center",
              textAlign: "center",
              flexWrap: "wrap",
            }}
          >
            <div className={`d-flex flex-row m-5 ${styles.displayWebsite}`}>
              <img
                src="/projects/gmr.png"
                className={styles.displayConfigWebsite}
              />
            </div>
            <div className={`d-flex flex-row m-5 ${styles.displayApp}`}>
              <img
                src="/projects/gmrapp.png"
                className={styles.displayConfigApp}
              />
            </div>
            <div className={`d-flex flex-row m-5 ${styles.displayWebsite}`}>
              <img
                src="/projects/sk.png"
                className={styles.displayConfigWebsite}
              />
            </div>
            <div className={`d-flex flex-row m-5 ${styles.displayApp}`}>
              <img
                src="/projects/dtapp.png"
                className={styles.displayConfigApp}
              />
            </div>
            <div className={`d-flex flex-row m-5 ${styles.displayApp}`}>
              <img
                src="/projects/dsapp.png"
                className={styles.displayConfigApp}
              />
            </div>
            <div className={`d-flex flex-row m-5 ${styles.displayWebsite}`}>
              <img
                src="/projects/ds.png"
                className={styles.displayConfigWebsite}
              />
            </div>
            <div className={`d-flex flex-row m-5 ${styles.displayWebsite}`}>
              <img
                src="/projects/dot10.png"
                className={styles.displayConfigWebsite}
              />
            </div>
            <div className={`d-flex flex-row m-5 ${styles.displayWebsite}`}>
              <img
                src="/projects/dldxb.png"
                className={styles.displayConfigWebsite}
              />
            </div>
            <div className={`d-flex flex-row m-5 ${styles.displayWebsite}`}>
              <img
                src="/projects/tls.png"
                className={styles.displayConfigWebsite}
              />
            </div>
            <div className={`d-flex flex-row m-5 ${styles.displayWebsite}`}>
              <img
                src="/projects/ariana.png"
                className={styles.displayConfigWebsite}
              />
            </div>
            <div className={`d-flex flex-row m-5 ${styles.displayWebsite}`}>
              <img
                src="/projects/julian.png"
                className={styles.displayConfigWebsite}
              />
            </div>
            <div className={`d-flex flex-row m-5 ${styles.displayWebsite}`}>
              <img
                src="/projects/bdb.png"
                className={styles.displayConfigWebsite}
              />
            </div>
            <div className={`d-flex flex-row m-5 ${styles.displayWebsite}`}>
              <img
                src="/projects/marina.png"
                className={styles.displayConfigWebsite}
              />
            </div>
            <div className={`d-flex flex-row m-5 ${styles.displayWebsite}`}>
              <img
                src="/projects/gargash.png"
                className={styles.displayConfigWebsite}
              />
            </div>
          </div>
          {/* </SmoothScroll> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          &nbsp;
          {` most of the time`}
        </a>
      </footer>
    </div>
  );
}
