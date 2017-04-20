import { watchSignUpRequest, watchLoginRequest, watchLogout } from './auth';
import { watchCompetitionCreate, watchCompetitionListUpdates } from './competition';

export default function* rootSaga() {
  yield [
    watchCompetitionCreate(),
    watchCompetitionListUpdates(),
    watchSignUpRequest(),
    watchLoginRequest(),
    watchLogout(),
  ];
}
