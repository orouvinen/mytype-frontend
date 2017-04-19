import { watchSignUpRequest, watchLoginRequest, watchLogout } from './auth';
import { watchCompetitionListUpdates } from './socket';
import { watchCompetitionCreate } from './competition';

export default function* rootSaga() {
  yield [
    watchCompetitionCreate(),
    watchCompetitionListUpdates(),
    watchSignUpRequest(),
    watchLoginRequest(),
    watchLogout(),
  ];
}
