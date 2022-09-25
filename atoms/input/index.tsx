import React from "react";

interface Props {
  placeholder?: string;
  onChange?(): any;
  value?: any;
  name?: string;
  type?: string;
  className?: any;
  width?: string;
  height?: string;
}

const Input = ({
  placeholder,
  onChange,
  value,
  name,
  type,
  className,
  width,
  height,
}: Props): JSX.Element => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      type={type}
      className={className}
      style={{
        width: `${width}`,
        height: `${height}`,
      }}
    />
  );
};

export default React.memo(Input);
