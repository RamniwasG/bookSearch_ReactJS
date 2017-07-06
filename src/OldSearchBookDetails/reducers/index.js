import {combineReducer} from 'redux';
import items from '../reducers/itemReducer';

const rootReducer = combineReducer({
  itemList: items
});

export default rootReducer;
