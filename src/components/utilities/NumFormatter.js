import React from 'react';

const NumFormatter = props => {
    return <div style={{display: 'inline-block'}}>{props.num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</div>
}

export default NumFormatter;