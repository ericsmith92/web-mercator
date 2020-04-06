import React from 'react';
import NumFormatter from './utilities/NumFormatter';

class CallOut extends React.Component{
    
    state = {
        countryCode: null,
        total: null,
        deaths: null,
        recovered: null
    }

    componentDidMount(){
        this.init();
    }

    componentDidUpdate(prevProps) {
        if (this.props.lat !== prevProps.lat || this.props.lon !== prevProps.lon) {
            this.init();
        }
      }

    init = _ => {
        fetch(`http://api.geonames.org/countryCode?lat=${this.props.lat}&lng=${this.props.lon}&username=${process.env.REACT_APP_MAPBOX_GEONAMES_API_USER}`)
            .then(res => res.text())
            .then(text =>{
                this.setState({countryCode: text});
                this.getCountryDataFromCode(this.state.countryCode);
            })
            .catch(err => console.log(err)) 
    }

    getCountryDataFromCode(countryCode){
        fetch(`https://covid19.mathdro.id/api/countries/${countryCode}`)
        .then(res => res.json())
        .then(json => {
            this.setState({total: json.confirmed.value, recovered: json.recovered.value, deaths: json.deaths.value});
        })
        .catch(err => console.log(err)) 
    }

    render(){
        return(
            <div className="callOut">
                <div className="callOut_wrapper">
                    <div className="callOut_country">{this.state.countryCode}</div>
                    <div className="callOut_total"><span>Total:</span> {this.state.total ? <NumFormatter num={this.state.total} />: ''}</div>
                    <div className="callOut_deaths"><span>Deaths:</span> {this.state.total ? <NumFormatter num={this.state.deaths} />: ''}</div>
                    <div className="callOut_recovered"><span>Recov:</span> {this.state.total ? <NumFormatter num={this.state.recovered} />: ''}</div>
                    <div className="callOut_triangle"></div>
                </div>
            </div>
        )
    }
}

export default CallOut;