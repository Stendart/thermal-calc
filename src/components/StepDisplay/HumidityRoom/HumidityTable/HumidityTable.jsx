import React from 'react'

import './HumidityTable.css'
import { tableData } from './table-data'

export const HumidityTable = () => {
  return (
    <table className='humidity-table'>
      <thead className='humidity-table__head'>
        <tr>
          <th className='humidity-table__cell' rowSpan="2">Режим</th>
          <th className='humidity-table__cell' colSpan='3'>Влажность внутреннего воздуха, %, при температуре, °С</th>
        </tr>
        <tr>
          <th className='humidity-table__cell'>до 12</th>
          <th className='humidity-table__cell'>свыше 12 до 24</th>
          <th className='humidity-table__cell'>свыше 24</th>
        </tr>
      </thead>
      <tbody className='humidity-table__body'>
        { 
          tableData.map(row => (
            <tr key={row.mode}> 
              <td className='humidity-table__cell'>{ row.mode }</td>
              <td className='humidity-table__cell'>{ row.t1 }</td>
              <td className='humidity-table__cell'>{ row.t2 }</td>
              <td className='humidity-table__cell'>{ row.t3 }</td>
            </tr>
          )) 
        }
      </tbody>
    </table>
  )
}
