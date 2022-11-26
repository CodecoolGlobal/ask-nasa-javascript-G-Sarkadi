import React from "react";
import FormatedDate from "../FormatedDate";
import "./Modal.css";
import Picture from "../Picture";

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
                    <Picture starData={modalContent}/>
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