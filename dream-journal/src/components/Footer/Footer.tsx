import { FormEvent, useContext, useRef } from "react";

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
  const formRef = useRef<HTMLFormElement>(null);

  const openButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  const cancelButtonClickHandler = (): void => {
    dialogRef.current?.close();
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const date = formData.get("date") as string;
    const vibe = formData.get("vibe") as Vibe;

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
        <form
          ref={formRef}
          className={styles.content}
          onSubmit={formSubmitHandler}
        >
          <div className={styles.title}>New Dream</div>
          <Input name="title" placeholder="Input your title..." />
          <TextArea name="content" placeholder="Input your content..." />
          <DateInput name="date" />
          <VibeInput name="vibe" />
          <div className={styles.actions}>
            <Button
              type="button"
              variant="outlined"
              size="small"
              onClick={cancelButtonClickHandler}
            >
              Cancel
            </Button>
            <Button type="submit" size="small">
              Create
            </Button>
          </div>
        </form>
      </dialog>
    </footer>
  );
}

export default Footer;
