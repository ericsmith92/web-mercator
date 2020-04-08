import React from 'react';
import NumFormatter from './utilities/NumFormatter';
import Error from './Error';
import axios from 'axios';

class CallOut extends React.Component{
    
    state = {
        countryCode: null,
        total: null,
        deaths: null,
        recovered: null,
        error: false
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
            axios.get(`http://api.geonames.org/countryCode?lat=${this.props.lat}&lng=${this.props.lon}&username=${process.env.REACT_APP_MAPBOX_GEONAMES_API_USER}`)
                .then(res => res.data)
                .then(text =>{
                    this.setState({countryCode: text});
                    this.getCountryDataFromCode(this.state.countryCode);
                })
                .catch(err => {
                    this.setState({error: true});
                    console.log(err);
                });
    }

    getCountryDataFromCode(countryCode){
        axios.get(`https://covid19.mathdro.id/api/countries/${countryCode}`)
        .then(res => res.data)
        .then(json => {
            this.setState({total: json.confirmed.value, recovered: json.recovered.value, deaths: json.deaths.value});
        })
        .catch(err => console.log(err)); 
    }

    onErrorDismiss = () => {
        this.setState({ error: false });
    }

    render(){
        if(this.state.error){
            return(
                <Error onErrorDismiss={this.onErrorDismiss}/>
            )
        }else{
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
}

export default CallOut;