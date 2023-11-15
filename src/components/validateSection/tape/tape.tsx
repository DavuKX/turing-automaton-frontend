import React, { useEffect, useRef } from 'react';
import Square from './square';
import './tape.css';

type TapeProps = {
  tape: string[];
};

const Tape: React.FC<TapeProps> = ({ tape }) => {
  const tapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tapeRef.current) {
      const width = tapeRef.current.scrollWidth;
      tapeRef.current.scrollLeft = width / 4.7;
    }
  }, []);

  return (
    <div className="tape" ref={tapeRef}>
      <div className="tape-content">
        {tape.map((letter, index) => (
          <Square key={index} letter={letter} />
        ))}
      </div>
      {/* <div className="overlaid-container">
        <div className="overlaid-div"></div>
      </div> */}
    </div>
  );
};

export default Tape;
