import { FormEvent, useRef } from "react";

import { v4 as uuidv4 } from "uuid";

import Button from "../Button/Button.tsx";
import DateInput from "../DateInput/DateInput.tsx";
import Input from "../Input/Input.tsx";
import Select from "../Select/Select.tsx";
import TextArea from "../TextArea/TextArea.tsx";

import { Dream } from "../../types/dream.ts";
import { Vibe } from "../../types/vibe.ts";

import styles from "./CreateEditForm.module.css";

type Props = {
  editingDream?: Dream;
  onSubmit: (dream: Dream) => void;
  onCancel: () => void;
};

function CreateEditForm({ editingDream, onSubmit, onCancel }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  const cancelButtonClickHandler = (): void => {
    formRef.current?.reset();
    onCancel();
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
      id: editingDream?.id ?? uuidv4(),
      title,
      content,
      date: new Date(date),
      vibe,
    };

    onSubmit(dream);

    e.currentTarget.reset();
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles.title}>New Dream</div>
      <Input
        name="title"
        placeholder="Input your title..."
        defaultValue={editingDream?.title}
      />
      <TextArea
        name="content"
        placeholder="Input your content..."
        defaultValue={editingDream?.content}
      />
      <DateInput
        name="date"
        defaultValue={editingDream?.date.toISOString().split("T")[0]}
      />
      <Select name="vibe" variant="outlined" defaultValue={editingDream?.vibe}>
        <option value="good">😃 It was a good dream</option>
        <option value="bad">😢 It was a bad dream</option>
      </Select>
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
          {editingDream ? "Edit" : "Create"}
        </Button>
      </div>
    </form>
  );
}

export default CreateEditForm;
