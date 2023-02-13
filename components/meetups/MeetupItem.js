import { useRouter } from 'next/router';

import Card from '../ui/Card';
import MyImage from '../layout/MyImage';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/${props.id}`);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <MyImage src={props.image} alt={props.title} width={600} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Visualizza</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
