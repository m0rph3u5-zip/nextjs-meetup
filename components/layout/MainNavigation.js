import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Next.js Website</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Tutti i meet</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Aggiungi un Meet</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
