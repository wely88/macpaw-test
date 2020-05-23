export const setSearchType = searchType => ({
  type: 'SET_SEARCH_TYPE',
  searchType
})

export const setCurrentCategory = category => ({
  type: 'SET_CURRENT_CATEGORY',
  category
})

// export function setLocalStorage () {
//   let jokesArray = localStorage.getItem('jokes') ? JSON.parse(localStorage.getItem('jokes')) : [];
//   localStorage.setItem('jokes', JSON.stringify(jokesArray));
//   const jokesData = JSON.parse(localStorage.getItem('jokes'));
// }
