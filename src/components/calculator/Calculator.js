import React, { useMemo, useState } from "react";
import { addDigit, applyOperation, operations } from "./helpers";

export function Calculator() {
  const [firstNum, setFirstNum] = useState("0");
  const [secNum, setSecNum] = useState("0");
  const [operation, setOperation] = useState(undefined);

  const operationSelected = useMemo(() => operation !== undefined, [operation]);

  return (
    <div>
      <p>Calculator</p>
      <p>{operationSelected ? secNum : firstNum}</p>
      <div>
        {new Array(10).fill(0).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              operationSelected
                ? setSecNum((prev) => addDigit(prev, index))
                : setFirstNum((prev) => addDigit(prev, index));
            }}
          >
            {index}
          </button>
        ))}
        {Object.values(operations).map((operationSymbol) => (
          <button
            key={operationSymbol}
            onClick={() => setOperation(operationSymbol)}
          >
            {operationSymbol}
          </button>
        ))}
        <button
          disabled={secNum ? false : true}
          onClick={() => {
            setFirstNum(applyOperation(firstNum, secNum, operation));
            setSecNum("");
            setOperation(undefined);
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}