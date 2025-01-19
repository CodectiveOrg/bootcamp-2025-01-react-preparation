import { useContext, useRef } from "react";

import { v4 as uuidv4 } from "uuid";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import { DreamsContext } from "../../providers/DreamsProvider.tsx";

import { Dream } from "../../types/dream.ts";
import { Vibe } from "../../types/vibe.ts";

import Button from "../Button/Button.tsx";
import DateInput from "../DateInput/DateInput.tsx";
import Input from "../Input/Input.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import VibeInput from "../VibeInput/VibeInput.tsx";

import styles from "./Footer.module.css";

function Footer() {
  const { createDream } = useContext(DreamsContext);

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

  const createButtonClickHandler = (): void => {
    const title = titleRef.current?.value;
    const content = contentRef.current?.value;
    const date = dateRef.current?.value;
    const vibe = vibeRef.current?.value as Vibe;

    if (!title) {
      console.error("Title is required.");
      return;
    }

    if (!content) {
      console.error("Content is required.");
      return;
    }

    if (!date) {
      console.error("Date is required.");
      return;
    }

    if (!vibe) {
      console.error("Vibe is required.");
      return;
    }

    const dream: Dream = {
      id: uuidv4(),
      title,
      content,
      date: new Date(date),
      vibe,
    };

    createDream(dream);

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
            <Button size="small" onClick={createButtonClickHandler}>
              Create
            </Button>
          </div>
        </div>
      </dialog>
    </footer>
  );
}

export default Footer;
