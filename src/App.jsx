import React, { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('');
  const [prevNumber, setPrevNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [reset, setReset] = useState(false);

  const handleNumberClick = (number) => {
    if (reset) {
      setDisplay(number.toString());
      setCurrentNumber(number.toString());
      setReset(false);
    } else {
      if (display === '0') {
        setDisplay(number.toString());
      } else {
        setDisplay(display + number.toString());
      }
      setCurrentNumber(currentNumber + number.toString());
    }
  };

  const handleOperatorClick = (op) => {
    if (operator) {
      calculate();
    }
    setPrevNumber(parseFloat(display));
    setCurrentNumber('');
    setOperator(op);
    setDisplay(display + ' ' + op + ' ');
  };

  const handleEqualClick = () => {
    calculate();
    setReset(true);
  };

  const calculate = () => {
    if (operator && currentNumber !== '') {
      let result;
      const current = parseFloat(currentNumber);
      switch (operator) {
        case '+':
          result = prevNumber + current;
          break;
        case '-':
          result = prevNumber - current;
          break;
        case '*':
          result = prevNumber * current;
          break;
        case '/':
          result = prevNumber / current;
          break;
        default:
          break;
      }
      setDisplay(result.toString());
      setCurrentNumber('');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentNumber('');
    setPrevNumber(null);
    setOperator(null);
    setReset(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="bg-gray-200 p-4 rounded-lg mb-4 w-60">
        <div className="text-2xl text-right mb-2">{display}</div>
        <div className="grid grid-cols-4 gap-2">
          <button
            className="col-span-3 bg-gray-300 text-lg rounded-lg p-2"
            onClick={handleClear}
          >
            AC
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleOperatorClick('/')}
          >
            /
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleNumberClick(7)}
          >
            7
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleNumberClick(8)}
          >
            8
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleNumberClick(9)}
          >
            9
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleOperatorClick('*')}
          >
            *
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleNumberClick(4)}
          >
            4
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleNumberClick(5)}
          >
            5
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleNumberClick(6)}
          >
            6
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleOperatorClick('-')}
          >
            -
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleNumberClick(1)}
          >
            1
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleNumberClick(2)}
          >
            2
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleNumberClick(3)}
          >
            3
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleOperatorClick('+')}
          >
            +
          </button>
          <button
            className="col-span-2 bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleNumberClick(0)}
          >
            0
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={() => handleNumberClick('.')}
          >
            .
          </button>
          <button
            className="bg-gray-300 text-lg rounded-lg p-2"
            onClick={handleEqualClick}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
