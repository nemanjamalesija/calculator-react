import { ACTIONS, calculator } from './App';

const reducer = (state: calculator, action: ACTIONS): any => {
  const { type, payload } = action;

  if (type === 'STORE_CURRENT_OPERAND') {
    const input = payload as string;

    return {
      ...state,
      currentOperand: state.currentOperand + input,
    };
  }

  return { ...state };
};

export default reducer;
