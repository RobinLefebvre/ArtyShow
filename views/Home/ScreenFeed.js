import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Template extends Component
{
    render()
    {
        let view =
        <View style={styles.templateContainer}>
            <Text> Waiting for post loop image </Text>
        </View>

        return view;
    }
}
export default Template;

const styles = StyleSheet.create(
{
    templateContainer :
    {
        fontSize : 20,
    }
});
