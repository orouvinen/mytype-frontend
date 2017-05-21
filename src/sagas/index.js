import { watchSignUpRequest, watchLoginRequest, watchLogout } from './auth';
import { watchCompetitionCreate, watchCompetitionListUpdate } from './competition';
import { watchCompetitionResultsUpdate } from './competition';
import { watchCompetitionLoad } from './competition';
import { watchTypingTestEnd } from './competition';

export default function* rootSaga() {
  yield [
    watchTypingTestEnd(),
    watchCompetitionLoad(),
    watchCompetitionCreate(),
    watchCompetitionListUpdate(),
    watchCompetitionResultsUpdate(),
    watchSignUpRequest(),
    watchLoginRequest(),
    watchLogout(),
  ];
}
