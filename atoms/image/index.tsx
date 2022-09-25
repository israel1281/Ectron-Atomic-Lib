import React from "react";
import Image from "next/image";

interface Props {
  src?: string | any;
  width?: string;
  height?: string;
  onClick?(): void | any;
}

const Img = ({ src, width, height, onClick }: Props): JSX.Element => {
  return (
    <Image src={src} alt="" width={width} height={height} onClick={onClick} />
  );
};

export default React.memo(Img);
