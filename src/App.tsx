import { useReducer } from 'react';
import './App.css';
import reducer from './reducer';

export type calculator = {
  currentOperand: string | number;
  previousOperand: string | number;
};

export const initialState: calculator = {
  currentOperand: '',
  previousOperand: '',
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div className="App"></div>;
}

export default App;
