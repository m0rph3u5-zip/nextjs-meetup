import Head from 'next/head';
import { connect, disconnect, meetupsCollection } from './utils/mongodb';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Nextjs Meet Website</title>
        <meta
          name='description'
          content='crea i tuoi meet in modo semplice e veloce!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  await connect();
  const meetups = await meetupsCollection.find().toArray();
  disconnect();

  return {
    props: {
      meetups: meetups.map((meet) => ({
        title: meet.title,
        address: meet.address,
        image: meet.image,
        id: meet._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
