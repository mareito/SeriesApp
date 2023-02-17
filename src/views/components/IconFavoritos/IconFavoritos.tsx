import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {
  ISeason,
  ISerie,
} from '../../../application/models/viewModels/Serie.model';
import {
  add,
  remove,
} from '../../../infrastructure/store/slices/favorites/favoritesSlice';
import {RootState} from '../../../infrastructure/store/store';

interface Props {
  serie: ISerie;
}

const IconFavoritos = ({serie}: Props) => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );
  const dispatch = useDispatch();

  const isInFavorites = (serieId: number): boolean => {
    return favorites.findIndex(fav => fav.id === serieId) >= 0;
  };

  const addFavorites = (serieId: number) => {
    if (!isInFavorites(serieId)) {
      dispatch(add({...serie}));
    }
  };

  const removeFromFavorites = (serieId: number) => {
    dispatch(remove(serieId));
  };

  return isInFavorites(serie.id) ? (
    <TouchableOpacity onPress={() => removeFromFavorites(serie.id)}>
      <Icon name="heart" style={styles.icon}></Icon>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => addFavorites(serie.id)}>
      <Icon name="heart-outline" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 36,
    color: '#8C8C8C',
    opacity: 0.5,
  },
});

export default IconFavoritos;
