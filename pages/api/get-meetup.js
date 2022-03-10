import { connect, disconnect, meetupsCollection } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'Request not processed!' });
  }

  await connect();
  const meetupId = req.query.meetupId;
  console.log(meetupId);

  const result = await meetupsCollection.findOne(meetupId);
  disconnect();
  console.log(result);

  if (!result) {
    res.status(404).json({ message: 'File not found!' });
  }

  res.status(201).json({ meetup: JSON.stringify(result) });
}
