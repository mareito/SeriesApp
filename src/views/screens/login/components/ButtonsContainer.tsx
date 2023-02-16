import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../../components/Button/Button';
import {styles} from '../LoginScreenStyles';

interface ButtonsContainerProps {
  accionOk: () => void;
}

const ButtonsContainer = ({accionOk}: ButtonsContainerProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        text="Sign Up"
        variant="primary"
        accion={() => console.log('sign up')}
        size="regular"
      />
      <Button
        text="Log in"
        variant="secondary"
        accion={accionOk}
        size="regular"
      />
      <Text style={styles.link}>Forgot Password?</Text>
    </View>
  );
};

export default ButtonsContainer;
