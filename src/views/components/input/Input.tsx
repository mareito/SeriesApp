import React from 'react';
import {TextInput} from 'react-native';

interface InputProps {
  name: string;
  placeholder?: string;
  handleChange: (value: string, field: string) => void;
  value: string;
}

const Input = ({placeholder, handleChange, name, value}: InputProps) => {
  return (
    <TextInput
      autoCorrect={false}
      onChangeText={value => handleChange(value, name)}
      placeholder={placeholder}
      placeholderTextColor="#8C8C8C"
      value={value}
      style={{
        borderBottomWidth: 2,
        borderBottomColor: '#8C8C8C',
        width: '100%',
        color: '#8C8C8C',
        fontSize: 18,
        marginVertical: 20,
        paddingBottom: 2,
        paddingHorizontal: 0,
        opacity: 0.6,
      }}
    />
  );
};

export default Input;
