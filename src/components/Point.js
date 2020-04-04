import React from 'react';

class Point extends React.Component{

    state = {
        lon: 0,
        lat: 0,
        mercN: 0,
        latRad: 0
    }

    componentDidMount(){
        this.getLon(this.props.coordinates[0]);
        this.getMercN(this.props.coordinates[1]);
    }

    getLon(x){
        const lon = x * 360 / 1024 - 180;
        this.setState({lon});
    }

    getMercN(y){
        const PI = Math.PI;
        const mercN = (y - 256) * PI / -512;
        this.setState({mercN}, this.getLatRad);
    }

    getLatRad(){
        //since we are working with base e
        const eulersNum = 2.7182818284590452353602874713527;
        const mercN = this.state.mercN;
        const PI = Math.PI;
        const latRad = (Math.atan(Math.pow(eulersNum, mercN)) - (PI / 4)) * 2;
        console.log(latRad);
        this.setState({latRad}, this.getLat);
    }

    getLat(){
        const latRad = this.state.latRad;
        const lat = latRad * 180 / Math.PI;
        this.setState({lat});
    }

    render(){
        return <div style={{position: 'absolute', width: '4px', height: '4px', background: 'red', borderRadius: '50%', left: this.state.lon }}></div>
    }
}

export default Point;