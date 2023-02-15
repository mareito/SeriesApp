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
  formContainer: {
    position: 'absolute',
    bottom: 0,
    height: '50%',
    minHeight: 400,
    width: '100%',
    backgroundColor: 'rgba(25, 25, 25, 0.95)',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 12,
    alignItems: 'center',
  },
});
