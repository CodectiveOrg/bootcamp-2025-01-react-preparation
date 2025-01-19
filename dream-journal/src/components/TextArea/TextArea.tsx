import { ComponentProps, forwardRef } from "react";

import clsx from "clsx";

import styles from "./TextArea.module.css";

type Props = Omit<ComponentProps<"textarea">, "ref" | "rows"> & {
  placeholder?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, Props>(function (
  { className, ...otherProps },
  ref,
) {
  return (
    <div className={clsx(styles["text-area"], className)}>
      <textarea ref={ref} rows={3} {...otherProps} />
    </div>
  );
});

export default TextArea;
