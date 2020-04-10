import React from 'react';
import Map from './Map';
import Header from './Header';
import Footer from './Footer';
import '../styles.scss';

class App extends React.Component {

    render(){
        return(
            <div>
                <Header />
                    <Map />
                <Footer />
            </div>
        )
    }
}

export default App;