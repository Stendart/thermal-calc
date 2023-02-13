import React, { useState } from 'react'

import { Display } from '../../Display/Display'
import { Notice } from '../../Notice/Notice'
import { CustomRadioBtn } from '../../UI/CustomRadioBtn/CustomRadioBtn'

import './Brand.css'

export const Brand = () => {
  const [brandType, setBrandType] = useState(1);

  const clickHandler = (selectId) => {
    setBrandType(selectId);
  }

  return (
    <div className='brand'>
      <div className="brand__group">
        <h3 className="brand__group-title">Выберите марку фасадного пенополистирола</h3>
        <div className="brand__group-wrapper">
          <div className="brand__radio-wrapper">
            <CustomRadioBtn 
              isSelected = {brandType === 1} 
              onClick={clickHandler} 
              selectId={1}
              className={'brand__radio'}
            >
              ППС 13Ф
            </CustomRadioBtn>
          </div>
          <div className="brand__radio-wrapper">
            <CustomRadioBtn 
              isSelected = {brandType === 2} 
              onClick={clickHandler} 
              selectId={2}
              className={'brand__radio'}
            >
              ППС 16Ф
            </CustomRadioBtn>
          </div>
        </div>
      </div>

      <div className="brand__group">

        <div className="brand__display-wrapper">
          <Display 
            className={'brand__display'} 
            text={'Прочность на сжатие, кПА'}
          >
            <Notice>
              <div className="brand__notice-wrapper">
                Прочность на сжатие — показатель давления, которое способен выдержать материал. Чем выше показатель, тем более прочен материал. 
              </div>
            </Notice>
          </Display>
        </div>

        <div className="brand__display-wrapper">
          <Display 
            className={'brand__display'} 
            text={'Предел прочности при изгибе, кПа, Вт/(м·К)'}
          >
            <Notice>
              <div className="brand__notice-wrapper">
                Предел прочности при изгибе — максимальное напряжение, которое может выдержать материал при изгибе до разрушения. Высокий показатель говорит о прочности материала. Низкий — о хрупкости.
              </div>
            </Notice>
          </Display>
        </div>

        <div className="brand__display-wrapper">
          <Display 
            className={'brand__display'} 
            text={'Теплопроводность при 10±1°С'}
          >
            <Notice>
              <div className="brand__notice-wrapper">
                Теплопроводность — способность более нагретого материала передавать тепло менее нагретому. Чем выше этот показатель, тем больше тепловой энергии способен передать или отдать материал в единицу времени.
              </div>
            </Notice>
          </Display>
        </div>

        <div className="brand__display-wrapper">
          <Display 
            className={'brand__display'} 
            text={'Теплопроводность при 25±5°С, Вт/(м·К)'}
          >
            <Notice>
              <div className="brand__notice-wrapper">
                Теплопроводность — способность более нагретого материала передавать тепло менее нагретому. Чем выше этот показатель, тем больше тепловой энергии способен передать или отдать материал в единицу времени.
              </div>
            </Notice>
          </Display>
        </div>

        <div className="brand__display-wrapper">
          <Display 
            className={'brand__display'} 
            text={'Влажность, % по массе'}
          >
            <Notice>
              <div className="brand__notice-wrapper">
                Влажность по массе — это соотношение массы влаги, которая находится в образце в естественно-воздушных условиях, к массе этого образца в сухом состоянии. Чем ниже показатель, тем «суше» материал.
              </div>
            </Notice>
          </Display>
        </div>


        <div className="brand__display-wrapper">
          <Display 
            className={'brand__display'} 
            text={'Водопоглощение при длительном полном погружении, % по объему'}
          >
            <Notice>
              <div className="brand__notice-wrapper">
                Водопоглощение — способность материала впитывать и удерживать воду. Высокая способность к водопоглощению может ухудшить теплоизоляционные свойства материала.
              </div>
            </Notice>
          </Display>
        </div>

      </div>
    </div>
  )
}
