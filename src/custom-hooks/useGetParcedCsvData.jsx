import { useState, useEffect } from 'react';
import { usePapaParse } from 'react-papaparse';

export const useGetParcedCsvData = (filePath) => {
  const { readString } = usePapaParse();
  const [humdityZone, setHumdityZone] = useState();
  
  useEffect(() => {
    const getParcedCsvData = async () => {
      const response = await fetch(filePath);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      const parcedCsv = readString(csv)
      setHumdityZone(parcedCsv)
    }
    getParcedCsvData();
  }, [])

  return humdityZone
}