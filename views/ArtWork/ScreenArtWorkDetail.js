import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class ArtWorkDetail extends Component
{
    constructor(artWork)
    {
        this.state ={};
    }

    loadArtWork ()
    {

    }
    render ()
    {
        /** @todo : grab ArtWorkData*/
        const data =
        {
          id : 0,
          title : "Homme au chapeau",
          description : "",
          characteristics :
          {
              dimensions : "",
              technique: "",
              serial_umber : 0
          },
          author :
          {
              name : "Adrien Page",
              url_profil_img : "http://static-image-path-adrien-page"
          },
          price : 100,
          comments : ["", ""],
          tags : ["peinture", "impressioniste"],
          urlImage : "http://static-image-path/?id=0",
          likesAmount : 120,
        }

        let view =
        <View style={styles.templateContainer}>
            /* Link Artiste */
            <View style={styles.artisteTopOfScreen}>
                /* Artist Thumbnail*/
                <Image
                  source={uri : data.author.url_profil_img}
                />
                /* Artist Name*/
                <Text style={styles.artistNameLink}> `${data.author.name}` </Text>
                /* Share Oeuvre : Icone cliquable */
                <Ioicons />
            </View>
            /* Image de l'oeuvre */
            <Image style={styles.fullSizeImage}
              source={{uri : data.urlImage}}
            />
            /* Titre de l'Oeuvre : Centré et grande police */
            <Text style={styles.titleArtWork}>
               `${data.title}`
            </Text>
            /* Div horizontal pour le Like, Commentaire et Prix */
            <View style={styles.likesCommentsPrice}>
              /* Display Likes : Nombre de Like + Icone Cliquable */
              <Text style={likesDisplay}>
                `${data.likesAmount}`
              </Text>
              <Ioicons />
              /* Display Comments : Nombre de Comments + Icone Cliquable */
              <Text style={commentsDisplay}>
                `${data.commentsAmount}`
              </Text>
              <Ioicons />
              /* Display Price*/
              <Text style={styles.priceDisplay}>
                `${data.price}`
              </Text>
            </View>
            /* Display descriptions and characteristics*/
            <View style={styles.descriptionCharacteristics}>
              <Text> Description : </Text>
              <Text>`${data.description}`</Text>

              <Text> Dimensions : </Text>
              <Text>`${data.characteristics.dimensions}` </Text>

              <Text> Technique utilisée : </Text>
              <Text> `${data.characteristics.technique}` </Text>
            </View>
            /* Display associated ArtWorks
            <View>
              <ArtWorkThumbnail />
              <ArtWorkThumbnail />
              <ArtWorkThumbnail />
            </View>*/
        </View>;
        return view;


}

export default ArtWorkDetail;

const styles = StyleSheet.create(
    {
        templateContainer :
        {
            fontSize : 20,
        }
    }
);
