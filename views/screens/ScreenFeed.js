import React, {Component} from 'react';
import { FlatList, Text , View, Button} from 'react-native';

//import Utility from '../Utility';
// import Oeuvre from '../../models/Oeuvre.js'
// import OeuvreThumbnail from '../OeuvreThumbnail';

class Feed extends Component
{
    /*constructor(props)
    {
        super(props)
        this.state = {posts : []}
        this.getOeuvreDataFromDB();
    }*/

    render()
    {
        //  <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>
        let view =
        <View>
            <Text> Looping post coming soon </Text>
          
        </View>
        return view;

        /*
        if(this.state.posts.length == 0)
        {
            return <Text> There are no Posts. </Text>
        }
        else
        {
            let view =
            <FlatList
                data={ this.state.posts }
                keyExtractor={(item, index) => item.id.toString()}
                numColumns={2}
                renderItem={ (i) => this.writeOeuvre(i.item) }
                />
            return view;
        }
        */
    }
    /*getOeuvreDataFromDB()
    {
        console.log(`Fetching server for Feed.`)
        fetch(`http://${Utility.DATABASE_URL}posts/list`,
        {
            method: 'GET',
            headers: new Headers(),
            credentials: "same-origin",
            mode: 'cors',
        })
        .catch((error) => console.log(error))
        .then((data) => data.json())
        .then((data) =>
        {
            this.setState({posts : data});
            console.log(`Received data from server, Screen Feed has Oeuvres.`)
        })
    }

    writeOeuvre(oeuvreData)
    {
        let postData = this.parsePostData(oeuvreData);
        console.log(postData);
        let p = new Oeuvre(postData);
        let view = <OeuvreThumbnail post={p} />

        return view;
    }

    parsePostData(oeuvreData)
    {
        let ret = {};
        for(let key in oeuvreData)
        {
            ret[key] = oeuvreData[key];
        }
        return ret;
    }*/
}
export default Feed;
