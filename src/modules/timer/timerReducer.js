import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import timerActions from './timerActions';



const valueReducer = createReducer(0, {
  [timerActions.increment]: (state, action) => state + action.payload,
  [timerActions.decrement]: (state, action) => state - action.payload < 0 ? state : state - action.payload,
});

const stepReducer = createReducer(5, {
  [timerActions.changeStep]: (state, action) => { return action.payload.step },
});


// import { combineReducers } from 'redux';
// import { INCREMENT, DECREMENT, CHANGE_STEP } from './timerTypes';

// // const increment = (state, value) => { state + value };

// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case INCREMENT:
//       // return increment(state, payload.value);
//       return state + payload.value;

//     case DECREMENT:
//       return state - payload.value < 0 ? state : state - payload.value;

//     default:
//       return state;
//   }
// };

// const stepReducer = (state = 5, { type, payload }) => {
//   switch (type) {
//     case CHANGE_STEP:
//       return payload.step;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
