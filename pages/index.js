import Head from 'next/head';
import { connect, disconnect, meetupsCollection } from '../lib/mongodb';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Best Manager Meetup</title>
        <meta name='description' content='Un nuovo modo di fare E-Commerce!' />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  await connect();
  const meetups = await meetupsCollection.find().toArray();
  disconnect();

  const truncateText = (text) => text.substring(0, 150);

  return {
    props: {
      meetups: meetups.map((meet) => ({
        title: meet.title,
        address: meet.address,
        description: truncateText(meet.description),
        image: meet.image,
        id: meet._id.toString(),
      })),
    }
  };
}

export default HomePage;
