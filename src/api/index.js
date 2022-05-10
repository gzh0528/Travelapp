import axios from "axios";

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '747d7741e4msh1edd18c9acc7760p1bcb48jsn69d2db43cf12'
    }
};

const getPlaceData=async (sw,ne)=>{
    try{
        const {data:{data}}=await axios.get(URL,{
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                'X-RapidAPI-Key': '747d7741e4msh1edd18c9acc7760p1bcb48jsn69d2db43cf12'
            }
        })
        return data;
    }
    catch (error)
    {
        console.log(error);
    }
}
export default getPlaceData;