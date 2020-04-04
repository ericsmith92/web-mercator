import React from 'react';
import Map from './Map';
import '../styles.scss';

class App extends React.Component {

    state = {
        countries: null
    }

    componentDidMount(){
        this.getCountries();
    }

    getCountries(){
        fetch('https://covid19.mathdro.id/api/countries/')
            .then(res => res.json())
            .then(json =>{
                    const allCountries = json['countries'].map(country => country.name);
                    this.setState({countries : allCountries});
                }   
            )
            .catch(err => console.error(err));
    }


    render(){
        return(
            <Map countries={this.state.countries}/>
        )
    }
}

export default App;