import React from 'react';
import Square from './square';
import './tape.css';

type TapeProps = {
  tape: string[];
};

const Tape: React.FC<TapeProps> = ({ tape }) => (
  <div className="tape">
    <div className="tape-content">
      {tape.map((letter, index) => (
        <Square key={index} letter={letter} />
      ))}
    </div>
    <div className="overlaid-container">
      <div className="overlaid-div"></div>
    </div>
  </div>
);

export default Tape;
