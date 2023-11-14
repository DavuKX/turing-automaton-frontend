import React from 'react';

type SquareProps = {
  letter: string;
};

const Square: React.FC<SquareProps> = ({ letter }) => (
  <div className="square" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', width: '50px', border: '1px solid black' }}>
    {letter}
  </div>
);

export default Square;
