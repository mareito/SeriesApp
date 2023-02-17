import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {ISerie} from '../../../application/models/viewModels/Serie.model';
import {getRecent} from '../../../infrastructure/api/seriesApi';
import SerieCard from './components/SerieCard';
import {styles} from './RecentScreenStyles';
import {RecentStackParams} from '../../../application/navigation/RecentStackNavigator';

interface Props
  extends NativeStackScreenProps<RecentStackParams, 'RecentScreen'> {}

const RecentScreen = ({navigation}: Props) => {
  const [page, setPage] = useState(1);
  const [recent, setRecent] = useState<ISerie[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getRecent(page);
      setRecent(data);
      console.log(data[0]);
    })();
  }, []);

  const goToView = (serieId: number) => {
    navigation.navigate('EpisodesListScreen', {serieId});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {recent.length > 0 &&
          recent.map(serie => (
            <SerieCard
              serie={serie}
              key={`serieC-${serie.id}`}
              onPress={goToView}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecentScreen;
