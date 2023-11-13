import React from 'react';
import Square from './square';

type TapeProps = {
  tape: string[];
};

const Tape: React.FC<TapeProps> = ({ tape }) => (
  <div className="tape">
    {tape.map((letter, index) => (
      <Square key={index} letter={letter} />
    ))}
  </div>
);

export default Tape;
