import { VisibilityFilters } from '../Actions.js';
import {SET_VISIBILITY_FILTER} from '../Actions.js'
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}
export function reducer (state = initialState, action) {
   switch (action.type) {
       case SET_VISIBILITY_FILTER:
           return Object.assign({}, state,{
               visibilityFilter: action.filter
           })
       default:
           return state
   }
}