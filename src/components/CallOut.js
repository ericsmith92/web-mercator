import React from 'react';
import NumFormatter from './utilities/NumFormatter';
import Loader from './utilities/Loader';
import axios from 'axios';

class CallOut extends React.Component{
    
    state = {
        countryCode: null,
        total: null,
        deaths: null,
        recovered: null,
        loading: false
    }

    componentDidMount(){
        this.init();
    }

    componentDidUpdate(prevProps) {
        if (this.props.lat !== prevProps.lat || this.props.lon !== prevProps.lon) {
            this.init(prevProps);
        }
      }

    init = (prevProps = {}) => {
        axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_OPENCAGE_API_KEY}&q=${encodeURIComponent(this.props.lat + ',' + this.props.lon)}&pretty=1&no_annotations=1`)
        .then(res => res.data)
        .then(json =>{
            if(!json.results[0].components['ISO_3166-1_alpha-2']){
                this.props.updateErrorStatus(prevProps, 'Error, looks like you clicked on water.');
            }else{
                const countryCode = json.results[0].components['ISO_3166-1_alpha-2'];
                this.setState({countryCode});
                this.getCountryDataFromCode(this.state.countryCode, prevProps);
            }
        })
        .catch(err => {
            this.props.updateErrorStatus(prevProps, 'Error, looks like you clicked on water.');
            console.log(err);
        });
    }

    getCountryDataFromCode(countryCode, prevProps){
        this.setState({loading: true});
        axios.get(`https://covid19.mathdro.id/api/countries/${countryCode}`)
        .then(res => res.data)
        .then(json => {
            this.setState({total: json.confirmed.value, recovered: json.recovered.value, deaths: json.deaths.value, loading: false});
        })
        .catch(err => {
            this.setState({loading: false});
            this.props.updateErrorStatus(prevProps, `Error, unable to fetch data for country code ${countryCode}.`);
            console.log(err);
        }); 
    }

    render(){
        if(!this.state.loading){
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
        }else{
            return(
                <div className="callOut">
                    <div className="callOut_wrapper">
                        <Loader />
                    </div>
                </div>
            ) 
        }
    }
}

export default CallOut;