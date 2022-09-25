import React from "react";

interface Props {
  variant: any;
  children: any;
  size?: string;
  color?: string;
  onClick?(): void | any;
  underline?: boolean;
}

const Text = ({
  variant,
  children,
  size,
  color,
  onClick,
  underline,
}: Props): JSX.Element => {
  const style = {
    fontSize: `${size}`,
    color: `${color}`,
    textDecoration: `${underline === true ? "underline" : ""}`,
  };

  return (
    <>
      {variant === "h1" ? (
        <h1 style={style} onClick={onClick}>
          {children}
        </h1>
      ) : variant === "h3" ? (
        <h3 style={style} onClick={onClick}>
          {children}
        </h3>
      ) : (
        <small style={style} onClick={onClick}>
          {children}
        </small>
      )}
    </>
  );
};

export default React.memo(Text);
