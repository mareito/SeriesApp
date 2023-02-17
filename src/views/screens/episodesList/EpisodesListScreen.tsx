import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IEpisode} from '../../../application/models/viewModels/Episode.model';
import {RecentStackParams} from '../../../application/navigation/RecentStackNavigator';
import {
  getSerieDetails,
  getSeasonsEpisodes,
} from '../../../infrastructure/api/seriesApi';
import {styles} from './EpisodesListStyles';
import EpisodeCard from './episodeCard/EpisodeCard';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props
  extends NativeStackScreenProps<RecentStackParams, 'EpisodesListScreen'> {}

export const EpisodesListScreen = ({navigation, route}: Props) => {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [serieName, setSerieName] = useState('');

  useEffect(() => {
    (async () => {
      const serie = await getSerieDetails(route.params.serieId);
      setSerieName(serie!.name);
      const episodes = await getSeasonsEpisodes(
        serie!.id,
        serie!.numberOfSeasons || 0,
      );
      setEpisodes(episodes);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.pop()}>
          <Icon
            name="chevron-back-outline"
            style={{...styles.textBack, marginRight: 20}}></Icon>
          <Text style={styles.textBack}>{serieName}</Text>
        </TouchableOpacity>
        {episodes.length > 0 &&
          episodes.map(episode => (
            <EpisodeCard
              episode={episode}
              key={`episodeS${episode.seasonNumber}E${episode.episodeNumber}`}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};
