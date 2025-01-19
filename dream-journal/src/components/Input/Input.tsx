import { ReactNode, forwardRef } from "react";

import styles from "./Input.module.css";

type Props = {
  placeholder?: string;
  suffixIcon?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, Props>(function (
  { placeholder, suffixIcon },
  ref,
) {
  return (
    <div className={styles["input"]}>
      <input ref={ref} type="text" placeholder={placeholder} />
      {suffixIcon}
    </div>
  );
});

export default Input;
