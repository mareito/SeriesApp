import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth,
    height: 180,
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  image: {height: 180, width: 130, borderRadius: 12},
  rating: {width: '50%', marginVertical: 10},
  name: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 20,
  },
  score: {
    color: '#8C8C8C',
  },
  details: {
    width: screenWidth - 170,
    paddingLeft: 20,
    justifyContent: 'space-between',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontSize: 36,
    color: '#8C8C8C',
    opacity: 0.5,
  },
});
