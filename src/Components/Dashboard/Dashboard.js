import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Chart from '../Chart/Chart';

const Dashboard = () => {

    // const [chartData, setChartData] = useState([]);
    // useEffect(()=>{
    //     const url = `https://github.com/ProgrammingHero1/product-analysis-website/blob/main/data.json`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setChartData(data))
    // },[])
    return (
        <div className='container'>
            <Chart></Chart>
        </div>
    );
};

export default Dashboard;