import { Schema, model, Document, ObjectId } from "mongoose";
import { IUserSchema } from "./userModel";


export interface IGroupShema extends Document {
  _uid: ObjectId,
  name: string,
  owner: IUserSchema["_id"],
}

const chatMessageSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  chat: [chatMessageSchema],
});

export const groupModel = model<IGroupShema>("groups", GroupSchema);
