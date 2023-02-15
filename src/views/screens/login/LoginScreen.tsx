import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Button from '../../components/Button/Button';
import {styles} from './LoginScreenStyles';

const LoginScreen = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    (async () => {
      const {data} = await axios.request({
        baseURL: 'https://api.themoviedb.org/3/tv/',
        url: 'popular?api_key=434e1e2de734ff090ab43925f768db57&language=en-US&page=1',
        method: 'GET',
      });
      setImage(
        `https://image.tmdb.org/t/p/original${data?.results[0].backdrop_path}`,
      );
    })();
  }, []);

  console.log(image);
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
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <Text style={styles.title}>Welcome!</Text>
          <View style={styles.buttonContainer}>
            <Button
              text="Sign Up"
              variant="primary"
              accion={() => console.log('sign up')}
            />
            <Button
              text="Log in"
              variant="secondary"
              accion={() => console.log('sign up')}
            />
            <Text style={styles.link}>Forgot Password?</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  ) : (
    <Text>Cargando ...</Text>
  );
};

export default LoginScreen;
