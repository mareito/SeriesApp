import React from 'react';
import {Image, Text, View} from 'react-native';
import {BASE_URL_IMAGES_200} from '../../../application/constants/enpoints';
import {ISerie} from '../../../application/models/viewModels/Serie.model';
import Button from '../Button/Button';
import RatingStar from '../CardHorizontal/RatingStar';
import {styles} from './CardVerticalStyle';
import IconFavoritos from '../IconFavoritos/IconFavoritos';

interface CardVerticalProps {
  serie: ISerie;
}

export const CardVertical = ({serie}: CardVerticalProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{
          uri: `${BASE_URL_IMAGES_200}${serie.posterImage}`,
        }}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{serie.name}</Text>
        <View style={styles.rating}>
          <RatingStar score={serie.score} key={`CardVertical-${serie.id}`} />
        </View>
        <Text style={styles.score}>IMDb {serie.score}</Text>
        <View style={styles.action}>
          <Button
            text="Watch Now"
            variant="primary"
            accion={() => console.log('')}
            size="small"
          />
          <IconFavoritos serie={serie} />
        </View>
      </View>
    </View>
  );
};
