import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default class Browse extends React.Component {
  render() {
    return (

        <View>

        <Text>
            First Name: 
        </Text>

        <TextInput 
            style={styles.input}
            placeholder = "enter your first name">
        </TextInput>

        <Text>
            Last Name: 
        </Text>

        <TextInput 
            style={styles.input}
            placeholder = "enter your last name">
        </TextInput>

        <Text>
            Age: 
        </Text>

        <TextInput 
            style={styles.input}
            placeholder = "enter your age">
        </TextInput>

        <Text>
            Location: 
        </Text>

        <TextInput 
            style={styles.input}
            placeholder = "enter your zip code">
        </TextInput>

        <Text>
            Username: 
        </Text>

        <TextInput 
            style={styles.input}
            placeholder = "choose a username">
        </TextInput>

        <Text>
          Password: 
        </Text>

        <TextInput
            style={styles.input}
            placeholder = "choose a password">
        </TextInput>

        <Button onPress={() => {
            this.props.navigation.navigate("Profile");
        }} title="Sign Up" color="#841584"></Button>

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