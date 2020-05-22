const initialState = {
  searchType: '',
  currentCategory: '',
};

console.log(initialState)

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
    default:
      return state
  }
}

export default general