import React from 'react'
import '../../style/style.css'
interface ButtonProps {
  name?: string
}

export const Button: React.FC<ButtonProps> = ({ name }) => {
  return <button className="btn-primary">{name}</button>
}
