import { take, takeEvery, call, put } from 'redux-saga/effects';

function* signUp(action) {
  const { name, email, password } = action;
  fetch('/api/user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  }).then(response => {
    // To get the response JSON:
    //response.json().then(data => console.log(data));

    // Status in response.status
    //console.log(response);
  }).catch(err => {
    // handle error (no connection / back-end down etc.)
  });
}

export function* watchSignUpRequest() {
  yield takeEvery('AUTH_SIGNUP_REQUEST', signUp);
}
