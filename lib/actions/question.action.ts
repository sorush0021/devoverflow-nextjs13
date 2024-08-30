"use server"

import { connectToDatabse } from "../mongoose"
export async function createQuestion(params:any) {

    
    try {
        connectToDatabse();

        
    } catch (error) {
        
    }
    
}