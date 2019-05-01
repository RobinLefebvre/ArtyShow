/** ArtWorks is the model for the ArtWork table in the Database */
class Artworks 
{
    constructor(serverData)
    {
        this.title = serverData.title || "Post Name";
        this.dateCreation = serverData.dateCreation || Date.now() ;
        this.author = serverData.author || "Author Name"; // new Artist(serverData.author)
        this.likes = serverData.likes || 0;
        this.content = serverData.content || "There is no text in this post.";
        this.imageUrl = serverData.imageUrl || "https://cdn.taschen.com/custom/taschen/includes/phpThumb/phpThumb.php/q=70;f=jpg;1540;/media/images/1640/ko_van_gogh_hc_opener_45472_1510231647_id_1008551.jpg";
    }

    static getFromServer()
    {
        
    }
}

export default Artworks;