// State argument is not application state, only the state this reducer is responsible for.
// es6 if argument is undefined set it to null "state = null"
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      // always want to return a fresh object.
      return action.payload;
  }

  return state;
}
