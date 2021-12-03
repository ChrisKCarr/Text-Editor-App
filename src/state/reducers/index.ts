import { combineReducers } from 'redux';
import CellsReducer from './cellsReducer';

const reducer = combineReducers({
  cells: CellsReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
