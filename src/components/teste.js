import React ,{useState, useEffect} from 'react';
import api from '../api/Api'

const Teste = () => {
    const [data,setData] = useState('');
    useEffect(() => {
        const res = async () => await api.get('/brazil/uf/sp').then((response) =>  setData(response.data))
        res();
    },[]);
  

    return (
        <p>{data.cases}</p>
    )
}

export default Teste