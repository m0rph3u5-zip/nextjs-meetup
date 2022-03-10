import { connect, disconnect, meetupsCollection } from '../utils/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(500).json({ message: 'Request not processed!' });
  }

  await connect();
  const data = req.body;
  const result = await meetupsCollection.insertOne(data);
  console.log(result);
  disconnect();

  res.status(201).json({ message: 'Meetup inserted!' });
}
