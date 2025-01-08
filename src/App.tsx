import { useEffect, useState } from 'react';

import api from './api';

function App() {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const handleAChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setA(parseInt(event.target.value));
  }
  const handleBChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setB(parseInt(event.target.value));
  }

  const handleButtons = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, operation: string) => {
    event.preventDefault();
    const cb = async () => {
      const res = await api.mathOperation(a, b, operation);
      setResult(res);
    }
    cb();
    const p = document.getElementById('result') as HTMLDivElement;
    p.style.display = 'block';
  }

  return (
    <div>
      <form id='form'>
        <input className='input' type='number' placeholder='First argument' onChange={event => handleAChange(event)}></input>
        <input className="input" type='number' placeholder='Second argument' onChange={event => handleBChange(event)}></input>
        <p>Choose operation</p>
        <div id="operations">
          <button className='btn' onClick={(event) => handleButtons(event, 'addition')}>Addition</button>
          <button className='btn' onClick={(event) => handleButtons(event, 'subtraction')}>Substraction</button>
          <button className='btn' onClick={(event) => handleButtons(event, 'multiplication')}>Multiplication</button>
          <button className='btn' onClick={(event) => handleButtons(event, 'division')}>Division</button>
        </div>
      </form>
      <div id="result"> {/* Initially, the display is none*/}
        <p>Result:</p>
        <p><b>{ `${result}` }</b></p>
      </div>
    </div>
  );
}

export default App;
