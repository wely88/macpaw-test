// const initialState = {
//   searchType: '',
//   currentCategory: '',
// };

// const general = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_SEARCH_TYPE':
//       return {
//         ...state,
//         searchType: action.searchType
//       }
//     case 'SET_CURRENT_CATEGORY':
//       return {
//         ...state,
//         currentCategory: action.category
//       }
//     default:
//       return state
//   }
// }

// export default general;


const initialState = {
  searchType: '',
  currentCategory: '',
  jokes: localStorage.getItem('jokes') ? JSON.parse(localStorage.getItem('jokes')) : [],
};

const general = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TYPE':
      return {
        ...state,
        searchType: action.searchType
      }
    case 'SET_CURRENT_CATEGORY':
      return {
        ...state,
        currentCategory: action.category
      }

    case 'UPDATE_JOKES_ARR':
      return {
        ...state,
        // jokes: [...state.jokes, action.joke]
      }
        
    default:
      return state
  }
}

export default general