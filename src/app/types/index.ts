import { Document } from "mongoose";

export type TTodo = {
  _id: string;
  title: string;
  isDone: boolean;
};

export type TTodoDocument = TTodo & Document;
