import React from 'react';

class CallOut extends React.Component{
    
    state = {
        countryCode: null
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
            .then(text => this.setState({countryCode: text}))
            .catch(err => console.log(err)) 
    }

    render(){
        return(
            <div className="callOut">
                <div className="callOut_wrapper">
                    {this.state.countryCode}
                    <div className="callOut_triangle"></div>
                </div>
            </div>
        )
    }
}

export default CallOut;