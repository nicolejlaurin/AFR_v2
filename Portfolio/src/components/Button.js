import React from 'react';
import './Button.css';
import { Link }  from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']; //arr for different sizes of buttons in app
const SIZES = ['btn--medium', 'btn--large']; // arr for different sizes that we can apply to button

export const Button = ({ children, type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[0];

  return(
    <Link to='/contactpage' className='btn-mobile'>
      <button
          className={'btn ${checkButtonStyle} ${checkButtonSize}'}
          onClick={onClick}
          type={type}
      >
        {children}
      </button>

    </Link>
  )
};
