import styles from "pages/home.module.css";
import ReactTypingEffect from "react-typing-effect";

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
      <div className={`bg-white`}>
        <div className=" p-t-2 p-b-2">
          <h1 className={`${styles.headBoard} ml-5 mt-5 pt-2 pb-2`}>
            <a className={styles.regular} href="">
              <span className={styles.typing_words}>
                <ReactTypingEffect
                  typingDelay={500}
                  speed={50}
                  eraseDelay={500}
                  eraseSpeed={50}
                  text={[
                    "Full Stack Developer",
                    "MERNstack Developer",
                    "JAMstack Developer",
                    "Mobile Apps Developer",
                    "Graphic Designer",
                    "Strategist",
                    "Passionate coder",
                  ]}
                  staticText="I'm a 👨🏻‍💻 "
                />
              </span>
            </a>
          </h1>
        </div>
      </div>
    </>
  );
};
export default Intro;
