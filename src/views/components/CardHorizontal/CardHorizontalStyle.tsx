import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 280,
    width: 130,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
  },

  image: {height: 180, width: 130, borderRadius: 12},
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    width: '90%',
    marginTop: 5,
    marginBottom: 10,
  },
  rating: {width: '60%', marginBottom: 5},
});
