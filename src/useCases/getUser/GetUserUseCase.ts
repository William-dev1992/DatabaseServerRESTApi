import { IUsersRepository } from "../../repositories/IUserRespository";
import sqlite3 from "sqlite3";
// import { jw } from "jsonwebtoken"

export class GetUserUseCase {
  constructor(
  ) { }

  async execute({ email }) {
    let user = null;

    const db = new sqlite3.Database('./db/Users.sqlite');

    db.get(`SELECT * FROM USERS WHERE users.email = ? `, [email], (error, row) => {
      if (error) {
        return console.log(error);
      }
      user = row
      return
    });

    if (!user) {
      console.error('User not found.')
    }

    return user
  }
}