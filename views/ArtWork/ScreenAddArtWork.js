import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class AddArtWork extends Component 
{
    constructor(props) 
    {
        super(props)

        /** Declare used variable */
        this.state =
        {
            ArtWork_title: '',
            ArtWork_description: '',
            ArtWork_date_creation: '',
            ArtWork_characteritics: '',
            ArtWork_tags: '',
            ArtWork_price: '',
            ArtWork_type: '',
        }
    }

    render() 
    {
        let view =
            <View style={styles.templateContainer}>
                <Text> Time to Create !</Text>

                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="ArtWork Title"
                    onChangeText={text => this.setState({ ArtWork_title : text })}
                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="ArtWork Date Creation"
                    onChangeText={text => this.setState({ ArtWork_date_creation : text })}
                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="Art Work Description"
                    onChangeText={text => this.setState({ ArtWork_description : text })}
                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="Art Work Characteristic"
                    onChangeText={text => this.setState({ ArtWork_characteristics : text })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />


                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="ArtWor kTags Tabs"
                    onChangeText={text => this.setState({ ArtWork_tags : text })}
                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />


                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="Art Work Price"
                    onChangeText={text => this.setState({ ArtWork_price : text })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="Art Work type"
                    onChangeText={text => this.setState({ ArtWork_type : text })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

            </View> // end main view

        return view;
    }
}


const styles = StyleSheet.create(
{
    templateContainer:
    {
        fontSize: 20,
    },
    TextInputStyleClass: {

        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        // Set border Hex Color Code Here.
        borderColor: '#2196F3',

        // Set border Radius.
        borderRadius: 5,

        // Set border Radius.
        //borderRadius: 10 ,
    }
});

export default AddArtWork;
