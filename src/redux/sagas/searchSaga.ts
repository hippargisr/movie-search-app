import { call, put, takeLatest } from 'redux-saga/effects';
import { searchRequest, searchSuccess, searchFailure } from '../slices/searchSlice';
import axios, { AxiosResponse } from 'axios';

function* searchMovies(action: ReturnType<typeof searchRequest>) {
  try {
    const apiKey = 'cb498cfa';
    const response: AxiosResponse = yield call(axios.get, `http://www.omdbapi.com/?apikey=${apiKey}&t=${action.payload}`);
    if (response.data.Response === 'True') {
      console.log(response.data);
      const results = response.data;
      yield put(searchSuccess(results));
    } else {
      yield put(searchFailure(response.data.Error));
    }
  } catch (error) {
    yield put(searchFailure('An error occurred while searching for movies.'));
  }
}

function* watchSearchRequest() {
  yield takeLatest(searchRequest.type, searchMovies);
}

export default function* searchSaga() {
  yield watchSearchRequest();
}
