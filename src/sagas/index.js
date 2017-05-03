import { watchSignUpRequest, watchLoginRequest, watchLogout } from './auth';
import { watchCompetitionCreate, watchCompetitionListUpdates } from './competition';
import { watchTypingTestEnd } from './competition';

export default function* rootSaga() {
  yield [
    watchTypingTestEnd(),
    watchCompetitionCreate(),
    watchCompetitionListUpdates(),
    watchSignUpRequest(),
    watchLoginRequest(),
    watchLogout(),
  ];
}
