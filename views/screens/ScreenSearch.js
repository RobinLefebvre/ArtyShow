import React, {Component} from 'react';
import { View , TextInput, Button} from 'react-native';

class Search extends Component
{

    render() 
    {
        let view = 
        <View>
            <TextInput placeholder='Search'/>
            <Button title='Rechercher' onPress={() => {}}/>
        </View>

        return view;
    }
}

export default Search;
