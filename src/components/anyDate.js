import React ,{useState, useEffect} from 'react';
import api from '../api/Api'
// import DatePicker from 'react-datepicker'
import DatePicker from 'react-date-picker'

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate()),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const AnyDate = () => {
    const [data,setData] = useState('');
    const [date1,setDate1] = useState(new Date('2020-05-18'));

    useEffect(() => {

        let auxDate1 = formatDate(date1).replace(/-/g, "")
        const res = async () => await api.get(`/brazil/${auxDate1}`).then((response) =>  {setData(response.data.data[19])})
        res();
      },[date1]);

    function inverter() {
        return formatDate(date1).split('-').reverse().join('/');
    }


    return (
        <>
            <h1>Casos na data {inverter()}</h1>
            <DatePicker 
                value={date1}
                onChange={date => setDate1(date)}
            />
            {data ?
            <>
                <p>Casos Confirmados: {data.cases}</p>
                <p>Casos Suspeitos: {data.suspects}</p>
                <p>Mortes: {data.deaths}</p>
            </>
            :
                <p>Não existe relatório para essa data.</p>
            }
        </>
    )
}

export default AnyDate;