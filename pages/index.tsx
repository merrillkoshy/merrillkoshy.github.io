import React from "react"
import { saveAs } from "file-saver"
import styles from "./Home.module.css"
import ImageCard from "../components/ImageCard"
import projectData from "../data"
import Intro from "../components/Intro"
import Footer from "../components/Footer"
import About from "../components/About"
import Meta from "../components/Meta"
import { Data } from "../types"

export default function Home() {
	// const [loaded, setLoaded] = useState(<></>)
	// useEffect(() => {
	// 	if (navigator) {
	// 		console.log(navigator)
	// 		setLoaded(<Scroller styles={styles} />)
	// 	}
	// }, [])
	const saveFile = () => {
		saveAs("/Merrill-FS-developer.pdf", "Merrill-FS-developer.pdf")
	}

	return (
		<div className={styles.container}>
			<Meta />

			<main className={styles.main}>
				<Intro styles={styles} />
				<q className="blockquote">
					Many hats. One passion. Stackin' it up since 2016.
				</q>

				<div className="d-flex flex-column py-5">
					<button className={styles.button} onClick={saveFile}>
						My Résumé
					</button>
				</div>
				<About styles={styles} />
				<div className="d-flex flex-column">
					<span className="d-flex flex-row align-self-center justify-content-center text-center flex-wrap">
						<a className={styles.regular}> My Projects</a>
					</span>
					{/* <SmoothScroll> */}
					<div className="d-flex flex-row align-self-center justify-content-center text-center flex-wrap px-5 mx-5">
						{projectData &&
							projectData?.map((data: Data, i: number) => (
								<ImageCard key={i} data={data} styles={styles} />
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
					<Footer styles={styles} />
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
	)
}
