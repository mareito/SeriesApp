import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginVertical: 100,
    color: '#FFFFFF',
    fontSize: 28,
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
  },
  link: {
    fontSize: 18,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    marginVertical: 12,
  },
});
