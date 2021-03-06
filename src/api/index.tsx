import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


export const fetchData = async (country:any) => {
    let changeableUrl = url;

    
    if(country) {
        changeableUrl = `${url}/countries/${country}`
    }

     
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);

        var confirmedData=confirmed.value;
        console.log(confirmedData)

        var recoveredData=recovered.value;
        console.log(recoveredData)

        var deathsData=deaths.value;
        console.log(deathsData)

        var lastUpdateData=lastUpdate.value;
        console.log(lastUpdateData)


    return {confirmedData, recoveredData, deathsData, lastUpdateData,}
    } catch (error) {
        console.log(error);
    }
    
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData:any) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}
export const fetchCountries  = async () => {
    try {
        const { data: {countries }} =  await axios.get(`${url}/countries`); 

        return countries.map((country:any) => country.name);
    } catch (error) {
        console.log(error);

    }
}