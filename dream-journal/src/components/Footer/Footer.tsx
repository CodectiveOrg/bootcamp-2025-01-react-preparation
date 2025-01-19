import { useContext } from "react";

import Button from "../Button/Button.tsx";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import { ModalContext } from "../../providers/ModalProvider.tsx";

import styles from "./Footer.module.css";

function Footer() {
  const { openModal } = useContext(ModalContext);

  const openButtonClickHandler = (): void => {
    openModal();
  };

  return (
    <footer className={styles.footer}>
      <Button
        className={styles.button}
        shape="circle"
        sameWidthHeight
        onClick={openButtonClickHandler}
      >
        <MingcuteAddLine />
      </Button>
    </footer>
  );
}

export default Footer;
