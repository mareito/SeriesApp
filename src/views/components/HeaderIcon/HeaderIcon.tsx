import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {colors} from '../../../globalStyles';
import {clear} from '../../../infrastructure/store/slices/favorites/favoritesSlice';

export const HeaderIcon = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const salir = () => {
    dispatch(clear());
    navigation.getParent()?.navigate('LoginScreen');
  };

  return (
    <TouchableOpacity onPress={salir}>
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
