import React from "react";
import { Details } from "../types";

const Modal = ({
  show,
  setShow,
  title,
  content,
  styles,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: Details;
  styles: any;
}) => {
  let details: string[] = [];
  if (content.details.includes("•")) {
    details = content.details?.split("•");
  } else if (content.details.includes("*")) {
    details = content.details?.split("*");
  }

  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      id={title.replace(/\s/g, "")}
      tabIndex={-1}
      role="dialog"
      data-backdrop={show}
      data-show={show}
      data-focus={show}
      aria-labelledby={title}
      aria-hidden={`${show}`}
      style={{
        display: show ? "block" : "none",
        backdropFilter: show ? "brightness(0.5)" : "none",
        transition: "1s",
        overflow: "scroll",
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div
          className="modal-content"
          style={{
            borderRadius: "30px",
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setShow(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body container-fluid">
            <div
              className="d-flex flex-column align-items-center px-2"
              style={{
                overflowY: "scroll",
              }}
            >
              <div className="d-flex flex-row w-100">
                <div
                  className={`d-flex flex-column justify-content-between px-2 ${
                    styles[`display${content.type}`]
                  }`}
                >
                  <img
                    src={content.source}
                    className={styles[`displayConfig${content.type}`]}
                    alt={title}
                    loading="lazy"
                    title={title}
                  />
                </div>
                <div className="d-flex flex-column px-2 justify-content-evenly">
                  <div className="d-flex flex-row align-items-center py-2">
                    <strong className=" pr-3">Type:</strong>
                    <div className="d-flex flex-column">
                      {content.type === "App" ? "Mobile App" : content.type}
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center py-2">
                    <strong className=" pr-3">Year:</strong>
                    <div className="d-flex flex-column">{content.year}</div>
                  </div>
                  {content.url != "#" ? (
                    <div className="d-flex flex-row align-items-center py-2">
                      <strong className="text-left pr-3">View</strong>
                      <a href={content.url} target="_blank">
                        <div
                          className="d-flex flex-column text-left"
                          style={{
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                        >
                          {content.url}
                        </div>
                      </a>
                    </div>
                  ) : (
                    <span className="text-left text-danger">
                      Preview Not Available
                    </span>
                  )}
                </div>
              </div>
              <div className="flex-column mt-5">
                <strong>Description 📋</strong>
                {details.length &&
                  details?.map((detail: string) =>
                    detail != "" ? (
                      <div
                        key={Math.random()}
                        className="d-flex flex-row w-100 py-2 text-left"
                      >
                        {`🎯 ${detail}`}
                      </div>
                    ) : (
                      ""
                    )
                  )}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
