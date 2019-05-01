class Oeuvre 
{
    constructor(serverData)
    {
        this.name = serverData.name || "Post Name";
        this.date = serverData.date || Date.now() ;
        this.author = serverData.author || "Author Name";
        this.likes = serverData.likes || 0;
        this.content = serverData.content || "There is no text in this post.";
        this.uri = serverData.uri || "https://cdn.taschen.com/custom/taschen/includes/phpThumb/phpThumb.php/q=70;f=jpg;1540;/media/images/1640/ko_van_gogh_hc_opener_45472_1510231647_id_1008551.jpg";
    }
}

export default Oeuvre;