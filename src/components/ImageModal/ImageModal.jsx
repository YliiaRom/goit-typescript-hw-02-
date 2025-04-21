import { useState } from "react";
import ReactModal from "react-modal";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
export default function ImageModal({ isOpen, onClose, children }) {
  // let subtitle;
  // const [modalIsOpen, setIsOpen] = useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   subtitle.style.color = "#f00";
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }
  return (
    <>
      <Modal
        isOpen={isOpen}
        overlayClassName={css.reactModal__overlay}
        className={css.reactModal__content}
        // onAfterOpen={afterOpenModal}
        onRequestClose={onClose}
        // style={customStyles}
        // contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button className={css.btnMore} onClick={onClose}>
          close
        </button>
        {children}
      </Modal>
    </>
  );
}
