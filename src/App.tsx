import { useReducer } from 'react';
import reducer from './reducer';

export type calculator = {
  currentOperand: string | number;
  previousOperand: string | number;
  operation: string;
};

export const initialState: calculator = {
  currentOperand: '',
  previousOperand: '',
  operation: '',
};
export type ACTIONS = {
  type:
    | 'STORE_CURRENT_OPERAND'
    | 'SELECT_OPERATION'
    | 'EVALUATE'
    | 'DELETE_NUMBER';
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

  const selectOperation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const input = e.currentTarget.textContent as string;

    dispatch({ type: 'SELECT_OPERATION', payload: input });
  };

  const evaluate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch({ type: 'EVALUATE' });
  };

  const deleteNumber = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch({ type: 'DELETE_NUMBER' });
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="previous-operand">
          {state.operation} {state.previousOperand}
        </div>
        <div className="current-operand">{state.currentOperand}</div>
      </div>
      <div className="numbers-operations">
        <div className="clear">clear</div>
        <div className="delete" onClick={deleteNumber}>
          delete
        </div>
        <div className="number" onClick={storeCurrentOperand}>
          7
        </div>
        <div className="number" onClick={storeCurrentOperand}>
          8
        </div>
        <div className="number" onClick={storeCurrentOperand}>
          9
        </div>
        <div className="operation" onClick={selectOperation}>
          x
        </div>
        <div className="number" onClick={storeCurrentOperand}>
          4
        </div>
        <div className="number" onClick={storeCurrentOperand}>
          5
        </div>
        <div className="number" onClick={storeCurrentOperand}>
          6
        </div>
        <div className="operation" onClick={selectOperation}>
          -
        </div>
        <div className="number" onClick={storeCurrentOperand}>
          1
        </div>
        <div className="number" onClick={storeCurrentOperand}>
          2
        </div>
        <div className="number" onClick={storeCurrentOperand}>
          3
        </div>
        <div className="operation" onClick={selectOperation}>
          +
        </div>

        <div className="number dot" onClick={storeCurrentOperand}>
          .
        </div>
        <div className="operation op-equal" onClick={evaluate}>
          =
        </div>
        <div className="number num-zero" onClick={storeCurrentOperand}>
          0
        </div>
        <div className="operation operation-divide" onClick={selectOperation}>
          /
        </div>
      </div>
    </div>
  );
}

export default App;
