import { IUser } from "@/database/user.model";
import { Schema } from "mongoose";

export interface GetQuestionParams{
    page?:number ;
    pageSize?:number;
    searchQuery?:string;
    filter?:string;
}


export interface createQuestionParams{
    title:string;
    content:string;
    tags:string[];
    author:Schema.Types.ObjectId | IUser ;
    path: string ;
}

export interface CreateUserParams {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    picture: string;
  }


  export interface UpdateUserParams {
    clerkId: string;
    updateData: Partial<IUser>;
    path: string;
  }

  export interface DeleteUserParams {
    clerkId: string;
  }