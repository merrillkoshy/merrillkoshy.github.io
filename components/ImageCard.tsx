import Link from "next/link"
import { useState } from "react"
import { Data } from "../types"
import Modal from "./Modal"

const ImageCard = ({
	data,
	styles,
}: {
	data: Data
	styles: any
}): JSX.Element => {
	const details = Object.values(data)[0]
	const title = Object.keys(data)[0]
	const [show, setShow] = useState(false)

	return (
		<div
			className={`d-flex flex-column m-5 align-items-center justify-content-center ${
				styles[`display${details.type}`]
			}`}
		>
			<Modal
				show={show}
				setShow={setShow}
				title={title}
				content={details}
				styles={styles}
			/>

			{details.source ? (
				// <Link href={details[3]}>
				<div
					data-toggle="modal"
					data-backdrop={show}
					data-show={show}
					data-focus={show}
					data-target={`#${title.replace(/\s/g, "")}`}
					onClick={() => {
						setShow(true)
					}}
					style={{
						cursor: "pointer",
					}}
				>
					<img
						src={details.source}
						className={styles[`displayConfig${details.type}`]}
					/>
				</div>
			) : (
				// </Link>
				""
			)}

			<div
				data-toggle="modal"
				data-backdrop={show}
				data-show={show}
				data-focus={show}
				data-target={`#${title.replace(/\s/g, "")}`}
				onClick={() => {
					setShow(true)
				}}
				style={{
					cursor: "pointer",
				}}
			>
				<a className={`my-3  ${styles.namePlates}`}>
					{`${title} | ${details.year}`}
				</a>
			</div>
		</div>
	)
	// }
}
export default ImageCard
