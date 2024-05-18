import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reducer";
import { rootSaga } from "./saga";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["cart"],
  blacklist: ["user"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
// root-reducer
const middleWares = [
  process.env.NODE_ENV !== "producation" && logger,
  // thunk,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
