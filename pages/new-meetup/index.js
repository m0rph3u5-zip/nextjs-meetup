import router from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const addMeetupHandler = async (newMeetupData) => {
    const response = await fetch('api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(newMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (!confirm("Impossibile procedere al salvataggio del meet, accesso negato! Tornare indietro?")) {
        return;
      }
    } else {
      await response.json();
    }

    router.push('/');
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
