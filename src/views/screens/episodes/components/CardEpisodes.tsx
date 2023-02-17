import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './CardEpisodesStyles';
import {IEpisode} from '../../../../application/models/viewModels/Episode.model';
import {BASE_URL_IMAGES} from '../../../../application/constants/enpoints';

interface Props {
  episode: IEpisode;
}

export const CardEpisodes = ({episode}: Props) => {
  return (
    <View style={styles.card}>
      <Image
        source={
          episode?.stillpath
            ? {uri: `${BASE_URL_IMAGES}${episode?.stillpath}`}
            : require('../../../../assets/images/noimage.png')
        }
        style={styles.cardImage}></Image>
      <Text style={styles.cardTitle}>{episode?.name}</Text>
      <Text style={styles.cardSubtitle}>
        {`IMDb : ${episode?.voteAverage}  |  ${episode?.airDate.slice(
          0,
          4,
        )} | ${episode?.seasonNumber} Season`}
      </Text>
      <View style={styles.divider}></View>
      {episode?.overview && (
        <Text style={styles.cardBodyText}>{episode?.overview}</Text>
      )}
      {episode?.guestStar && (
        <Text style={styles.cardBodyText}>Starring : {episode?.guestStar}</Text>
      )}
    </View>
  );
};
