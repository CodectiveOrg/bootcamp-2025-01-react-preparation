import { forwardRef } from "react";

import styles from "./VibeInput.module.css";

const VibeInput = forwardRef<HTMLSelectElement>(function ({}, ref) {
  return (
    <div className={styles["vibe-input"]}>
      <select ref={ref}>
        <option value="good">😃 It was a good dream</option>
        <option value="bad">😢 It was a bad dream</option>
      </select>
    </div>
  );
});

export default VibeInput;
