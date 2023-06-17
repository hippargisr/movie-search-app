import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import searchReducer from './slices/searchSlice';
import rootSaga from './sagas/searchSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
