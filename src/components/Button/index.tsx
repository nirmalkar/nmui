import React from 'react'
import '../../style/style.css'
interface ButtonProps {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="btn-primary">{children}</button>
}
