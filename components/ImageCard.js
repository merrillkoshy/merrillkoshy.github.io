import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const ImageCard = ({ data }) => {
	const [datum, setDatum] = useState(null);
	useEffect(() => {
		if (typeof data === "object" && data !== null) {
			setDatum(Object.values(data)[0]);
		}
	}, []);
	if (datum == null) {
		return <div>Loading...</div>;
	}
	if (datum) {
		return (
			<div
				className={`d-flex flex-column m-5 align-items-center justify-content-center ${
					styles[`display${datum[0]}`]
				}`}
			>
				<img src={datum[1]} className={styles[`displayConfig${datum[0]}`]} />
				<Link href={datum[3]}>
					<a className={`my-3  ${styles.namePlates}`}>
						{`${Object.keys(data)} | ${datum[2]}`}
					</a>
				</Link>
			</div>
		);
	}
};
export default ImageCard;
