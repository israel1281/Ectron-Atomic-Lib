import React from "react";

interface Props {
  children?: any;
  icon?: any;
  loading?: boolean
  width?: string;
  height?: string;
  className?: any;
  onClick?(): void | any;
}

const Button = ({
  children,
  icon,
  className,
  width,
  height,
  loading,
  onClick
}: Props): JSX.Element => {
  return (
    <button
      className={className}
      style={{
        width: `${width}`,
        height: `${height}`,
      }}
      onClick={onClick}
    >
      {loading === true ? icon + children : children}
    </button>
  );
};

export default Button;
