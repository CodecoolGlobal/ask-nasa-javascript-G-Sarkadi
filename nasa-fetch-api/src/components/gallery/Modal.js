import React from "react";
import FormatedDate from "../FormatedDate";
import "./Modal.css";

function Modal({ setOpenModal, modalContent }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h2>
                        {modalContent.title}
                    </h2>
                    <p>
                        <FormatedDate date={modalContent.date} />
                    </p>
                </div>
                <div className="body">
                    <div className="picture">
                        <img src={modalContent.url} alt={modalContent.title} width="700px" />
                    </div>
                    <p className="explanation">{modalContent.explanation}</p>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;