import React ,{useState, useEffect} from 'react';
import api from '../api/Api'

const Atual = () => {
    const [data,setData] = useState('');
    useEffect(() => {
        const res = async () => await api.get('/brazil/uf/sp').then((response) =>  setData(response.data))
        res();
      },[]);

    return (
        <>
            <h1>Casos atual {data.state}</h1>
            <p>Casos Confirmados: {data.cases}</p>
            <p>Casos Suspeitos: {data.suspects}</p>
            <p>Mortes: {data.deaths}</p>
        </>
    )
}

export default Atual;