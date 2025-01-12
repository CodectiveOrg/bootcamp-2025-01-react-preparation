import { useRef } from "react";

import { v4 as uuidv4 } from "uuid";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import { Dream } from "../../types/dream.ts";

import Button from "../Button/Button.tsx";
import Input from "../Input/Input.tsx";

import styles from "./Footer.module.css";

type Props = {
  onApply: (dream: Dream) => void;
};

function Footer({ onApply }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  const openButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  const cancelButtonClickHandler = (): void => {
    dialogRef.current?.close();
  };

  const applyButtonClickHandler = (): void => {
    if (!titleRef.current?.value) {
      console.error("Title is required.");
      return;
    }

    const dream: Dream = {
      id: uuidv4(),
      title: titleRef.current?.value,
      content: "",
      vibe: "good",
    };

    onApply(dream);

    dialogRef.current?.close();
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
      <dialog ref={dialogRef}>
        <div className={styles.content}>
          <div className={styles.title}>New Dream</div>
          <Input ref={titleRef} placeholder="Input your title..." />
          <div className={styles.actions}>
            <Button
              variant="outlined"
              size="small"
              onClick={cancelButtonClickHandler}
            >
              Cancel
            </Button>
            <Button size="small" onClick={applyButtonClickHandler}>
              Apply
            </Button>
          </div>
        </div>
      </dialog>
    </footer>
  );
}

export default Footer;
