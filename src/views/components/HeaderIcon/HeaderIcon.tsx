import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../globalStyles';

export const HeaderIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.getParent()?.navigate('LoginScreen')}>
      <Icon
        name="flower"
        style={{
          color: colors.WHITE,
          fontSize: 24,
          marginRight: 10,
        }}></Icon>
    </TouchableOpacity>
  );
};
