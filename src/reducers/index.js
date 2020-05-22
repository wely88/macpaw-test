import { combineReducers } from 'redux'
import general from './general'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  general,
  visibilityFilter
})