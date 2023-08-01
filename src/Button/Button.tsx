import * as React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

const BUTTON_NAME = "ButtonIcon";

const BUTTON: React.ElementType = "button";
type ButtonElement = React.ElementRef<typeof BUTTON>;
type NativeButtonProps = React.ComponentPropsWithoutRef<typeof BUTTON>;

interface ButtonProps extends NativeButtonProps {}

const Button = React.forwardRef<ButtonElement, ButtonProps>(
  ({ children, className, disabled, ...props }, ref) => {
    return (
      <button
        className={clsx(styles.root, styles.button)}
        ref={ref}
        data-disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = BUTTON_NAME;

export { Button };
export type { ButtonProps };
