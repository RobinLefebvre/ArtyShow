import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

/*
class OeuvreThumbnail extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        console.log(this.props.post.uri)
        let view = 
        <Image
            source={{uri : this.props.post.uri}} 
            />
        return view;
    }

}
export default OeuvreThumbnail

const styles = StyleSheet.create(
{
    postContainer : 
    {
        flex : 1,
        height : 200
    }
})*/
    


class OeuvreThumbnail extends Component 
{
    render() 
    {
        let view = 
        <View style={styles.postContainer}>
            <View style={styles.firstLine} >
                <Text style={{flex : 3, textAlignVertical : 'center'}}> {this.props.post.name} </Text>
                <Text style={{flex : 1, textAlign : 'center'}}> {this.props.post.date} </Text>
            </View>
            <View style={styles.content}>
                <Text> {this.props.post.content} </Text>
            </View>
            <View style={styles.lastLine}>
                <Text style={{flex : 3}}> {this.props.post.author} </Text>
                <Text style={{flex : 1, textAlign : 'center'}}> {this.props.post.likes} </Text>
            </View>
            <Image source={{uri : this.props.post.uri}} />
        </View>

        return view;
    }
}
export default OeuvreThumbnail;
const styles = StyleSheet.create(
{
    postContainer : 
    {
        flex : 1,
        flexDirection : 'column',
        borderColor: '#00000088',
        borderWidth : 2,
        margin : 20,
        marginBottom : 28
    },
    firstLine :
    {
        flex : 1,
        flexDirection: 'row',
        fontWeight : 'bold',
        borderColor : '#00000088',
        borderBottomWidth : 1
    },
    content : 
    {
        height : 200,
        textAlign : 'justify'
    },
    lastLine :
    {
        flex : 1,
        flexDirection: 'row',
        fontStyle: 'italic'
    }
}) 
    
