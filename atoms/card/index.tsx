import React from "react";

interface Props {
  children?: any;
}

const Card = ({ children }: Props): JSX.Element => {
  return <div>{children}</div>;
};

export default React.memo(Card);
