import { Document } from "mongoose";

export type TTodo = {
  _id: string;
  title: string;
  isDone: boolean;
};

export type TTodoDocument = TTodo & Document;

export type TUser = {
  _id: string;
  username: string;
  email: string;
  token: string;
  salt: string;
  hash: string;
};

export type TUserDocument = TUser & Document;
