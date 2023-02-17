import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {ISerie} from '../../../application/models/viewModels/Serie.model';
import {getPopularSeries} from '../../../infrastructure/api/seriesApi';
import {RootState} from '../../../infrastructure/store/store';
import {CardVertical} from '../../components/CardVertical/CardVertical';

const FavoritesScreen = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({item}) => (
          <CardVertical key={`card-${item.id}`} serie={item} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavoritesScreen;
