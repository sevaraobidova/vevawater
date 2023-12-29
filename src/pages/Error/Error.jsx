import React from 'react'

export default function Error() {
  return (
    <div className='flex flex-col justify-center items-center gap-[30px] my-[80px] text-blue'>
      <h1 className='text-[10rem]'>404</h1>
      <p className='text-[2rem] animate-bounce'>Страница не найдена!</p>
    </div>
  )
}
