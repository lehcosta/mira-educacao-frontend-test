import { delay } from "redux-saga";
import { all, takeLatest, call, put, select } from "redux-saga/effects";

import actions from "./actions";
import http from "../../helpers/http";

const onFetchPeople = async page => await http.get(`people?page=${page}`);

export function* fetchPeople() {
  yield delay(1000);

  try {
    const state = yield select();

    const { data } = yield call(
      onFetchPeople,
      state.people.list.meta.current_page
    );

    yield put(actions.fetchPeopleSuccess({ data }));
  } catch (error) {
    yield put(actions.fetchPeopleFailure({}));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(
      [actions.FETCH_PEOPLE, actions.FETCH_PEOPLE_SET_PAGE],
      fetchPeople
    )
  ]);
}
