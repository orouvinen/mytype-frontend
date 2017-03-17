const initialState = {
  signUpRequesting: false,
  signedIn: false,
  user: null,
};

function auth(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_SIGNUP_REQUEST':
      return {
        ...state,
        signUpRequesting: true,
      };
    default:
      return state;
  }
}

export default auth;
