import { MongoClient, ObjectId } from 'mongodb';

let meetupsCollection;
let client;
const connect = async () => {
  console.log(process.env.MONGODB);
  client = await MongoClient.connect(process.env.MONGODB);
  const db = client.db();
  meetupsCollection = db.collection('meetups');
};

const disconnect = () => {
  client.close();
};

export { connect, disconnect, meetupsCollection, ObjectId };
