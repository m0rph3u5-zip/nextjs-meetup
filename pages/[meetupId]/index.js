import Head from 'next/head';
import {
  connect,
  disconnect,
  meetupsCollection,
  ObjectId,
} from '../../lib/mongodb';
import MeetupDetails from '../../components/meetups/MeetupDetails';

const MeetupDetailsPage = (props) => {
  const truncateText = (text) => text.substring(0, 255);

  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name='description'
          content={truncateText(props.meetupData.description)}
        />
      </Head>
      <MeetupDetails
        title={props.meetupData.title + ' ' + props.meetupData.id}
        img={props.meetupData.img}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  await connect();
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  disconnect();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  await connect();
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  disconnect();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        img: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
    revalidate: 1,
  };
}

export default MeetupDetailsPage;
