/** Users is the model for the Users table in the Database */
class Users 
{
    constructor(serverData)
    {
        this.name = serverData.title || "Post Name";
        this.email = serverData.dateCreation || Date.now() ;
    }

    static getFromServer()
    {
        
    }
}

export default Artworks;