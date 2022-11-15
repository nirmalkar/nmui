import React from 'react'
import '../../style/style.css'
interface IceCreamProps {
  children: React.ReactNode
}

export const IceCream: React.FC<IceCreamProps> = ({ children }) => {
  return <div className="icecream-container">Ice cream</div>
}
