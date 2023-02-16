import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../globalStyles';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {flex: 1, opacity: 0.8},
  back: {
    paddingLeft: 20,
    top: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBack: {
    color: colors.WHITE,
    fontSize: 24,
  },
  image: {height: 390, width: 260, borderRadius: 12, alignSelf: 'center'},
  dataContainer: {
    alignItems: 'center',
    padding: 20,
  },
  textName: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  score: {
    marginVertical: 10,
    width: 100,
    alignContent: 'center',
    marginHorizontal: 100,
  },
  rating: {
    color: '#8C8C8C',
    marginBottom: 10,
  },
});
