import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../../globalStyles';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    padding: 20,
    marginVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY,
  },
  cardImage: {
    width: 300,
    height: 350,
    resizeMode: 'contain',
  },
  textName: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: 20,
  },
  link: {
    alignSelf: 'flex-end',
    fontSize: 20,
    color: colors.YELLOw,
    marginBottom: 10,
  },
});
