import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ProfileTabs from './components/ProfileTabs.jsx/ProfileTabs'

export default function Profile() {
  return (
    <div className='container mx-auto'>
      <h1>profile</h1>
      <ProfileTabs/>
      <Outlet/>
    </div>
  )
}