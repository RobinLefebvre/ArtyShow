import React, {Component} from 'react';
import { FlatList, Text } from 'react-native';
import Artwork from '../../models/Artworks'
import Utility from '../../Utility'

class Feed extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {posts : []}
        this.getOeuvreDataFromDB();
    }

    render()
    {
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
        
    }
    getOeuvreDataFromDB()
    {
        let requestAdress = 'feed/list'
        fetch(`http://${Utility.DATABASE_URL}${requestAdress}`,
        {
            method: 'POST',
            headers: new Headers(),
            credentials: "same-origin",
            mode: 'cors',
            body : JSON.stringify({})
        })
        .then((data) => data.json())
        .then((data) =>
        {
            console.log(data);
            this.setState({posts : data});
            console.log(`Received data from server, Screen Feed has Oeuvres.`)
        })
        .catch((error) => console.log(error))

    }

    writeOeuvre(oeuvreData)
    {
        let postData = this.parsePostData(oeuvreData);
        console.log(postData);
        let p = new Artwork(postData);
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
    }
}
export default Feed;
