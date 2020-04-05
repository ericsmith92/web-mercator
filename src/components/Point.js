import React from 'react';

class Point extends React.Component{

    state = {
        lon: 0,
        lat: 0,
        mercN: 0,
        latRad: 0
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
        this.setState({lon, mercN, latRad, lat});
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

    render(){
        return <div style={{position: 'absolute', width: '4px', height: '4px', background: 'red', borderRadius: '50%', left: this.props.coordinates[0], top: this.props.coordinates[1] }}></div>
    }
}

export default Point;