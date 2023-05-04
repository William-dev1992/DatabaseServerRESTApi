import jwt, { JwtPayload } from "jsonwebtoken";

export function decodeUserToken(token: string): string {
  const parsedToken = token.split(" ")[1];

  const { id } = jwt.verify(parsedToken, process.env.JWT_PASS) as JwtPayload;

  return id;
}
