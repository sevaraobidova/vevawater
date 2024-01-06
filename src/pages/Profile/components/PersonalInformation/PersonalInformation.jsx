import React from 'react'
import Title from '../Title'
import UserInfo from './components/UserInfo'

export default function PersonalInformation() {
  return (
    <div className='mt-[50px]'>
      <Title text='Личная информация'/>
      <UserInfo/>
    </div>
  )
}
