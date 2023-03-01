import { useReducer } from 'react';
import reducer from './reducer';

export type calculator = {
  currentOperand: string | number;
  previousOperand: string | number;
  tempResult: number;
};

export const initialState: calculator = {
  currentOperand: '',
  previousOperand: '',
  tempResult: 0,
};
export type ACTIONS = {
  type: 'STORE_CURRENT_OPERAND';
  payload?: string;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const storeCurrentOperand = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const input = e.currentTarget.textContent as string;

    dispatch({ type: 'STORE_CURRENT_OPERAND', payload: input });
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="previous-operand"></div>
        <div className="current-operand">{state.currentOperand}</div>
      </div>
      <div className="numbers-operations">
        <div className="clear">clear</div>
        <div className="delete">delete</div>
        <div className="number">7</div>
        <div className="number">8</div>
        <div className="number">9</div>
        <div className="operation">x</div>
        <div className="number">4</div>
        <div className="number">5</div>
        <div className="number">6</div>
        <div className="operation">-</div>
        <div className="number">1</div>
        <div className="number">2</div>
        <div className="number">3</div>
        <div className="operation">+</div>
        <div className="number num-zero" onClick={storeCurrentOperand}>
          0
        </div>
        <div className="dot">.</div>
        <div className="operation op-equal">=</div>
      </div>
    </div>
  );
}

export default App;
