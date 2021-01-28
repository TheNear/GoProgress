import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";
import { SECRET } from "../core/config";

export interface UserObject {
  uid: ObjectId,
}

export const getUserFromJwt = (token: string): UserObject | null => {
  if (token) {
    try {
      const tokenValue = token.replace("Bearer ", "");
      const user = <UserObject>jwt.verify(tokenValue, SECRET);
      if (typeof user === "string") return null;
      return user;
    } catch {
      return null;
    }
  }

  return null;
};

export const createJwtFromUser = (userObject: UserObject): string => {
  return jwt.sign(userObject, SECRET);
};