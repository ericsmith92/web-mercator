import React from 'react';
import Map from './Map';
import Header from './Header';
import InfoToggle from './Accordion';
import Footer from './Footer';
import '../styles.scss';

class App extends React.Component {

    render(){
        return(
            <div>
                <Header />
                    <div className="container">
                        <InfoToggle />
                        <Map />
                    </div>
                <Footer />
            </div>
        )
    }
}

export default App;