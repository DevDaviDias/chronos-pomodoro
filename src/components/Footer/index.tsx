import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda a técnica pomodoro</a>
      <a href=" ">
        Chronos Pomodoro &copy; {new Date().getFullYear()} feito com amor 💚
      </a>
    </footer>
  );
}
