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

  if (type === 'SELECT_OPERATION') {
    console.log(state.currentOperand, state.previousOperand);

    const prevOperandUpdate = Number(state.currentOperand);

    if (state.currentOperand && state.previousOperand) {
      let result;
      if (payload === '+') {
        result = Number(state.currentOperand) + Number(state.previousOperand);
      }

      return { ...state, currentOperand: result, previousOperand: '' };
    }

    return {
      ...state,
      currentOperand: '',
      previousOperand: prevOperandUpdate,
    };
  }

  return { ...state };
};

export default reducer;
