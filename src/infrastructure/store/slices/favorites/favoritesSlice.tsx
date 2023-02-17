import {createSlice} from '@reduxjs/toolkit';
import {ISerie} from '../../../../application/models/viewModels/Serie.model';

interface IFavoritesSlice {
  favorites: ISerie[];
}

const initialState: IFavoritesSlice = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action) => {
      state.favorites.push(action.payload);
    },
    remove: (state, action) => {
      const index = state.favorites.findIndex(fav => fav.id === action.payload);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      }
    },
    clear: state => {
      state.favorites = [];
    },
  },
});

export const {add, remove, clear} = favoritesSlice.actions;
