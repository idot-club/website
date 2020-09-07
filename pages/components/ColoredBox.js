import styles from './coloredbox.module.css';

export default function ColoredBox({ color, children }) {
  return (
    <div className={`${styles.coloredBox} ${styles[color]}`}>
      {children}
    </div>
  );
}
