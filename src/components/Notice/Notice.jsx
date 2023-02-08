import React from 'react'

import notice from './notice.svg'
import './Notice.css'

export const Notice = () => {
  return (
    <div className='notice'>
      <div className="notice__text">
        Зона влажности — один из параметров, который учитывается при расчёте утеплителя. 
        Это территория со схожими влажностными характеристиками.
        <div className="notice__info">
          Обозначается цифрами от 1 до 3
        </div>
        Чем выше цифра — тем суше зона.
      </div>
      <img className="notice__img" src={notice} alt=''/>
    </div>
  )
}
