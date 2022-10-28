import sqlite3 from "sqlite3";

export class GetUserUseCase {
  constructor(
    private db = new sqlite3.Database('C:\Users\willi\OneDrive\Documentos\GitHub\DatabaseServerRESTApi\src\db\Users.db')
  ) { }

  async execute({ email }) {
    const query = 'SELECT * FROM USERS WHERE USERS.EMAIL = ?';

    try {
      const user = await this.getPromise(query, email);
      return user
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  getPromise(query: string, param: string) {
    return new Promise((resolve, reject) => {

      this.db.get(query, param, (err, row) => {
        if (err) {
          reject(err);
        }

        resolve(row);
      })
    })
  }
}