import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "../ui/card"
  import wave from '../../assets/images/wave.svg'
  

export default function AboutCard(props) {
  return (
    <Card className={props.class}>
       <CardHeader>
        <CardTitle className='text-[1.6rem]'>{props.title}</CardTitle>
        </CardHeader>
        <CardContent>
        <img src={wave} alt="wave"/>
        <p className='pt-4 text-[1.3rem] font-thin'>{props.description}</p>
        </CardContent>
    </Card>
  )
}