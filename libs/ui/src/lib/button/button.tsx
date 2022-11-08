import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  id: string
}

export function Button(props: ButtonProps) {
  return (
    <button className={styles['container']}>
    Primary Button
    </button>
  );
}

export default Button;
