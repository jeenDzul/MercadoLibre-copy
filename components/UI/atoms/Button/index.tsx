import React from 'react';
import styles from './styles.module.scss';



type Color = 'default' | 'primary' | 'secondary';

type ButtonProps = {
  color?: Color,
  disabled?: boolean,

  children?: React.ReactNode,
  onClick?: () => void,
}


const Button = (props: ButtonProps) => {

  const color = {
    'primary': styles.btnPrimary,
    'secondary': styles.btnSecondary,
  };

  const typeColor = color[props.color] ?? styles.btnPrimary;

  return (
    <button
      onClick={() => {
        if (props?.disabled || !props?.onClick) {
          return;
        }
        return props.onClick();
      }}
      className={`${styles.wrapButton} ${typeColor} ${props.disabled && styles.btnDisabled} `}>
      {props.children}
    </button>
  );
}



export default Button;