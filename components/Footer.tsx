import Link from "next/link";

const Footer = () => {
  return (
    <div className="d-flex flex-column mt-5 align-items-left">
      <Link href="https://www.linkedin.com/in/merrill-koshy-thomas/">
        <div
          className="d-flex justify-content-between"
          style={{
            fontSize: "30px",
          }}
        >
          <div
            className="d-flex flex-column"
            style={{
              color: "#004182",
            }}
          >
            <strong>LinkedIn</strong>
          </div>{" "}
          <div
            className="d-flex flex-column"
            style={{
              cursor: "pointer",
            }}
          >
            merrill-koshy-thomas
          </div>
        </div>
      </Link>
      <Link href="mailto:merrillkoshy@gmail.com">
        <div
          className="d-flex justify-content-between"
          style={{
            fontSize: "30px",
          }}
        >
          <div
            className="d-flex flex-column"
            style={{
              color: "#de5246",
            }}
          >
            <strong>Gmail</strong>
          </div>{" "}
          <div
            className="d-flex flex-column"
            style={{
              cursor: "pointer",
            }}
          >
            merrillkoshy@gmail.com
          </div>
        </div>
      </Link>
      <Link href="https://github.com/merrillkoshy">
        <div
          className="d-flex justify-content-between"
          style={{
            fontSize: "30px",
          }}
        >
          <div
            className="d-flex flex-column"
            style={{
              color: "#333",
            }}
          >
            <strong>Github</strong>
          </div>{" "}
          <div
            className="d-flex flex-column"
            style={{
              cursor: "pointer",
            }}
          >
            {" "}
            merrillkoshy
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Footer;
