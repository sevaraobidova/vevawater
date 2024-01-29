import React from 'react'
import { Button } from '../../ui/button'
import { Link } from 'react-router-dom'

export default function MyButton({backgroundColor, link, type, children, ...props}) {
  const buttonClasses = ({
        'bg-white text-black font-light': backgroundColor === 'white',
        'bg-black text-white': !backgroundColor,
      });
  return (
      <Button asChild className={buttonClasses} type={type} {...props}><Link to={link}>{children}</Link></Button>
  )
}


// EXAMPLE OF USAGE !!!

// BUTTON WITH BLACK BACKGROUND:

// <MyButton link='type here your link address'>Заказать воду</MyButton>

// IF YOU NEED BUTTON WITH WHITE BACKGROUND:

// <MyButton link='type here your link address' backgroundColor='white'>Заказать воду</MyButton>
