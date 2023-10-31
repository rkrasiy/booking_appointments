import { MongoClient } from "mongodb"
import { User } from "next-auth"

const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@booking.fj1gn6h.mongodb.net/${process.env.mongodb_db}?retryWrites=true&w=majority`

export async function connectToDB() {
  const client = await MongoClient.connect(uri)

  return client
}

type Params = (params: Record<string, string>) => Promise<User | null>

export const getUser: Params = async (params) =>{
  const client = await connectToDB();
  try{
    const usersCollection = client.db().collection("users")
    const user = await usersCollection.findOne(params) as unknown as User
    return user
  }catch(error){
    console.log(error)
    return null
  }finally{
    client.close()
  }
}