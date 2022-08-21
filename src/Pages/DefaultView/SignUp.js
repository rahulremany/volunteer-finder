import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Browse extends React.Component {
  render() {
    return (

        <View>

        <Text>
            Username: 
        </Text>

        <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder = "enter a username">
        </TextInput>

        <Text>
        Password: 
        </Text>

        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder = "enter a password">
        </TextInput>

        <View style={styles.text}>
        <Text>Sign In</Text>
        </View>

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