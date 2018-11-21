import React, { Component } from 'react'
import styles from './Playground.css';

class Playground extends Component {

    constructor(props) {
        super(props);
        this.state = { activeItem: '1' }
    }

    onNavigateClick = (type, e) => {
        e.preventDefault();
        let copyOfState = this.state.activeItem;
        this.setState({activeItem: null});

        if (type === 'next') {
            if (copyOfState === '3') {
                this.setState({ activeItem : '1' });
            } else {
                this.setState({ activeItem:  `${(parseInt(copyOfState) + 1 )}`})
            }
        }
        if (type === 'prev') {
            if (copyOfState === '1') {
                this.setState({ activeItem : '3' })
            } else {
                this.setState({ activeItem:  `${(parseInt(copyOfState) -1 )}`})
            }
        }
    }

    render () {

        const item1Active = (this.state.activeItem === '1') ? 'active': '';
        const item2Active = (this.state.activeItem === '2') ? 'active': '';
        const item3Active = (this.state.activeItem === '3') ? 'active': '';

        return (
            <div className="playgroundContainer">
                    <div id="myCarousel" className="carousel slide">

                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className={`${item1Active}`}></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" className={`${item2Active}`}></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2" className={`${item3Active}`}></li>
                        </ol>
            
                    <div className="carousel-inner">
                        <div id="1" className={`item ${item1Active}`} >
                        
                            <p>Content for first box</p>
                        
                        </div>
                        <div id="2" className={`item ${item2Active}`} >
                        
                            <p>Content for second box</p>
                        
                        </div>
                        <div id="3" className={`item ${item3Active}`} >
                            
                            <p>Content for third box</p>
                        
                        </div>
                    </div>
               
                    <a className="carousel-control left" href="#myCarousel" data-slide="prev" onClick={e => this.onNavigateClick('prev',e)}>&lsaquo;</a>
                    <a className="carousel-control right" href="#myCarousel" data-slide="next" onClick={e => this.onNavigateClick('next',e)}>&rsaquo;</a>

                    </div>
            </div>
        )
    }
}

export default Playground;




