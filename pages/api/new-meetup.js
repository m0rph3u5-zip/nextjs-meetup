import { connect, disconnect, meetupsCollection } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(500).json({ message: 'Request not processed!' });
  }

  await connect();
  const data = req.body;

  const token = data.token;
  if (!token || !process.env.TOKEN || token != process.env.TOKEN) {
    return res.status(500).json({ message: 'Request not processed!' });
  }

  await meetupsCollection.insertOne(data);
  disconnect();

  res.status(201).json({ message: 'Meetup inserted!' });
}
