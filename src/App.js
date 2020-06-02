import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';

import {fetchData} from './api';


class App extends React.Component{

    state = {
        data: {},
        country: '',
    }

async componentDidMount(){
    const fnFetchData = await fetchData();
    this.setState({data:fnFetchData});
}

handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData, country: country});
}

    render()
    {
        const { data, country } = this.state;
        return(
            <div className={styles.container}>
                <h1 className = {styles.mainHead}>Corona Tracker</h1>
                <Cards data={data}></Cards>
                <CountryPicker handleCountryChange = {this.handleCountryChange}></CountryPicker>
                <Chart data={data} country = {country}></Chart>
            </div>
        )
    }
}

export default App;