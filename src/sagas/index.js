import { watchSignUpRequest, watchLoginRequest, watchLogout } from './auth';

export default function* rootSaga() {
  yield [
    watchSignUpRequest(),
    watchLoginRequest(),
    watchLogout(),
  ];
}
