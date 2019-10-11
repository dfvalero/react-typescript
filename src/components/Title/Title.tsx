import * as React from 'react';

interface ITitleProps {
    children: string;
}

const Title = ({ children }: ITitleProps) => {
  return (
      <h1>{children}</h1>
  );
};

export default Title;