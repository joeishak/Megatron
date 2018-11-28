import React, { Component } from 'react';
import styles from './MobileViewDetails.css';

class MobileViewDetails extends Component {





    render () {


        return (
            <div>
                <div className="container-fluid" style={{borderBot: '1px dotted red',  height: '200px'}}>

                    <div className="col-xs-4" style={{borderBottom: '1px solid white', height: '20px', paddingBottom: '50px'}} >
                    
                    </div>
                    <div className="col-xs-4  text-align-mid" style={{borderBottom: '1px solid white', height: '20px', paddingBottom: '50px'}}>
                        QTD
                    </div>
                    <div className="col-xs-4  text-align-mid" style={{borderBottom: '1px solid white', height: '20px', paddingBottom: '50px'}}>
                        Weekly
                    </div>


                    <div className="col-xs-4 content-col-left" >
                        <p>Actuals</p>
                    </div>
                    <div className="col-xs-4  text-align-mid" >
                       <p>$66.7</p>
                    </div>
                    <div className="col-xs-4 text-align-mid" >
                        <p>$66.7</p>
                    </div>

                    <div className="col-xs-4 content-col-left" >
                        <p>Actuals</p>
                    </div>
                    <div className="col-xs-4  text-align-mid" >
                       <p>$66.7</p>
                    </div>
                    <div className="col-xs-4 text-align-mid" >
                        <p>$66.7</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileViewDetails