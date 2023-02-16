import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface RatingStarProps {
  score: number;
}

const RatingStar = ({score}: RatingStarProps) => {
  const arrStars = [];

  for (let i = 1; i <= 5; i++) {
    arrStars.push(
      i <= score ? (
        <Icon name="star" style={{color: '#8C8C8C'}} key={`star-${i}`} />
      ) : (
        <Icon name="star-outline" style={{color: '#8C8C8C'}} />
      ),
    );
  }

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {arrStars.map(star => star)}
    </View>
  );
};

export default RatingStar;
