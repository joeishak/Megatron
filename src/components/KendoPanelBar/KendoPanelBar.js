import {  PanelBar, PanelBarItem  } from '@progress/kendo-react-layout';
import React, { Component } from 'react';
// import classNames from 'classnames'
import styles from './KendoPanelBar.css';
import '@progress/kendo-theme-default/dist/all.css'

class KendoPanelBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            logs: []
        }

        this.getPanelContents = this.getPanelContents.bind(this);
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
    /* Return Contents for  */
    getPanelContents(type){
        switch (type){
            case 'geo':
            return (<div> {type}</div>);
            case 'marketarea':
            return (<div> {type}</div>);
            case 'routetomarket':
            return (<div> {type}</div>);
            case 'segments':
            return (<div> {type}</div>);
            case 'productname':
            return (<div> {type}</div>);
            default:
            return;
        }
    }
 render(){
    // var red = classNames({
    //     'red': true
    // });
     return(
        <div className={'panel-wrapper'}>
                   <PanelBar >
                       <PanelBarItem expanded={true} title="Geo">
                           {this.getPanelContents('geo')}
                       </ PanelBarItem>
                       <PanelBarItem expanded={false} title='Market Area' >  
                           {this.getPanelContents('marketarea')}
                       </ PanelBarItem>
                       <PanelBarItem expanded={false} title='Route To Market'>
                            {this.getPanelContents('routetomarket')}
                       </PanelBarItem>
                       <PanelBarItem expanded={false} title='Segments' >
                            {this.getPanelContents('segments')}
                       </ PanelBarItem>
                       <PanelBarItem expanded={false} title='Product Name' >
                            {this.getPanelContents('productname')}
                       </PanelBarItem>

                   </PanelBar>
               </div>
     )
 }
}


export default (KendoPanelBar);