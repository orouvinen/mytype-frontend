import { watchSignUpRequest, watchLoginRequest, watchLogout } from './auth';
import { watchCompetitionCreate, watchCompetitionListUpdates } from './competition';
import { watchResultListLoad } from './competition';
import { watchTypingTestEnd } from './competition';

export default function* rootSaga() {
  yield [
    watchTypingTestEnd(),
    watchResultListLoad(),
    watchCompetitionCreate(),
    watchCompetitionListUpdates(),
    watchSignUpRequest(),
    watchLoginRequest(),
    watchLogout(),
  ];
}
