import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducer";
import rootSaga from "./saga";
import { globalListener, type AppStartListening } from "./listener";
import { AuthListener } from "@/modules/Auth/auth.listener";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false })
  .prepend(globalListener.middleware)
  .concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Listener middleware
AuthListener(globalListener.startListening as AppStartListening)

// Types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
