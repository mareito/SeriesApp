import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../globalStyles';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.BLACK,
  },
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
  textNavigation: {
    color: colors.WHITE,
    fontSize: 20,
  },
});
