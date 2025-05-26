import React from 'react'
import { Footer, NavBar } from '../../components'
import { Outlet } from 'react-router-dom'

export default function LandingPage({ colorScheme, toggleColorScheme }) {
  return (
    <div className="overflow-x-hidden">
      <NavBar colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}/>
      <Outlet />
      <Footer />
    </div>
  )
}
