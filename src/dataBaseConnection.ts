import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('./db/Users.sqlite', error => {
  if (error) {
    console.log(error);
    return;
  }

  db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS USERS (ID INTEGER PRIMARY KEY, NAME TEXT)', error => {
      if (error) {
        console.log(error);
        return;
      }
      db.run('insert into people (id, name) values (1, william)', error => {
        if (error) {
          console.log(error);
          return;
        }
      });
    });
  })
});