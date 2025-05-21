import { useState } from "react";
import "./styles.css";

function Square() {
  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

function PokeDetails() {
  return (
    // <div>PokeDetails</div>
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
export default PokeDetails;
