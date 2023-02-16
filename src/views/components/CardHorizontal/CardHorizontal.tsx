import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './CardHorizontalStyle';
import {ISerie} from '../../../application/models/viewModels/Serie.model';
import {BASE_URL_IMAGES_200} from '../../../application/constants/enpoints';
import RatingStar from './RatingStar';

interface CardHorizontalProps {
  serie: ISerie;
  handleClick: (idSerie: number) => void;
}

const CardHorizontalStyle = ({serie, handleClick}: CardHorizontalProps) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        handleClick(serie.id);
      }}>
      <Image
        style={styles.image}
        source={{
          uri: `${BASE_URL_IMAGES_200}${serie.posterImage}`,
        }}
      />
      <Text style={styles.text}>{serie.name}</Text>
      <View style={styles.rating}>
        <RatingStar score={serie.score} />
      </View>
    </TouchableOpacity>
  );
};

export default CardHorizontalStyle;
