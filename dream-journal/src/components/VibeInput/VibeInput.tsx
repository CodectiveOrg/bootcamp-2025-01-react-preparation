import { ComponentProps, forwardRef } from "react";

import clsx from "clsx";

import styles from "./VibeInput.module.css";

type Props = Omit<ComponentProps<"select">, "ref">;

const VibeInput = forwardRef<HTMLSelectElement, Props>(function (
  { className, ...otherProps },
  ref,
) {
  return (
    <div className={clsx(styles["vibe-input"], className)}>
      <select ref={ref} {...otherProps}>
        <option value="good">😃 It was a good dream</option>
        <option value="bad">😢 It was a bad dream</option>
      </select>
    </div>
  );
});

export default VibeInput;
