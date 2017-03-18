const initialState = {
  signUpRequested: false,
  accountCreated: false,  // true after succesful creation
  errorMessage: null,
  loggedIn: false,
  user: null,
};

function auth(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_SIGNUP_REQUEST':
      return {
        ...state,
        signUpRequested: true,
      };
    case 'AUTH_SIGNUP_SUCCESS':
      return {
        ...state,
        accountCreated: true,
      };
    case 'AUTH_SIGNUP_FAIL':
      return {
        ...state,
        accountCreated: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}

export default auth;
