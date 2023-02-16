import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TextInput, View} from 'react-native';
import {MainStackParams} from '../../../application/navigation/MainNavigator';
import ButtonsContainer from './components/ButtonsContainer';
import {LoginForm} from './components/LoginForm';
import {styles} from './LoginScreenStyles';
import {getUrlImageCover} from '../../../infrastructure/api/seriesApi';

interface Props
  extends NativeStackScreenProps<MainStackParams, 'LoginScreen'> {}

const LoginScreen = ({navigation}: Props) => {
  const [image, setImage] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const ulrImage = await getUrlImageCover();
      ulrImage && setImage(ulrImage);
    })();
  }, []);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = () => {
    setShowForm(false);
    navigation.navigate('BottomTabNavigator');
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
            backgroundColor: 'rgba(0,0,0,0.1)',
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
