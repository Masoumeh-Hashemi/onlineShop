
 import { Collection, DocumentType } from "https://deno.land/x/mongo@v0.12.1/ts/collection.ts"
import { Context } from "https://deno.land/x/oak@v6.3.1/context.ts"

 export async function create<T>(collectionName:Collection<T>,value:DocumentType<T>) {

  try{
    const creation = await collectionName.insertOne(value)
    return creation
  }
  catch(error){
    console.log(error)

  }
 } 