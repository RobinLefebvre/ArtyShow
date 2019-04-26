import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

class AddArtWork extends Component
{

  constructor(props) {

      super(props)


      /** Declare used variable */

      this.state = {

        ArtWorkTitle : '',
        ArtWorkDescription : '',
        ArtWorkTitle: '',
        ArtWorkDateCreation: '',
        ArtWorkDescription: '',
        ArtWorkCharactTab: '',
        ArtWorkTagsTabs: '',
        ArtWorkPrice: '',
        ArtWorkType:'',
   }
    }
    render()
    {
        let view =
        <View style={styles.templateContainer}>
            <Text> Time to Create !</Text>



            <TextInput
              // Adding hint in Text Input using Place holder.
              placeholder="Art Work Ttitle"
              onChangeText={ArtWorkTitle => this.setState({ArtWork_title})}
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />



            <TextInput
              // Adding hint in Text Input using Place holder.
              placeholder="Art Work Date Creation"
              onChangeText={ArtWorkDateCreation => this.setState({ArtWork_date_creation})}
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />







            <TextInput
              // Adding hint in Text Input using Place holder.
              placeholder="Art Work Description"
              onChangeText={ArtWorkDescription => this.setState({ArtWork_description})}
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />





          <TextInput
            // Adding hint in Text Input using Place holder.
            placeholder="Art Work Characteristic"
            onChangeText={ArtWorkCharactTab => this.setState({ArtWork_charact_tab})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />


          <TextInput
            // Adding hint in Text Input using Place holder.
            placeholder="ArtWor kTags Tabs"
            onChangeText={ArtWorkTags => this.setState({ArtWork_tag_tab})}
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />


          <TextInput
            // Adding hint in Text Input using Place holder.
            placeholder="Art Work Price"
            onChangeText={ArtWorkPrice => this.setState({ArtWork_price})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />

          <TextInput
            // Adding hint in Text Input using Place holder.
            placeholder="Art Work type"
            onChangeText={ArtWorkType => this.setState({ArtWork_type})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />





        </View> // end main view

        return view;
    }
}


const styles = StyleSheet.create(
    {
        templateContainer :
        {
            fontSize : 20,
        },
        TextInputStyleClass: {

        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        // Set border Hex Color Code Here.
         borderColor: '#2196F3',

         // Set border Radius.
         borderRadius: 5 ,

        // Set border Radius.
         //borderRadius: 10 ,
        }
    }
);

export default AddArtWork;
