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
  textNavigation: {
    color: colors.WHITE,
    fontSize: 20,
  },
  textBack: {
    color: colors.WHITE,
    fontSize: 20,
  },
});
