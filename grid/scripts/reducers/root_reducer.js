import {combineReducers} from 'redux';
import WorkingAreaReducer from './working_area_reducer';
import SheetReducer from './sheet_reducer';


const rootReducer = combineReducers({
  workingArea: WorkingAreaReducer,
  doc: SheetReducer
});

export default rootReducer;
