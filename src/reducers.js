import { 
  CHANGE_SEARCH_FIELD,
  ROBOTS_REQUEST_PENDING,
  ROBOTS_REQUEST_SUCCESS,
  ROBOTS_REQUEST_FAILED
 } from "./constants";

export const initialStateSearch = { searchField: '' }

export const initialStateRobots = {
  error: '',
  isPending: false,
  robots: [],
  isPlayingAudio: false
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload })
    default:
      return state;
  }
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch(action.type) {
    case ROBOTS_REQUEST_PENDING:
      return Object.assign({}, state, { isPending: true })
    case ROBOTS_REQUEST_SUCCESS:
      return Object.assign({}, state, { isPending: false, robots: action.payload })
    case ROBOTS_REQUEST_FAILED:
      return Object.assign({}, state, { isPending: false, error: action.payload })
    default:
      return state;
  }
}