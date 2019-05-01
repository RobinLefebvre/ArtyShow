import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
import { ImagePicker } from 'expo';

class AddArtWork extends Component 
{
    constructor(props) 
    {
        super(props)

        /** Declare used variable */
        this.state =
        {
            image : null,
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
        let { image } = this.state;

        let view =
            (<View style={styles.templateContainer}>
                
                <Button
                    title="Pick an image."
                    onPress={this._pickImage}
                />

                {image && 
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> }


                <Text> ArtWork Data </Text>
                <TextInput
                    placeholder="ArtWork Title"
                    onChangeText={text => this.setState({ ArtWork_title : text })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <TextInput
                    placeholder="ArtWork Date Creation"
                    onChangeText={text => this.setState({ ArtWork_date_creation : text })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <TextInput
                    placeholder="Art Work Description"
                    onChangeText={text => this.setState({ ArtWork_description : text })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <TextInput
                    placeholder="Art Work Characteristic"
                    onChangeText={text => this.setState({ ArtWork_characteristics : text })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <TextInput
                    placeholder="ArtWor kTags Tabs"
                    onChangeText={text => this.setState({ ArtWork_tags : text })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <TextInput
                    placeholder="Art Work Price"
                    onChangeText={text => this.setState({ ArtWork_price : text })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Art Work type"
                    onChangeText={text => this.setState({ ArtWork_type : text })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
            </View>) // end main view

        return view;
    }

    _pickImage = async () => 
    {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });
   
        console.log(result);
   
        if (!result.cancelled) 
        {
            this.setState({ image: result.uri });
        }
   };
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
