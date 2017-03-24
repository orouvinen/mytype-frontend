import { watchSignUpRequest, watchLoginRequest } from './auth';

export default function* rootSaga() {
  yield [
    watchSignUpRequest(),
    watchLoginRequest(),
  ];
}
