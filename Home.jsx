import {Box,styled} from '@mui/material';
import sunset from '../assests/images/bg.jpg';
import Information from '../component/Information';
import Form from '../component/Form';
import { useState } from 'react';


const Componant = styled(Box)({
    height : '100vh',  // 100 vh means full screen
    display : 'flex',
    alignItems: 'center',
    margin : '0 auto',   // this will give horizontal alignment
    width : '65%',
    background: '#EEF5FF'
})


const Image = styled(Box)({
    backgroundImage: `url(${sunset})`,
    width : '27%',
    height: '80%',
    backgroundSize : 'cover',  // this will adjust image and show all part of image
    borderRadius : '20px 0 0 20px'
})

const Home = ()=>{

    const [result, setresult] = useState({});
    return (
        <Componant>
            <Image>
            </Image>

            <Box style = {{width : '73%', height :'80%' }}>
                 <Form setresult = {setresult}/>
                 {/* form ek component hai aur agar aap kisi bhi component me input pass karte hai to prop ke jais pass karte */}
                 <Information result = {result}/>  
                 {/* sara data setresult se result me aa gaya hai to fir hum isse information me pass kar denge */}
            </Box>
        </Componant>
    )
}

export default Home;