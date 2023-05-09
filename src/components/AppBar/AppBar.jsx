import { Link } from 'react-router-dom';
import styles from './AppBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.appBar}>
      <Link to="/" className={styles.link}>
        Home
      </Link>

      <Link to="/tweets" className={styles.link}>
        Tweets
      </Link>
    </div>
  );
};

export default NavBar;
