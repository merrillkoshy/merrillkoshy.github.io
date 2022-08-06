import React from "react"

const About = ({ styles }: { styles: any }) => {
	return (
		<span className="d-flex flex-row align-self-center justify-content-start flex-wrap py-2">
			<div className="container p-5">
				<p
					style={{
						fontStyle: "italic",
						textAlign: "justify",
					}}
				>
					<strong>Hi!</strong> I'm an Engineering graduate, self-taught frontend
					developer, educated with backend development, built APIs and works
					with NoSQL databases. Having deployed{" "}
					<strong>over 20 projects</strong> as a full stack JavaScript
					developer, I have worked with primarily ReactJS, NextJS, NodeJS,
					ExpressJS and MongoDB using Redux, GraphQL & Redis, clean code with
					TypeScript, Jest & Enzyme, CI/CD with TravisCI, Github & Vercel, NPM
					packaging and component library development, authentication with JWT,
					Cross-Platform app development using React Native and Firebase, for
					the past <strong>6+ years</strong> .
				</p>
				<p
					style={{
						fontStyle: "italic",
						textAlign: "justify",
					}}
				>
					In this journey, I have worked in a small team, a startup, as a
					freelancer (an entrepreneur attempt) and in MNCs. With this varied
					experience, I have doned a lot of caps ranging from being a graphic
					designer, a 3D modeler, the guy who sets up your computer, cables and
					emails to managing the whole department and developing apps used by
					millions with the government!
				</p>
				<a className={styles.regular}> {`<{sw?.dev}/> to me:`}</a>
				<ul>
					<li className={styles.listedMe}>
						JAMstack. We choose the best tools per usecase.
					</li>
					<li className={styles.listedMe}>
						Modular. Document your thoughts to code.
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
						Going <span style={{ fontStyle: "italic" }}>React</span> Native
						rather than Native x 2.
					</li>
					<li className={styles.listedMe}>The ecstacy of being a creator</li>
				</ul>
			</div>
		</span>
	)
}
export default About
