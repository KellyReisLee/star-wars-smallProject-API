import React from 'react'
import starWars from '../../assets/star-wars.jpeg'
import './Header.css'

const Header = () => {
  return (
    <header >
      <img src={starWars} alt='Star Wars logo' />
    </header>
  )
}

export default Header
