import { saveAs } from "file-saver";
import { useEffect } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import ImageCard from "../components/ImageCard";
import Intro from "../components/Intro";
import Meta from "../components/Meta";
import projectData from "../data";
import { Data } from "../types";
import styles from "./home.module.css";

import * as ga from "../lib/ga";

export default function Home() {
  useEffect(() => {
    if (typeof window) {
      ga.pageview(window.location.href);
    }
  }, []);
  const saveFile = () => {
    saveAs("/Merrill-FS-developer.pdf", "Merrill-FS-developer.pdf");
  };

  return (
    <div className={styles.container}>
      <Meta />

      <main className={styles.main}>
        <Intro />
        <q className="blockquote">
          Many hats. One passion. Stackin' it up since 2016.
        </q>

        <div className="d-flex flex-column py-5">
          <button className={styles.button} onClick={saveFile}>
            My Résumé
          </button>
        </div>
        <About />
        <div className="d-flex flex-column">
          <span className="d-flex flex-row align-self-center justify-content-center text-center flex-wrap">
            <a className={styles.regular}>My Projects</a>
          </span>
          {/* <SmoothScroll> */}
          <div className="d-flex flex-row align-self-center justify-content-center text-center flex-wrap px-5 mx-5">
            {projectData &&
              projectData?.map((data: Data, i: number) => (
                <ImageCard key={i} data={data} />
              ))}
          </div>
          {/* </SmoothScroll> */}
        </div>
        <div className="d-flex flex-column mt-3 px-5">
          <div className="d-flex flex-column mt-3">
            <aside>
              Ah, I wish I could show you all as some of them are under lock and
              key 🤐{" "}
            </aside>
            <aside>Let's meet up, I can explain what I did for the 👽 </aside>
          </div>
          <Footer />
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          &nbsp;
          {`, most of the time 😁`}
        </a>
      </footer>
    </div>
  );
}
