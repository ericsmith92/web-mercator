import React from 'react';

class Accordion extends React.Component{

    state={
        collapsed: true
    }


    toggleAccordion(){
        this.setState({collapsed: this.state.collapsed ? false: true});
    }
    
    render(){
        return(
            <div className={`accordion ${this.state.collapsed ? '' : 'open'}`}>
                <div className="accordion_header">
                    <button className="accordion_toggle" onClick={() => this.toggleAccordion()}>
                        <i class="fa fa-info-circle"></i>
                    </button>
                </div>
                <div className="accordion_content">
                    <p className="accordion_content__text">
                        Use your mouse to click on a country below, data will be fetched in real time showing total active cases, deaths, and recoveries. 
                    </p>
                </div>
            </div>
        )
    }
}

export default Accordion;