import Head from "next/head";
import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const finalWords = "Full Stack | MERNstack | JAMstack developer";
  // const [finalWords, setFinalWords] = useState("");
  // setTimeout(() => {
  //   setFinalWords("Full Stack | MERNstack | JAMstack developer");
  // }, 12000);

  return (
    <div className={styles.container}>
      <Head>
        <title>Merrill Koshy Thomas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Merrill Koshy Thomas</h1>

        <a className={styles.circle}>
          <img
            height="128"
            width="128"
            src="/profile.jpg"
            alt="Merrill Koshy Thomas"
          />
        </a>
        <div className={` bg-white`}>
          <div className=" p-t-2 p-b-2">
            <h1 className={`${styles.headBoard} p-t-2 m-b-3`}>
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
              <a href="" className={styles.tagLine}>
                Stackin' it up since 2016.
              </a>
            </h6>
          </blockquote>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
