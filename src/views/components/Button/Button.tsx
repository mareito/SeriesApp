import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ButtonStyle';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  accion: () => void;
}

const Button = ({text, variant, accion}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={accion}
      style={{
        ...styles.buttonContainer,
        backgroundColor: variant === 'primary' ? '#FFD233' : '#FFFFFF',
      }}>
      <View>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
