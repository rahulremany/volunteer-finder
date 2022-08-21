import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Browse extends React.Component {
  render() {
    return (

        <View>

        <Text>
            Organization Name: 
        </Text>

        <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder = "enter the name of your organization">
        </TextInput>

        <Text>
            Description: 
        </Text>

        <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder = "enter a description">
        </TextInput>

        <Text>
            Location: 
        </Text>

        <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder = "enter your zip code">
        </TextInput>

        <Text>
            Website URL: 
        </Text>

        <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder = "enter your organization's website url">
        </TextInput>

        <Text>
            Username: 
        </Text>

        <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder = "choose a username">
        </TextInput>

        <Text>
        Password: 
        </Text>

        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder = "choose a password">
        </TextInput>

        <View style={styles.text}>
        <Text>Sign Up</Text>
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