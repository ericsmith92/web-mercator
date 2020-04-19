import React from 'react';
import ReactDOM from 'react-dom';

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
            return ReactDOM.createPortal(
                <div className="error">
                    <div className="error_inner">
                        <button onClick={this.closeError} className="error_btn">&times;</button>
                        {this.props.text}
                    </div>
                </div>,
                document.getElementById('modal')
            )
        }
    }
}

export default Error;