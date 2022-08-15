import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Browse extends React.Component {
  render() {
    return (
      <View style={styles.text}>
        <Text>Browse</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});