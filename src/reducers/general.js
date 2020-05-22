const initialState = {
  searchType: '',
  category: 'eee',
};

console.log(initialState)

const general = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default general
// import Constants from "../constants";

// const initialState = {
//   searchType: '',
//   caterory: '',
// };

// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     // General
//     case Constants.SET_MOBILE_DEVICE:
//       return {
//         ...state,
//         isMobile: true
//       };

//     case Constants.SET_DESKTOP_DEVICE:
//       return {
//         ...state,
//         isMobile: false
//       };

//     case Constants.SET_PUBLIC_DATA:
//       return {
//         ...state,
//         publicLoaded: true,
//         activeMatches: action.activeMatches,
//         archiveMatches: action.archiveMatches,
//         paymentPlans: action.paymentPlans
//       };

//     case Constants.SET_PHONE_VALIDATION_ERROR:
//       return {
//         ...state,
//         phoneValidationError: true
//       };

//     case Constants.RESET_PHONE_VALIDATION_ERROR:
//       return {
//         ...state,
//         phoneValidationError: false
//       };

//     // Authentication
//     case Constants.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: action.currentUser,
//         activeMatches: action.activeMatches,
//         myMatches: action.myMatches,
//         // archiveMatches: action.archiveMatches,
//         socket: action.socket,
//         channel: action.channel,
//         invalidCredentials: false
//       };

//     case Constants.UPDATE_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: action.currentUser,
//       };

//     case Constants.LOGIN_INVALID_CREDENTIALS:
//       return {
//         ...state,
//         invalidCredentials: true,
//         userExistsError: false
//       };

//     case Constants.PURGE_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: null,
//         showSettings: false,
//         newUser: {
//           phoneNumber: null,
//           planId: null,
//           matchId: null,
//           score1: null,
//           score2: null,
//           step: ""
//         },
//         currentUser: null,
//         currentUserMatchId: null
//       };

//     // Register with/without match
//     case Constants.SET_NEW_USER_MATCH:
//       return {
//         ...state,
//         newUser: { ...state.newUser, matchId: action.matchId, step: "match" }
//       };

//     case Constants.CLOSE_NEW_USER_MATCH:
//       return {
//         ...state,
//         newUser: { ...state.newUser, matchId: null, step: null }
//       };

//     case Constants.GO_TO_NEW_USER_MATCH:
//       return {
//         ...state,
//         newUser: { ...state.newUser, step: "match" }
//       };

//     case Constants.SUBMIT_NEW_USER:
//       return {
//         ...state,
//         newUser: {
//           ...state.newUser,
//           phoneNumber: action.phoneNumber,
//           score1: action.score1,
//           score2: action.score2,
//           step: "plan"
//         }
//       };

//     case Constants.USER_EXISTS_ERROR:
//       return {
//         ...state,
//         userExistsError: true,
//         loginPhoneNumber: action.phoneNumber
//       };

//     case Constants.RESET_USER_EXISTS_ERROR:
//       return {
//         ...state,
//         userExistsError: false,
//       }

//     default:
//       return state;
//   }
// }
