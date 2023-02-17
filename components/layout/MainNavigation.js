import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>BestBe</div>
      <nav className={classes.desktop}>
        <ul>
          <li>
            <Link href='/'>Prodotti</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Nuova Pagina</Link>
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
