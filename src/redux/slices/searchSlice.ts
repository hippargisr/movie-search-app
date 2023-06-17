import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchResult {
  title: string;
  year: string;
  imdbID: string;
}

interface SearchState {
  results: SearchResult[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  results: [],
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchRequest: (state):void => {
      state.isLoading = true;
      state.error = null;
    },
    searchSuccess: (state, action: PayloadAction<SearchResult[]>) => {
      state.results = action.payload;
      state.isLoading = false;
    },
    searchFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { searchRequest, searchSuccess, searchFailure } = searchSlice.actions;

export default searchSlice.reducer;
