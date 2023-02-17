import {StyleSheet} from 'react-native';
import {colors} from '../../../../globalStyles';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBack: {
    color: colors.WHITE,
    fontSize: 20,
  },
});
