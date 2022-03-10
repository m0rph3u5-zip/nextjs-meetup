import { MongoClient, ObjectId } from 'mongodb';

let meetupsCollection;
let client;
const connect = async () => {
  client = await MongoClient.connect('mongodb://127.0.0.1:27017/Meet');
  const db = client.db();
  meetupsCollection = db.collection('meetups');
};

const disconnect = () => {
  client.close();
};

export { connect, disconnect, meetupsCollection, ObjectId };
