import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "../../../../components/ui/card"
  import wave from '../../../../assets/images/cardWave.svg'
  

export default function AboutCard(props) {
  return (
    <Card className={props.class}>
       <CardHeader>
        <CardTitle className='text-[18px]'>{props.title}</CardTitle>
        </CardHeader>
        <CardContent>
        <img src={wave} alt="wave"/>
        <p className='pt-4 text-[14px] font-thin'>{props.description}</p>
        </CardContent>
    </Card>
  )
}