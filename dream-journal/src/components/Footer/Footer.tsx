import { useRef } from "react";

import { v4 as uuidv4 } from "uuid";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import { Dream } from "../../types/dream.ts";

import Button from "../Button/Button.tsx";
import Input from "../Input/Input.tsx";

import styles from "./Footer.module.css";
import TextArea from "../TextArea/TextArea.tsx";
import DateInput from "../DateInput/DateInput.tsx";
import VibeInput from "../VibeInput/VibeInput.tsx";

type Props = {
  onApply: (dream: Dream) => void;
};

function Footer({ onApply }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const vibeRef = useRef<HTMLSelectElement>(null);

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

    if (!contentRef.current?.value) {
      console.error("Content is required.");
      return;
    }

    if (!dateRef.current?.value) {
      console.error("Date is required.");
      return;
    }

    if (!vibeRef.current?.value) {
      console.error("Vibe is required.");
      return;
    }

    const dream: Dream = {
      id: uuidv4(),
      title: titleRef.current?.value,
      content: contentRef.current?.value,
      date: new Date(dateRef.current?.value),
      vibe: vibeRef.current?.value as "good" | "bad",
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
          <TextArea ref={contentRef} placeholder="Input your content..." />
          <DateInput ref={dateRef} />
          <VibeInput ref={vibeRef} />
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
