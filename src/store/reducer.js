import {combineReducers} from 'redux';
import NameSpace from './name-space';
import {reducer as data} from './data/reducer';
import {reducer as user} from './user/reducer';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
