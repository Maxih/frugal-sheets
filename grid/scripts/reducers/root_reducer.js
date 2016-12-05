import {combineReducers} from 'redux';
import SheetReducer from './sheet_reducer';


const rootReducer = combineReducers({
  doc: SheetReducer
});

export default rootReducer;
