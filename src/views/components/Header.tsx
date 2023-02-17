import React from 'react';
import {StyleSheet, View} from 'react-native';

const Header = () => {
  return <View style={styles.headerContainer}></View>;
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },
});

export default Header;
