import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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

const initialDataLoginForm: LoginForm = {name: '', password: ''};

export const LoginForm = ({handleClose, handleSubmit}: LoginScreenProps) => {
  const [form, setForm] = useState<LoginForm>(initialDataLoginForm);

  const handleChange = (value: string, field: string) => {
    setForm({...form, [field]: value});
  };

  const handleSumbitForm = async () => {
    const response = await validateData(form.name, form.password);
    if (response) {
      setForm({...initialDataLoginForm});
      handleSubmit();
      return;
    }
    Alert.alert('Atención', 'Email o contraseña incorrecta', [
      {text: 'Aceptar'},
    ]);
  };

  return (
    <View style={styles.formContainer}>
      <Icon
        onPress={handleClose}
        name="close-outline"
        size={30}
        style={{color: '#FFFFFF', alignSelf: 'flex-end'}}
      />
      <View style={{width: '100%', marginTop: 30}}>
        <Input
          placeholder="Name"
          handleChange={handleChange}
          name="name"
          value={form.name}
        />
        <Input
          placeholder="Password"
          handleChange={handleChange}
          name="password"
          value={form.password}
        />
      </View>
      <View style={{position: 'absolute', bottom: 24}}>
        <Button
          text="Log in"
          variant="secondary"
          accion={handleSumbitForm}
          size="regular"
        />
      </View>
    </View>
  );
};
