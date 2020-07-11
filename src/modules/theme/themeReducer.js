// import { combineReducers } from 'redux';
import { createReducer, combineReducers } from '@reduxjs/toolkit';

import themeActions from './themeActions';

// const toggleTheme = (state, action) => {
//   return {
//     ...state,
//     themeConfig: state.themeConfig === 'ligth' ? 'dark' : 'ligth',
//     isChecked: !state.isChecked,
//   }
// }

// const theme = createReducer({ themeConfig: "ligth", isChecked: false }, {
//   [themeActions.toggleTheme]: toggleTheme,
// })



const toggleTheme = (state) => {
  return {
    ...state,
    themeConfig: state.themeConfig === 'ligth' ? 'dark' : 'ligth',
  }
}

const toggleChecked = (state) => {
  return {
    ...state,
    isChecked: !state.isChecked,
  }
}

const themeConfig = createReducer({ themeConfig: "ligth" }, {
  [themeActions.toggleTheme]: toggleTheme,
})

const isChecked = createReducer({ isChecked: false }, {
  [themeActions.toggleTheme]: toggleChecked,
})

export default combineReducers({
  themeConfig,
  isChecked,
});
