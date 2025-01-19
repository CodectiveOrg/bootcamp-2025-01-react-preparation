import { ComponentProps, forwardRef } from "react";

import clsx from "clsx";

import styles from "./Select.module.css";

type Variant = "solid" | "outlined";

type Props = Omit<ComponentProps<"select">, "ref"> & {
  variant?: Variant;
};

const Select = forwardRef<HTMLSelectElement, Props>(function (
  { variant = "solid", className, children, ...otherProps },
  ref,
) {
  return (
    <div className={clsx(styles["select"], styles[variant], className)}>
      <select ref={ref} {...otherProps}>
        {children}
      </select>
    </div>
  );
});

export default Select;
