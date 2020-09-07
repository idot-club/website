import styles from './divider.module.css';

export default function Divider({ color }) {
  return (
    <hr className={`${styles.divider} ${styles[color]}`} />
  );
}
