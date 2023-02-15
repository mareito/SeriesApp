import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {validateData} from '../../../../infrastructure/services/validateData';
import Button from '../../../components/Button/Button';
import Input from '../../../components/input/Input';
import {styles} from '../LoginScreenStyles';

interface LoginScreenProps {
  handleClose: () => void;
  handleSubmit: () => void;
}

interface LoginForm {
  name: string;
  password: string;
}

export const LoginForm = ({handleClose, handleSubmit}: LoginScreenProps) => {
  const [form, setForm] = useState<LoginForm>({name: '', password: ''});

  const handleChange = (value: string, field: string) => {
    setForm({...form, [field]: value});
  };

  const handleSumbitForm = async () => {
    const response = await validateData(form.name, form.password);
    if (response) {
      handleSubmit();
      return;
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text
        onPress={handleClose}
        style={{color: '#FFFFFF', alignSelf: 'flex-end'}}>
        X
      </Text>
      <View style={{width: '100%', marginTop: 30}}>
        <Input placeholder="Name" handleChange={handleChange} name="name" />
        <Input
          placeholder="Password"
          handleChange={handleChange}
          name="password"
        />
      </View>
      <View style={{position: 'absolute', bottom: 24}}>
        <Button text="Log in" variant="secondary" accion={handleSumbitForm} />
      </View>
    </View>
  );
};
