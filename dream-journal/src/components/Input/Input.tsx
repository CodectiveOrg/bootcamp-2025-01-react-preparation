import { ReactNode } from "react";

import styles from "./Input.module.css";

type Props = {
  placeholder?: string;
  suffixIcon?: ReactNode;
};

function Input({ placeholder, suffixIcon }: Props) {
  return (
    <div className={styles["search-box"]}>
      <input type="text" placeholder={placeholder} />
      {suffixIcon}
    </div>
  );
}

export default Input;
