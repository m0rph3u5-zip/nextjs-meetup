import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetup</div>
      <nav className={classes.desktop}>
        <ul>
          <li>
            <Link href='/'>Tutti i meet</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Aggiungi un Meet</Link>
          </li>
        </ul>
      </nav>
      <nav className={classes.mobile}>
        <ul>
          <li>
            <Link href='/'>All</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
