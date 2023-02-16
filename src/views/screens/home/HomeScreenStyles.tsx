import {StyleSheet} from 'react-native';
import {colors} from '../../../globalStyles';
export const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', backgroundColor: colors.BLACK},
  linkAll: {
    alignSelf: 'flex-end',
    fontSize: 24,
    color: colors.YELLOw,
    marginBottom: 10,
  },
  paddingcontainer: {
    paddingHorizontal: 20,
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: colors.GRAY,
    height: 2,
    opacity: 0.3,
    paddingHorizontal: 20,
  },
});
