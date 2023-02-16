import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {
  getPopularSeries,
  getRecommendations,
} from '../../../infrastructure/api/seriesApi';
import {ISerie} from '../../../application/models/viewModels/Serie.model';
import CardHorizontal from '../../components/CardHorizontal/CardHorizontal';
import {styles} from './HomeScreenStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../../../globalStyles';
import {CardVertical} from '../../components/CardVertical/CardVertical';
import {HomeStackParams} from '../../../application/navigation/HomeStackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<HomeStackParams, 'HomeScreen'> {}

const HomeScreen = ({navigation}: Props) => {
  const [page, setPage] = useState(1);
  const [series, setSeries] = useState<ISerie[]>([]);
  const [popular, setPopular] = useState<ISerie[]>([]);
  const [pagePopular, setPagePopular] = useState(1);

  useEffect(() => {
    (async () => {
      if (page === 1) setSeries([]);
      await consultaData();
    })();
  }, [page]);

  useEffect(() => {
    (async () => {
      if (pagePopular === 1) setPopular([]);
      await consultaDataPopular();
    })();
  }, [pagePopular]);

  const consultaData = async () => {
    try {
      const data = await getPopularSeries(page);
      setSeries(data);
    } catch (error) {
      console.log(error);
    }
  };

  const consultaDataPopular = async () => {
    try {
      const dataPopular = await getRecommendations(page);
      setPopular(dataPopular);
    } catch (error) {
      console.log(error);
    }
  };

  const seeDetails = (idSerie: number) => {
    navigation.navigate('SerieDetailScreen', {idSerie});
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={globalStyles.titulo}>Popular</Text>
        <FlatList
          data={series}
          renderItem={({item}) => (
            <CardHorizontal
              key={`card-${item.id}`}
              serie={item}
              handleClick={seeDetails}
            />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
        <Text style={{...styles.linkAll, paddingRight: 20}}>
          See all <Icon name="chevron-forward" style={styles.linkAll}></Icon>
        </Text>
      </View>
      <View style={styles.paddingcontainer}>
        <View style={styles.divider}></View>
      </View>
      <View>
        <Text style={globalStyles.titulo}>Recommendations</Text>
        <FlatList
          data={popular}
          renderItem={({item}) => (
            <CardVertical key={`card-${item.id}`} serie={item} />
          )}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces
        />
      </View>
    </View>
  );
};

export default HomeScreen;
