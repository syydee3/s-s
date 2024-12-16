import React from 'react';
import './MyButton.module.css'

const MyButtom = ({children, ...props}) => {
  return (
    <button {...props}>{children}</button>
  );
};

export default MyButtom;