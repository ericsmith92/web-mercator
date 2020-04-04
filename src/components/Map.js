import React from 'react';
import Point from './Point';

class Map extends React.Component {

    state = {
        width: 1024,
        height: 512,
        zoom: 1,
        x: null,
        y: null
    }

    componentDidMount(){
        
    }

    handleClick = (e) =>{
        const clientX = e.clientX;
        const clientY = e.clientY;
        const domRect = e.currentTarget.getBoundingClientRect();
        const [domRectX, domRectY ] = [domRect.x, domRect.y];
        this.setState({x: clientX - domRectX, y: clientY - domRectY});
    }

    render(){
        return(
            <div className="map" style={{maxWidth: this.state.width, margin: "100px auto 0 auto", position: 'relative'}}>
                <img onClick={this.handleClick} src={`https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,${this.state.zoom}/${this.state.width}x${this.state.height}?access_token=TOKENHERE`} alt="World Map." className="map_img" />
                { this.state.x && this.state.y ? <Point coordinates={[this.state.x, this.state.y]} /> : '' }
            </div>
        )
    }
}

export default Map;