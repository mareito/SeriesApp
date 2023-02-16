import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../../globalStyles';

import {ISerie} from '../../../application/models/viewModels/Serie.model';
import {getPopularSeries} from '../../../infrastructure/api/seriesApi';
import {CardVertical} from '../../components/CardVertical/CardVertical';

const FavoritesScreen = () => {
  const [page, setPage] = useState(1);
  const [series, setSeries] = useState<ISerie[]>([]);

  useEffect(() => {
    (async () => {
      if (page === 1) setSeries([]);
      await consultaData();
    })();
  }, [page]);

  const consultaData = async () => {
    try {
      const data = await getPopularSeries(page);
      setSeries(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={series}
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
