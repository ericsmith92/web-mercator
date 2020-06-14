import React from 'react';

class Loader extends React.Component{

    state = {
        show: false
    }

    componentDidMount () {
        this.timeoutId = setTimeout(function () {
            this.setState({show: true});
        }.bind(this), 500);
      } 
    
      componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
      }

      
    render(){
        return <div className={`loader ${this.state.show ? 'show' : ''}`}>Loading...</div>;
    }
}

export default Loader;