import React from 'react'
import Header from './header'

function Layout({children}) {
  return (
    <div className='overflow-visible'>
    <Header/>
    {children}
    </div>
  )
}

export default Layout