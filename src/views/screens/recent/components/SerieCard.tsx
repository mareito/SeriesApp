import React from 'react';
import {Image, Text, Touchable, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  BASE_URL_IMAGES,
  BASE_URL_IMAGES_400,
} from '../../../../application/constants/enpoints';
import {ISerie} from '../../../../application/models/viewModels/Serie.model';
import {styles} from './SerieCardStyle';

interface Props {
  serie: ISerie;
  onPress: (serieId: number) => void;
}

const SerieCard = ({serie, onPress}: Props) => {
  console.log(serie);

  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.cardImage}
        source={
          serie.posterImage
            ? {uri: `${BASE_URL_IMAGES_400}${serie.posterImage}`}
            : require(`../../../../assets/images/noimage.png`)
        }
      />
      <Text style={styles.textName}>{serie.name}</Text>
      <TouchableOpacity style={styles.link} onPress={() => onPress(serie.id)}>
        <Text style={styles.link}>
          Go to view <Icon name="chevron-forward" style={{fontSize: 20}}></Icon>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SerieCard;
