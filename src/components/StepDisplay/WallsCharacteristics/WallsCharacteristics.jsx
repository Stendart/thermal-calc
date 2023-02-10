import React from 'react'

import { CustomSelect } from '../../UI/CustomSelect/CustomSelect'
import { Display } from '../../Display/Display'
import { Notice } from '../../Notice/Notice'
import { CustomInput } from '../../UI/CustomInput/CustomInput'

import './WallsCharacteristics.css'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const WallsCharacteristics = () => {
  return (
    <div className='walls-characteristic'>
      <div className="walls-characteristic__selects">
        <div className="walls-characteristic__select-item">
          <CustomSelect options={options} />
        </div>
        <div className="walls-characteristic__select-item">
          <CustomSelect options={options} />
        </div>

        <div className="walls-characteristic__select-group">
          <div className="walls-characteristic__group-item">
            <CustomSelect options={options} />
          </div>
          <div className="walls-characteristic__group-item">
            <CustomInput placeholder={'Толщина стены, мм'} />
          </div>
        </div>
      </div>
      <div className="walls-characteristic__displays">
        <div className="walls-characteristic__display-item-wrapper">
          <Display 
            text={'Расчётный коэффициент теплопроводности'} 
            className={'walls-characteristic__display-item'}
          >
            <Notice>
              <div className="walls-characteristic__notice">
                Теплопроводность — способность более нагретого материала передавать 
                тепло менее нагретому. Чем выше этот показатель, тем больше тепловой 
                энергии способен передать или отдать материал в единицу времени.
              </div>
            </Notice>
          </Display>
        </div>
        <div className="walls-characteristic__display-item-wrapper">
          <Display 
            text={'Расчётный коэффициент паропроницаемости'} 
            className={'walls-characteristic__display-item'}
          >
            <Notice>
              <div className="walls-characteristic__notice">
                <p className="walls-characteristic__notice-paragraph">
                  Паропроницаемость — способность материала пропускать 
                  (или задерживать внутри себя) пар.
                </p>
                <p className="walls-characteristic__notice-paragraph">
                  Высокая паропроницаемость говорит о том, что материал «дышащий», 
                  он легко пропускает пар. Низкая — о паронепроницаемости.
                </p>
              </div>
            </Notice>
          </Display>
        </div>
      </div>

    </div>
  )
}
