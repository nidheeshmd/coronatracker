import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try{
        const { data: {confirmed,recovered,deaths,lastUpdate,dailySummary,dailyTimeSeries,image,source,countries,countryDetail} } = await axios.get(url);


        return {confirmed,recovered,deaths,lastUpdate,dailySummary,dailyTimeSeries,image,source,countries,countryDetail};
    }
    catch(error){

    }
}