import { tsConstructorType } from '@babel/types';
import { TabActions } from '@react-navigation/routers';
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    createProfile = () => {
        this.props.navigation.navigate("Browse");
    }

    render() {
        return (
          <View style={styles.text}>
            <Button onPress={() => {
                this.createProfile();
            }} title="Create Profile" color="#841584"></Button>
            <Text>Profile</Text>
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