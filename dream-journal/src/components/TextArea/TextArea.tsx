import { forwardRef } from "react";

import styles from "./TextArea.module.css";

type Props = {
  placeholder?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, Props>(function (
  { placeholder },
  ref,
) {
  return (
    <div className={styles["text-area"]}>
      <textarea ref={ref} rows={3} placeholder={placeholder} />
    </div>
  );
});

export default TextArea;
