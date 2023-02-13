import classes from './MeetupDetails.module.css';

import MyImage from '../layout/MyImage';

function MeetupDetails(props) {
  return (
    <section className={classes.details}>
      <MyImage src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetails;
