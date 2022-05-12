import axios from "axios";

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const getPlaceData=async (type,sw,ne)=>{
    try{
        console.log('https://travel-advisor.p.rapidapi.com/'+String(type)+'/list-in-boundary');
        const {data:{data}}=await axios.get('https://travel-advisor.p.rapidapi.com/'+type+'/list-in-boundary',{
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