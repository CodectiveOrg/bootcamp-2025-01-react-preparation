import { ComponentProps, forwardRef } from "react";

import clsx from "clsx";

import styles from "./DateInput.module.css";

type Props = Omit<ComponentProps<"input">, "ref" | "type">;

const DateInput = forwardRef<HTMLInputElement, Props>(function (
  { className, ...otherProps },
  ref,
) {
  return (
    <div className={clsx(styles["date-input"], className)}>
      <input ref={ref} type="date" {...otherProps} />
    </div>
  );
});

export default DateInput;
