import React from 'react'
import { ButtonProps } from './Button.interface';
import { useNavigate } from 'react-router-dom';
import "./Button.css"

export const Button:React.FC<ButtonProps> = ({ titleButton, link, testID }) => {

  const navigate = useNavigate();

  return (
    <>
      <button
        className="Button"
        onClick={() =>  navigate(link)}
      >
        {titleButton}
      </button>
    </>
  )
}