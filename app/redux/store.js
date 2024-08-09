import { createStore } from 'redux';

// Estado inicial
const initialState = {
  count: 0,
};

// Reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Crea el store
const store = createStore(counterReducer);

export default store;
