import { ACTIONS, calculator } from './App';

const reducer = (state: calculator, action: ACTIONS): any => {
  if (action.type === 'STORE_CURRENT_OPERAND') {
    const input = action.payload as string;

    return {
      ...state,
      currentOperand: state.currentOperand + input,
    };
  }

  return { ...state };
};

export default reducer;
