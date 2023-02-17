import {StyleSheet} from 'react-native';
import {colors} from '../../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
  },
  scrollContainer: {
    padding: 20,
  },
  back: {
    marginTop: 4,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBack: {
    color: colors.WHITE,
    fontSize: 20,
  },
});
