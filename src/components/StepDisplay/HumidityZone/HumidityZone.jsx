import React, {useState, useEffect} from 'react'

import { CustomSelect } from '../../UI/CustomSelect/CustomSelect'
import { Display } from '../../Display/Display'
import { Notice } from '../../Notice/Notice'
import './HumidityZone.css'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const HumidityZone = ({humidityData}) => {

  console.log('humidityData', humidityData);

  const [districtList, setDistrictList] = useState({value: Object.keys(humidityData)})
  const [district, setDistrict] = useState({value: Object.keys(humidityData)})

  const [regionList, setRegionList] = useState()
  const [region, setRegion] = useState()


  const [localityList, setLocalityList] = useState()
  const [locality, setLocality] = useState()

  const prepareSelectsData = (data) => {
    return data?.map(dist => ({value: dist, label: dist}))
  }

  useEffect(() => {
    const preparedDistrict = prepareSelectsData(Object.keys(humidityData));
    setDistrictList(preparedDistrict)
  }, [humidityData])
  
  useEffect(() => {
    const regionBySelectDistrict = humidityData[district?.value];
    const prapereRegion = prepareSelectsData(Object.keys(regionBySelectDistrict || {}));
    setRegionList(prapereRegion);
  }, [district])

  useEffect(() => {
    const regionBySelectDistrict = humidityData[district?.value];
    const localityBySelectRegion = regionBySelectDistrict ? regionBySelectDistrict[region?.value] : {};
    const prapereLocality = prepareSelectsData(Object.keys(localityBySelectRegion || {}));

    console.log('prapereLocality', prapereLocality);
    setLocalityList(prapereLocality);
  }, [district, region])


  // ToDo гоода хранятся в массиве, а не в объекте. 
  // Надо переделать под объект, так как там будет ещё и параметр влажности
  console.log('locality', locality);

  return (
    <div className='humidiate-zone'>

      <div className="humidiate-zone__select-wrapper">
        <div className="humidiate-zone__select">
          <CustomSelect options={districtList} onChange={(choice)=>setDistrict(choice)}/>
        </div>
        <div className="humidiate-zone__select">
          <CustomSelect options={regionList} onChange={(choice)=>setRegion(choice)}/>
        </div>
        <div className="humidiate-zone__select">
          <CustomSelect options={localityList} onChange={(choice)=>setLocality(choice)}/>
        </div>
      </div>

      <div className="humidiate-zone__display">
        <Display text={'Зона влажности для вашего населённого пункта'}>
          <Notice>
            <div className="display__notice-wrapper">
              Зона влажности — один из параметров, который учитывается при расчёте утеплителя. 
              Это территория со схожими влажностными характеристиками.
              <div className="display__notice-info">
                Обозначается цифрами от 1 до 3
              </div>
              Чем выше цифра — тем суше зона.  
            </div>
          </Notice>
        </Display>
      </div>
    </div>
  )
}
