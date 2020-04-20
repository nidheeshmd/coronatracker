import React, { useState, useEffect} from 'react';
import  { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import chartStyle from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    });
    const lineChart = (
        
        dailyData.length
        ? (
            <Line data ={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    Label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                },{
                    data: dailyData.map(({ deaths }) => deaths),
                    Label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }],
            }}
        />):null
    );

    return(
        <div className = {chartStyle.container}>
            {lineChart}
        </div>
    )
}

export default Chart;