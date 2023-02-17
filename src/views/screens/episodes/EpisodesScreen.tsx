import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {HomeStackParams} from '../../../application/navigation/HomeStackNavigator';
import {styles} from './EposidesScreenStyles';
import {HeaderEpisodes} from './components/HeaderEpisodes';
import EpisodesNavigator from './components/EpisodesNavigator';
import {CardEpisodes} from './components/CardEpisodes';
import useEpisodes from '../../../infrastructure/hooks/useEpisodes';

interface Props
  extends NativeStackScreenProps<HomeStackParams, 'EpisodesScreen'> {}

export interface IVewData {
  season: number;
  episode: number;
}

export const EpisodesScreen = ({navigation, route}: Props) => {
  const serie = route.params.serie;
  const {
    data,
    setloading,
    searchEpisode,
    loading,
    nextEpisode,
    prevEpisode,
    episode,
  } = useEpisodes(serie);

  useEffect(() => {
    (async () => {
      setloading(true);
      await searchEpisode(serie.id, data.season, data.episode);
      setloading(false);
    })();
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderEpisodes
          goBack={() => navigation.pop()}
          addFavorites={() => console.log('adicionar a favoritos')}
          loading={loading}
          serieName={serie.name}
          key={`epHeader${serie.id}`}
        />
        <EpisodesNavigator
          data={data}
          loading={loading}
          nextEpisode={nextEpisode}
          prevEpisode={prevEpisode}
        />
        <CardEpisodes
          episode={episode!}
          key={`cardEpisode-${episode?.episodeNumber}`}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
