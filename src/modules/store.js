import { configureStore } from '@reduxjs/toolkit';
import rootModule from './rootModule';

import { loadState, saveState } from "../utils/storage";

const store = configureStore({
  reducer: rootModule,
  preloadedState: loadState(),
});


// store.subscribe(() => saveState(store.getState()));
store.subscribe(() => saveState({ theme: store.getState().theme }));

export default store;
