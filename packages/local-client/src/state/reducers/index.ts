import { combineReducers } from 'redux';
import CellsReducer from './cellsReducer';
import bundlesReducer from './bundlesReducer';

const reducer = combineReducers({
  cells: CellsReducer,
  bundles: bundlesReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
