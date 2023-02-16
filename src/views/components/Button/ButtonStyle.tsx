import {StyleSheet} from 'react-native';
import {colors} from '../../../globalStyles';

export const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    padding: 10,
    borderRadius: 24,
    marginVertical: 10,
  },
  buttonPrimary: {
    backgroundColor: colors.YELLOw,
  },
  buttonSecondary: {
    backgroundColor: colors.WHITE,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
