import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';

import {fetchData} from './api';


class App extends React.Component{

    state = {
        data: {},
    }

async componentDidMount(){
const fnFetchData = await fetchData();
this.setState({data:fnFetchData});
}

    render()
    {
        const { data } = this.state;
        return(
            <div className={styles.container}>
                <Cards data={data}></Cards>
                <CountryPicker></CountryPicker>
                <Chart></Chart>
            </div>
        )
    }
}

export default App;