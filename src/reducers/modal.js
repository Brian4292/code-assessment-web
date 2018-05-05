import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../constants/ActionTypes'

const initialState = {
  modalIsOpen: false
}


const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modalIsOpen: true }
    case CLOSE_MODAL:
      return { ...state, modalIsOpen: false }
    default:
      return state
  }
}

export default modal;