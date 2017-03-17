import { watchSignUpRequest } from './sign-up';

export default function* rootSaga() {
  yield [
    watchSignUpRequest()
  ];
}
