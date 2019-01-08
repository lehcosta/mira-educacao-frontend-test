import { all } from "redux-saga/effects";

import peopleSaga from "./people/saga";

export default function* rootSaga() {
  yield all([peopleSaga()]);
}
