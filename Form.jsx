
import { Box, InputBase, Button, styled } from '@mui/material'
import { useState } from 'react';
import { getWeather } from '../Service/Api';



const Containr = styled(Box)({
    background: '#445A6F',
    padding: 10

})

const Inputbasecss = styled(InputBase)({
    color: '#FFF',
    marginRight: 20,
    fontSize: 18
})

const Buttoncss = styled(Button)({
    background: '#e67e22'
})



const Form = ({setresult}) => {

    // const [data, setData] = useState({ cityname: '', countrycode: '' });
    const [data, setData] = useState('');
    const [code,setcode]=useState('');

    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });  // jab bhi hum koi key value ko setdata ke andar use karte hai to square bracket ke andar likhte hai
        // console.log(data);
    }

    const getweatherinfo = async ()=>{
         let response = await getWeather(data , code);  
           // you have data as a object in which city and country are key of this and you can access 
           setresult(response);
    }
    return (
        <Containr>
            <Inputbasecss
                placeholder='Cityname'
                value={data}
                // onChange={(e) => handlechange(e)}
                onChange={(e)=>{setData(e.target.value)}}
                name="City" />

            {/* we use name property for differentiating city and country */}

            <Inputbasecss
                placeholder='Countrycode'
                value={code}
                onChange={(e) => {setcode(e.target.value)}}
                name="Country" />

            <Buttoncss variant='contained'
             onClick={ ( )=> getweatherinfo()}
             > Get Weather </Buttoncss>
        </Containr>
    )
}

export default Form