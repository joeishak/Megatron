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
                       <PanelBarItem expanded={true} title="Geo">
                           <div>
                              Geo
                           </div>
                       </PanelBarItem>
                       <PanelBarItem expanded={true} title='Market Area' />
                       <PanelBarItem expanded={true} title='Route To Market' />
                       <PanelBarItem expanded={true} title='Segments' />
                       <PanelBarItem expanded={true} title='Product Name' />
                   </PanelBar>
               </div>
     )
 }
}


export default (KendoPanelBar);