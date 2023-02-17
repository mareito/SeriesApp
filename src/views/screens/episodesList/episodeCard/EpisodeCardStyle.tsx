import {StyleSheet} from 'react-native';
import {colors} from '../../../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    height: 300,
    paddingBottom: 12,
    borderBottomColor: colors.GRAY,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  episodeTitle: {
    color: colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    borderRadius: 16,
    alignSelf: 'center',
    width: 350,
    height: 200,
  },
});
