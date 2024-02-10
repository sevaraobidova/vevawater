import React from 'react'
import Title from '../Title'
import UserInfo from './components/UserInfo'
import LegalInfo from './components/LegalInfo'
import InformationCards from '/src/pages/Home/components/InformationCards/InformationCards'

export default function PersonalInformation() {
  return (
    <div className='mt-[50px] sm:mt-[25px]'>
      <Title text='Личная информация'/>
      <UserInfo/>
      <LegalInfo/>
    </div>
  )
}
