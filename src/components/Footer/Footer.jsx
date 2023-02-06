import React from 'react'

import { CustomButton, BTN_TYPE_MAP } from '../UI/CustomButton/CustomButton'
import './Footer.css'
import noticeIcon from './notice-icon.svg'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__notice">
          <img src={noticeIcon} alt="" className="footer__notice-icon" />
          <p className="footer__text">
            Все расчёты являются справочными и не заменяют теплотехнического
            расчёта ограждающих конструкций, произведённого специалистами
          </p>
          
      </div>
      <div className="footer__change-btn">
        <CustomButton type={BTN_TYPE_MAP.back} text='Назад' isDisabled={true} />
        <CustomButton type={BTN_TYPE_MAP.continue} text='Далее' />
      </div>
    </div>
  )
}
