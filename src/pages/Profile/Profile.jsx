import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Profile() {
  return (
    <div>
      <h1>profile</h1>
      <Outlet/>
    </div>
  )
}