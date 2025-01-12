import { forwardRef } from "react";

import styles from "./DateInput.module.css";

const DateInput = forwardRef<HTMLInputElement>(function ({}, ref) {
  return (
    <div className={styles["date-input"]}>
      <input ref={ref} type="date" />
    </div>
  );
});

export default DateInput;
