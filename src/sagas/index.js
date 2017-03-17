import { watchSignUpRequest } from './sign-up-saga';

export default function* rootSaga() {
  yield [
    watchSignUpRequest
  ];
}
