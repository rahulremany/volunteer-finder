import React from "react";
import firebase from '../../../database/firebase';


export class orgProfile extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <View> 
                <Text> Profile Pic </Text>
                <Text> Org Name </Text>
                <Text> Contact: email@gmail.com </Text>
                <Text> Bio </Text>

                <orgPost> </orgPost>

            </View>
        )
    }
}