import React from 'react'
import AboutCard from './AboutCard'

export default function AboutGrid() {
    const cardData = [
        {
            title:'Максимальная чистота' ,
            description: "Наша вода проходит через двойной процесс очистки - обратный осмос и ультрафильтрация. Это означает, что каждая капля, которую вы пьете, свободна от примесей и загрязнений.",
            class: 'col-span-2'
        },
        {
            title:'Бесплатная доставка в Ташкенте' ,
            description: 'Доступная свежая вода в удобное для вас время в течении 24 часов.'
        },
        {
            title:'Минимальный заказ' ,
            description: 'Всего 3 бутыля - это наш ответ на потребности семей. Это значит, что у вас всегда есть запас воды.'
        },
        {
            title:'Без предоплаты, вы платите только за воду!' ,
            description: 'Мы не берем с вас предоплату за бутыли, потому что верим, что вместе мы заботимся о нашей планете. Каждая бутыль, которую вы вернете, помогает нам в устойчивой переработке. Ваш выбор имеет значение - для вас, для нас и для будущих поколений.',
            class: 'col-span-2'
        },
    ]
  return (
    <div className='grid grid-cols-2 grid-rows-3 gap-3 w-[73%]'>
      {
        cardData.map((item, i)=> (<AboutCard key={i} title={item.title} description={item.description} class={item.class}/>))
      }
    </div>
  )
}