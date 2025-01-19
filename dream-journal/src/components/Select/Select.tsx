import { ReactNode, forwardRef, ComponentProps } from "react";

import clsx from "clsx";

import styles from "./Select.module.css";

type Props = Omit<ComponentProps<"select">, "ref"> & {
  suffixIcon?: ReactNode;
};

const Select = forwardRef<HTMLSelectElement, Props>(function (
  { className, children, ...otherProps },
  ref,
) {
  return (
    <div className={clsx(styles["select"], className)}>
      <select ref={ref} {...otherProps}>
        {children}
      </select>
    </div>
  );
});

export default Select;
