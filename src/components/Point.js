import React from 'react';
import CallOut from './CallOut';
import Error from './Error';

class Point extends React.Component{

    state = {
        x: 0,
        y: 0,
        lon: 0,
        lat: 0,
        mercN: 0,
        latRad: 0,
        renderCallOut: false,
        error: false,
        errorMsg: ''
    }

    componentDidMount(){
       this.init();
    }

    componentDidUpdate(prevProps) {
        if (this.props.coordinates[0] !== prevProps.coordinates[0] || this.props.coordinates[1] !== prevProps.coordinates[1]) {
            this.init();
        }
      }

    init = _ => {
        const lon = this.getLon(this.props.coordinates[0]);
        const mercN = this.getMercN(this.props.coordinates[1]);
        const latRad = this.getLatRad(mercN);
        const lat = this.getLat(latRad);
        this.setState({x:  this.props.coordinates[0], y:  this.props.coordinates[1], lon, mercN, latRad, lat, renderCallOut: true});
    }

    getLon = x => {
        const lon = x * 360 / 1024 - 180;
        return lon;
    }

    getMercN = y => {
        const mercN = (y - 256) * this.props.PI / - 512;
        return mercN;
    }

    getLatRad = mercN => {
        //since we are working with base e
        const eulersNum = 2.7182818284590452353602874713527;
        const latRad = (Math.atan(Math.pow(eulersNum, mercN)) - (this.props.PI / 4)) * 2;
        return latRad;
    }

    getLat = latRad => {
        const lat = latRad * 180 / this.props.PI;
        return lat;
    }

    updateErrorStatus = (prevProps, msg) => {
        if(!Object.keys(prevProps).length){
            //set default city to Toronto
            this.setState({ error: true, x: 286.227, y: 117.366, lat: 43.741667, lon: -79.373333, errorMsg:  msg});
        }else{
            this.setState({ error: true, x: prevProps.x, y: prevProps.y, lat: prevProps.lat, lon: prevProps.lon, errorMsg:  msg});
        }
    }

    closeCallOut = () => {
        this.setState({ 
            x: null,
            y: null,
            lon: 0,
            lat: 0,
            mercN: 0,
            latRad: 0,
            renderCallOut: false,
            error: false,
            errorMsg: ''
        });
    }

    onErrorDismiss = () => {
        this.setState({ error: false });
    }

    render(){
        if(this.state.error){
            return(
                <Error onErrorDismiss={this.onErrorDismiss} text={this.state.errorMsg}/>
            )
        }else{
            return(
                <div className="point" style={{ left: this.state.x + 'px', top: this.state.y + 'px'}}>
                    <div  className={`point_wrapper ${this.state.x <= 80 ? 'shift' : ''} ${this.state.y <= 90 ? 'bottom' : ''}`}>
                        {this.state.renderCallOut ? <CallOut x={this.state.x} y={this.state.y} lat={this.state.lat} lon={this.state.lon} updateErrorStatus={this.updateErrorStatus} closeCallOut={this.closeCallOut}/> : ''}
                    </div>
                </div>
            )
        }
    }
}

export default Point; 