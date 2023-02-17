import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {HomeStackParams} from '../../../application/navigation/HomeStackNavigator';
import {getSerieDetails} from '../../../infrastructure/api/seriesApi';
import {ISerieDetails} from '../../../application/models/viewModels/Serie.model';
import {
  BASE_URL_IMAGES,
  BASE_URL_IMAGES_200,
} from '../../../application/constants/enpoints';
import {styles} from './SerieDetailScreenStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import RatingStar from '../../components/CardHorizontal/RatingStar';
import Button from '../../components/Button/Button';

interface Props
  extends NativeStackScreenProps<HomeStackParams, 'SerieDetailScreen'> {}

export const SerieDetailScreen = ({navigation, route}: Props) => {
  const [serie, setSerie] = useState<ISerieDetails>();

  useEffect(() => {
    (async () => {
      const data = await getSerieDetails(route.params.idSerie);
      setSerie(data);
    })();
  }, []);

  const gotToEpisodes = () => {
    navigation.navigate('EpisodesScreen', {serie: serie!});
  };

  return (
    serie?.id && (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          blurRadius={9}
          source={{uri: `${BASE_URL_IMAGES_200}${serie.posterImage}`}}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.pop()}>
            <Icon
              name="chevron-back-outline"
              style={{...styles.textBack, marginRight: 20}}></Icon>
            <Text style={styles.textBack}>Popular</Text>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: `${BASE_URL_IMAGES}${serie.posterImage}`}}
              style={styles.image}
            />
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.dataContainer}>
              <Text style={styles.textName}>{serie.name}</Text>
              <View style={styles.score}>
                <RatingStar score={serie.score} />
              </View>
              <Text style={styles.rating}>IMDb: {serie.score}</Text>
              <Button
                text="Watch Now"
                variant="primary"
                accion={gotToEpisodes}
                size="regular"
              />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  );
};
