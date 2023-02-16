import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../globalStyles';
import {styles} from './ButtonStyle';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  accion: () => void;
  size: 'regular' | 'small';
}

const Button = ({text, variant, accion, size}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={accion}
      style={{
        ...styles.buttonContainer,
        backgroundColor: variant === 'primary' ? colors.YELLOw : colors.WHITE,
        width: size === 'regular' ? 200 : 140,
      }}>
      <View>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
