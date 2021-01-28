import { Schema, model, Document, ObjectId } from "mongoose";
import { IGroupShema } from "./groupModel";

export interface IUserSchema extends Document {
  _id: ObjectId,
  name: string,
  email: string,
  group: IGroupShema["_id"],
  password: string,
  emailVerify: boolean,
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: "groups",
    },
    password: {
      type: String,
      required: true,
    },
    emailVerify: {
      type: Boolean,
      required: true,
      default: false
    }
  }
)

export const userModel = model<IUserSchema>("users", UserSchema);