import React from 'react';

type SquareProps = {
  letter: string;
};

const Square: React.FC<SquareProps> = ({ letter }) => (
  <div className="square">{letter}</div>
);

export default Square;
