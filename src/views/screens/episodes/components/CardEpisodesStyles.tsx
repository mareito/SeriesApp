import {StyleSheet} from 'react-native';
import {colors} from '../../../../globalStyles';

export const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  cardImage: {
    marginTop: 16,
    width: 350,
    height: 196,
    borderRadius: 16,
    marginBottom: 48,
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.WHITE,
    alignSelf: 'flex-start',
  },
  cardSubtitle: {
    marginTop: 12,
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.GRAY,
    alignSelf: 'flex-start',
  },
  cardBodyText: {
    color: colors.WHITE,
    fontSize: 16,
    width: '100%',
    marginVertical: 8,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY,
    height: 2,
    width: '100%',
    marginVertical: 15,
    opacity: 0.5,
  },
});
