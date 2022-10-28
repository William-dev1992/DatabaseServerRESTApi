import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('C:\Users\willi\OneDrive\Documentos\GitHub\DatabaseServerRESTApi\src\db\Users.db', error => {
  if (error) {
    console.log(error);
    return;
  }

  db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS USERS (ID INTEGER PRIMARY KEY, EMAIL TEXT, PASSWORD TEXT)', error => {
      if (error) {
        console.log(error);
        return;
      }
      db.run('INSERT INTO USERS (ID, EMAIL, PASSWORD) values (?, ?, ?)', [1, 'william@will.com', 'senhaforte'],error => {
        if (error) {
          console.log(error);
          return;
        }
      });
    });
  })
});