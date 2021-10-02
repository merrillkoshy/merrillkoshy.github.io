import Head from "next/head";
import Link from "next/link";
import SmoothScroll from "../components/SmoothScroll";
import Section from "../components/Section";
import styles from "../styles/Home.module.css";
import ImageCard from "../components/ImageCard";
import projectData from "../data/data.json";

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
					<h6 className="text-xs-right small">
						<span className={styles.tagLine}>
							<q className="blockquote">Stackin' it up since 2016.</q>
						</span>
					</h6>
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

				<span
					className="d-flex flex-row align-self-center justify-content-start flex-wrap py-5 mt-5"
					width={"100%"}
				>
					<div className="container p-5">
						<p
							style={{
								fontStyle: "italic",
								textAlign: "justify",
							}}
						>
							<strong>Hi!</strong> I'm an Engineering graduate, self-taught
							frontend developer, educated with backend development and
							integrated APIs and NoSQL databases. As a full stack JavaScript
							developer, I have deployed over 20 projects over a course of 5
							years with ReactJS, NextJS, NodeJS, ExpressJS and MongoDB using
							Redux & Redis, clean code with TypeScript, Jest & Enzyme, CI/CD
							with TravisCI, Github & Vercel, authentication with JWT,
							Cross-Platform app development using React Native and Firebase.
						</p>
						<a className={styles.regular}> {`<{sw?.dev}/> to me:`}</a>
						<ul>
							<li className={styles.listedMe}>I believe in JAMstack</li>
							<li className={styles.listedMe}>
								Every aspect of Software Development should be modular. Thanks
								D3!
							</li>
							<li className={styles.listedMe}>
								{`Inventing the Wheel ⏭️ `}&#160;{`NextJS`}
							</li>
							<li className={styles.listedMe}>
								{`VSCode +`}
								&#160;
								{` TS + `}
								&#160;
								{`☕ = `}
								&#160;
								{`❤️`}
							</li>
							<li className={styles.listedMe}>
								Bye Kotlin, Swift. Invest in cross-platform JS !
							</li>
						</ul>
					</div>
				</span>

				<div className="d-flex flex-column">
					<span className="d-flex flex-row align-self-center justify-content-center text-center flex-wrap">
						<a className={styles.regular}> My Projects</a>
					</span>
					{/* <SmoothScroll> */}
					<div className="d-flex flex-row align-self-center justify-content-center text-center flex-wrap">
						{projectData &&
							projectData?.map((data, i) => {
								return <ImageCard key={i} data={data} />;
							})}
						<div className="d-flex flex-column mt-3">
							<div className="d-flex flex-column  mt-3">
								<aside>
									Ah, I wish I could show you all as some of them are under lock
									and key 🤐{" "}
								</aside>
								<aside>
									Let's meet up, I can explain what I did for the 👽{" "}
								</aside>
							</div>
							<div className="d-flex flex-column mt-3 align-items-left">
								<Link href="https://www.linkedin.com/in/merrill-koshy-thomas/">
									<a
										style={{
											fontSize: "30px",
										}}
									>
										<span
											style={{
												color: "#004182",
											}}
										>
											<strong>LinkedIn</strong>
										</span>{" "}
										: /in/merrill-koshy-thomas
									</a>
								</Link>
								<Link href="mailto:merrillkoshy@gmail.com">
									<a
										style={{
											fontSize: "30px",
										}}
									>
										<span
											style={{
												color: "#de5246",
											}}
										>
											<strong>Gmail</strong>
										</span>{" "}
										: merrillkoshy@gmail.com
									</a>
								</Link>
							</div>
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
					{`, most of the time 😁`}
				</a>
			</footer>
		</div>
	);
}
