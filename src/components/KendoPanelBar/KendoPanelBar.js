import {  PanelBar, PanelBarItem  } from '@progress/kendo-react-layout';
import React, { Component } from 'react';
import classNames from 'classnames'
import styles from './KendoPanelBar.css';
import '@progress/kendo-theme-default/dist/all.css'

class KendoPanelBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            logs: []
        }
    }
    imageUrl(imageName) {
        let baseImageUrl = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/';
        return baseImageUrl + imageName + '.jpg';
    }
    renderLogs = () => {
        return this.state.logs.map((log, index)=> {
            return(<li key={index}>{log}</li>)
        })
    }
    handleSelect = (e) => {
        const calls = this.state.logs.slice();

        calls.unshift(`${e.action} ${e.target.props.title}`);

        this.setState({
            logs: calls
        });
    }

 render(){
    var red = classNames({
        'red': true
    });
     return(
        <div className={'panel-wrapper'}>
                   <PanelBar >
                       <PanelBarItem expanded={true} title="My Teammates">
                           <div>
                               <div className={red + "teamMate"}>
                                   <img src={this.imageUrl('andrew')} alt="Andrew Fuller" />
                                   <span className="mate-info">
                                       <h2>Andrew Fuller</h2>
                                       <p>Team Lead</p>
                                   </span>
                               </div>
                               <div className="teamMate">
                                   <img src={this.imageUrl('nancy')} alt="Nancy Leverling" />
                                   <span className="mate-info">
                                       <h2>Nancy Leverling</h2>
                                       <p>Sales Associate</p>
                                   </span>
                               </div>
                               <div className="teamMate">
                                   <img src={this.imageUrl('robert')} alt="Robert King" />
                                   <span className="mate-info">
                                       <h2>Robert King</h2>
                                       <p>Business System Analyst</p>
                                   </span>
                               </div>
                           </div>
                       </PanelBarItem>
                       <PanelBarItem title={'Projects'} >
                           <PanelBarItem title={'New Business Plan'} />
                           <PanelBarItem title={'Sales Forecasts'}  >
                               <PanelBarItem title={'Q1 Forecast'} />
                               <PanelBarItem title={'Q2 Forecast'} />
                               <PanelBarItem title={'Q3 Forecast'} />
                               <PanelBarItem title={'Q4 Forecast'} />
                           </PanelBarItem >
                           <PanelBarItem title={'Sales Reports'} />
                       </PanelBarItem>
                       <PanelBarItem title="Programs">
                           <PanelBarItem title="Monday" />
                           <PanelBarItem title="Tuesday" />
                           <PanelBarItem title="Wednesday" />
                           <PanelBarItem title="Thursday" />
                           <PanelBarItem title="Friday" />
                       </PanelBarItem>
                       <PanelBarItem title="Communication" disabled={true} />
                   </PanelBar>
               </div>
     )
 }
}


export default (KendoPanelBar);