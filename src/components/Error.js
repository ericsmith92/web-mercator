import React from 'react';

class Error extends React.Component{
    state = {
        render: true
    }

    closeError = () => {
        this.setState({ render: false });
        this.props.onErrorDismiss();
    }

    render(){
        if(!this.state.render){
            return false;
        }else{
            return(
                <div className="error">
                    <button onClick={this.closeError} className="error_btn">&times;</button>
                    Error, looks like you clicked on water.
                </div>
            )
        }
    }
}

export default Error;