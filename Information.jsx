import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud, Cyclone, Visibility } from '@mui/icons-material';
import styled from '@emotion/styled';
import { red } from '@mui/material/colors';

const Row = styled(Typography)({
    padding : 10,
    fontsize  : 20,
    letterSpacing : 2,
    '& > svg' : {
        marginRight : 10
    }
})


    const Errorcss = styled(Typography)({
        color : 'red',
        margin : 50,
        padding : 20

    })


const Information = ({ result }) => {
    return (
        result && Object.keys(result).length > 0 ?
            <Box style = {{margin : '30px 60px'}}>
                <Row><LocationOn /> Location : {result.name},{result.sys.country} </Row>
                <Row><SettingsBrightness />Temperature :  {result.main.temp} </Row>
                <Row><Opacity /> Humidity : {result.main.humidity} </Row>
                <Row> <Brightness5 /> Sunrise :{new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
                <Row> <Brightness6 /> Sunset : {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
                <Row> <Dehaze /> Humidity : {result.weather[0].main}</Row>
                <Row> <Cloud /> Clouds : {result.clouds.all}%</Row>
                <Row> <Cyclone /> Wind Speed :  {result.wind.speed}</Row>
            </Box>
            : <Errorcss>Please enter the value to check the weather</Errorcss>
    )
}

export default Information