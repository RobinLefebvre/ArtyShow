import { SQLite } from 'expo';

const Utility = 
{
    DATABASE_URL : 'http://riad.ovh:6660/', //'riad.ovh:6660/', //'http://infinity-demo.ovh/',
    db : SQLite.openDatabase('db.db'),

    userIsLoggedIn : () => 
    {
        let res = db.transaction(tx => 
        {
            tx.executeSql(
                `select * from user;`,
                [],
                (_, { rows }) => console.log(JSON.stringify(rows))
            );
        });
        return res; 
    }
}

export default Utility;