import { ACTIONS, calculator } from './App';

const reducer = (state: calculator, action: ACTIONS): any => {
  const { type, payload } = action;

  if (type === 'STORE_CURRENT_OPERAND') {
    const input = payload as string;

    if (state.currentOperand && !state.previousOperand) {
      const prevOperand = state.currentOperand;
      const currOperand = '';

      return {
        ...state,
        currentOperand: currOperand + input,
        previousOperand: prevOperand,
        operation: '',
      };
    }

    return {
      ...state,
      currentOperand: state.currentOperand + input,
    };
  }

  if (type === 'SELECT_OPERATION') {
    const prevOperand = state.currentOperand;

    if (state.currentOperand && state.previousOperand) {
      const currentOprandUpdate = Number(state.currentOperand);
      const prevOprandUpdate = Number(state.previousOperand);

      let result;
      if (payload === '+') {
        result = prevOprandUpdate + currentOprandUpdate;
      }
      if (payload === '-') {
        result = prevOprandUpdate - currentOprandUpdate;
      }
      if (payload === 'x') {
        result = prevOprandUpdate * currentOprandUpdate;
      }
      if (payload === '/') {
        if (state.currentOperand === '0') {
          return alert("You can't divide by 0");
        }
        result = prevOprandUpdate / currentOprandUpdate;
      }

      return {
        ...state,
        currentOperand: result,
        previousOperand: '',
        operation: '',
      };
    } else {
      return {
        ...state,
        currentOperand: '',
        previousOperand: prevOperand,
        operation: payload,
      };
    }
  }

  return { ...state };
};

export default reducer;
