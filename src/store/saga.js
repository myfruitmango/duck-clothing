import { all, call } from "redux-saga/effects";

import { CategoriesSaga } from "./categories/categories.saga";

export function* rootSaga() {
  yield all([call(CategoriesSaga)]);
}
