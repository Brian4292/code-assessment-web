import {
  OPEN_MODAL,
} from '../constants/ActionTypes'

const initialState = {
  modalIsOpen: false
}

// openModal() {
//   this.setState({ modalIsOpen: true });
// }

// afterOpenModal() {
//   // references are now sync'd and can be accessed.
//   this.subtitle.style.color = '#f00';
// }

// closeModal() {
//   this.setState({ modalIsOpen: false });
// }

const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modalIsOpen:true }
    default:
      return state
  }
}

export default modal;