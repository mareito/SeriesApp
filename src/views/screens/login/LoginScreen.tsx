import {NativeStackScreenProps} from '@react-navigation/native-stack';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TextInput, View} from 'react-native';
import {MainStackParams} from '../../../application/navigation/MainNavigator';
import Button from '../../components/Button/Button';
import Input from '../../components/input/Input';
import ButtonsContainer from './components/ButtonsContainer';
import {LoginForm} from './components/LoginForm';
import {styles} from './LoginScreenStyles';

interface Props
  extends NativeStackScreenProps<MainStackParams, 'LoginScreen'> {}

const LoginScreen = ({navigation}: Props) => {
  const [image, setImage] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const {data} = await axios.request({
        baseURL: 'https://api.themoviedb.org/3/tv/',
        url: 'popular?api_key=434e1e2de734ff090ab43925f768db57&language=en-US&page=1',
        method: 'GET',
      });
      console.log('imagen', image);
      setImage(
        `https://image.tmdb.org/t/p/original${data?.results[0].backdrop_path}`,
      );
    })();
  }, []);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = () => {
    navigation.navigate('HomeScreen');
  };

  return image ? (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="cover"
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}>
          <Text style={styles.title}>Welcome!</Text>
          {!showForm && <ButtonsContainer accionOk={handleShowForm} />}
        </View>
        {showForm && (
          <LoginForm handleClose={handleShowForm} handleSubmit={handleSubmit} />
        )}
      </ImageBackground>
    </View>
  ) : (
    <Text>Cargando ...</Text>
  );
};

export default LoginScreen;
