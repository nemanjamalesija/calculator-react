import { ACTIONS, calculator } from './App';

const addition = (a: number, b: number) => {
  return b + a;
};

const subtract = (a: number, b: number) => {
  return b - a;
};

const multiply = (a: number, b: number) => {
  return b * a;
};

const divide = (a: number, b: number) => {
  return b / a;
};

const evaluate = (operation: string, a: number, b: number) => {
  if (operation === '+') {
    return addition(a, b);
  }
  if (operation === '-') {
    return subtract(a, b);
  }
  if (operation === 'x') {
    return multiply(a, b);
  }
  if (operation === '/') {
    if (a === 0) {
      {
        alert("You can't divide by 0");
        return '';
      }
    }
    return divide(a, b);
  }
};

const reducer = (state: calculator, action: ACTIONS): any => {
  const { type, payload } = action;

  if (type === 'STORE_CURRENT_OPERAND') {
    const input = payload as string;

    if (input === '.' && String(state.currentOperand).includes('.'))
      return { ...state };

    if (input === '0' && state.currentOperand === '0') return { ...state };

    if (
      String(state.currentOperand).includes('0') &&
      String(state.currentOperand).length === 1
    )
      return { ...state, currentOperand: input };

    if (
      (state.currentOperand && !state.previousOperand && state.operation) ||
      state.currentOperand === 0
    ) {
      const prevOperand = state.currentOperand;
      const currOperand = '';

      return {
        ...state,
        currentOperand: currOperand + input,
        previousOperand: prevOperand,
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

      if (state.operation === '/') {
        if (state.currentOperand === '0') {
          alert("You can't divide by 0");
          result = '';
          return {
            ...state,
            currentOperand: result,
            previousOperand: '',
            operation: payload,
          };
        }
      }
      result = evaluate(state.operation, currentOprandUpdate, prevOprandUpdate);

      return {
        ...state,
        currentOperand: result,
        previousOperand: '',
        operation: payload,
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

  if (type === 'EVALUATE') {
    const currentOprandUpdate = Number(state.currentOperand);
    const prevOprandUpdate = Number(state.previousOperand);

    let result;

    if (state.operation === '/') {
      if (state.currentOperand === '0') {
        alert("You can't divide by 0");
        result = '';
        return {
          ...state,
          currentOperand: result,
          previousOperand: '',
          operation: payload,
        };
      }
    }
    result = evaluate(state.operation, currentOprandUpdate, prevOprandUpdate);

    return {
      ...state,
      currentOperand: result,
      previousOperand: '',
      operation: payload,
    };
  }

  return { ...state };
};

export default reducer;
