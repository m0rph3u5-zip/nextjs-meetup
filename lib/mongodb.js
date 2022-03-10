import { MongoClient, ObjectId } from 'mongodb';

let meetupsCollection;
let client;
const connect = async () => {
  client = await MongoClient.connect('mongodb+srv://nextjs-test-app:dJCTcrGC5oWgyzec@ei-staging.76jxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
  const db = client.db();
  meetupsCollection = db.collection('meetups');
};

const disconnect = () => {
  client.close();
};

export { connect, disconnect, meetupsCollection, ObjectId };
