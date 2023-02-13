
export const usePrepareData = (dataArrays) => {

  /*
  Преобразование двумерного массива, полученного из csv в массив объектов по типу
  {
    district1: {
      region1 : [locality, locality, ...],
      region2 : [locality, locality, ...],
    },
    district2: {
      region1 : [locality, locality, ...],
      region2 : [locality, locality, ...],
    },
  }
  */

  const parcedObject = {}

  dataArrays?.forEach(array => {
    if(parcedObject[array[0]]) {
      if(parcedObject[array[0]][array[1]]) {
        parcedObject[array[0]][array[1]] = [...parcedObject[array[0]][array[1]], array[2]]
      } else {
        parcedObject[array[0]] = {...parcedObject[array[0]], [array[1]]: [array[2]]}
      }
    } else {
      parcedObject[array[0]] = {[array[1]]: [array[2]]}
    }
  })
  return parcedObject;
}