import React from 'react';
import styles from './button.module.scss';

interface ButtonInterface {
  children?: React.ReactNode,
  onClick?: () => void,
}

const Button = (props: ButtonInterface) => {
  return <button onClick={props.onClick} className={styles.wrapButton} >{props.children}</button>;
}


export default Button;