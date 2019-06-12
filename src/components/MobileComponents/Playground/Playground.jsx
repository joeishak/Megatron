import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './Playground.css';
import MobileMultiChart from './components/MobileMultiChart/MobileMultiChart.jsx';
import MobileCommentBox from '../../CommentPanel/MobileCommentBox';
import MobileViewDetails from './components/MobileViewDetails/MobileViewDetails.jsx';
class Playground extends Component {

    constructor(props) {
        super(props);
        this.state = { activeItem: '1', isDragging: false }

        // this.onMouseMove = this.onMouseMove.bind(this);
        // this.stopResize = this.stopResize.bind(this);

    }

    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener("mousemove", this.onMouseMove);
        ReactDOM.findDOMNode(this).addEventListener("touchmove", this.onMouseMove);
        ReactDOM.findDOMNode(this).addEventListener("mouseup", this.onTouchEnd);
        ReactDOM.findDOMNode(this).addEventListener("touchend", this.onTouchEnd);
        ReactDOM.findDOMNode(this).addEventListener("mouseleave", this.onTouchEnd);
        ReactDOM.findDOMNode(this).addEventListener("touchcancel", this.onTouchEnd);
        ReactDOM.findDOMNode(this).addEventListener("touchstart", this.onTouchStart);



    }

    onNavigateClick = (type, e) => {

        e.preventDefault();
        let copyOfState = this.state.activeItem;
        this.setState({ activeItem: null });

        if (type === 'next') {
            if (copyOfState === '3') {
                this.setState({ activeItem: '1' });
            } else {
                this.setState({ activeItem: `${(parseInt(copyOfState) + 1)}` })
            }
        }
        if (type === 'prev') {
            if (copyOfState === '1') {
                this.setState({ activeItem: '3' })
            } else {
                this.setState({ activeItem: `${(parseInt(copyOfState) - 1)}` })
            }
        }
    }
    isTouchDevice() {
        return "ontouchstart" in document.documentElement;
    }

    onMouseMove = (event) => {

        let clientX;

        if (this.state.touched === true) {
            if (this.isTouchDevice()) {
                if (this.state.initialX - event.touches[0].clientX > 0) {
                    // Set indicator for prev
                    this.onNavigateClick('prev', event)
                } else {
                    // Set indicator for next
                    this.onNavigateClick('next', event)

                }
            } else {
                // on Desktop

                if (this.state.initialX - event.clientX > 0) {
                    // Set indicator for prev
                    this.onNavigateClick('prev', event)

                } else {
                    // Set indicator for next
                    this.onNavigateClick('next', event)


                }

            }
            this.setState({ touched: false })
        }

    }
    onTouchStart = (e) => {
      
        this.setState({ initialX: e.touches[0].clientX, touched: true })
        // let isDragging = false;

        // if (this.state.isDragging === true) {
        //     this.setState({ isDragging });
        //     if (this.isTouchDevice()) {

        //         // on Mobile
        //         // 100 - 200 - 100
        //         if (this.state.initialX - e.touches[0].clientX > 0) {
        //             // Set indicator for prev
        //             this.onNavigateClick('prev', e)
        //         } else {
        //             // Set indicator for next
        //             this.onNavigateClick('next', e)

        //         }
        //     } else {
        //         // on Desktop
        //         if (this.state.initialX - e.clientX > 0) {
        //             // Set indicator for prev
        //             this.onNavigateClick('prev', e)

        //         } else {
        //             // Set indicator for next
        //             this.onNavigateClick('next', e)


        //         }

        //     }
        // }
    }
    onTouchEnd = (e) => {
        this.setState({ touched: false })
        let isDragging = false;

        if (this.state.isDragging === true) {
            this.setState({ isDragging });
            if (this.isTouchDevice()) {

                // on Mobile
                // 100 - 200 - 100
                if (this.state.initialX - e.touches[0].clientX > 0) {
                    // Set indicator for prev
                    this.onNavigateClick('prev', e)
                } else {
                    // Set indicator for next
                    this.onNavigateClick('next', e)

                }
            } else {
                // on Desktop
                if (this.state.initialX - e.clientX > 0) {
                    // Set indicator for prev
                    this.onNavigateClick('prev', e)

                } else {
                    // Set indicator for next
                    this.onNavigateClick('next', e)


                }

            }
        }
    }
    onMouseDown = (event) => {
       
        // let clientX;
        // this.setState({ isDragging: true });
        if (this.isTouchDevice() === false) {
            // on Mobile
            this.setState({ initialX: event.clientX, touched: true })

        }
    }
    render() {

        const item1Active = (this.state.activeItem === '1') ? 'active' : '';
        const item2Active = (this.state.activeItem === '2') ? 'active' : '';
        const item3Active = (this.state.activeItem === '3') ? 'active' : '';

        return (
            <div className="playgroundContainer" onTouchEnd={e => this.onTouchEnd(e)} /* onMouseUp={e => this.onTouchEnd(e)} */ style={{ height: `${this.props.bottomContainerHeight - 20}px` }}>
                <div id="myCarousel" onTouchStart={e => this.onTouchStart(e)} onMouseDown={e => this.onMouseDown(e)} className="carousel slide">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className={`${item1Active}`}></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" className={`${item2Active}`}></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" className={`${item3Active}`}></li>
                    </ol>
                    <div className="carousel-inner">
                        {/* MOBILE MULTICHART  */}
                        <div id="1" className={`item ${item1Active}`} style={{ height: `${this.props.bottomContainerHeight - 20}px` }}>
                            {/* <MobileMultiChart bottomContainerHeight={this.props.bottomContainerHeight}></MobileMultiChart> */}
                        </div>
                        {/* MOBILE VIEW DETAIILS */}
                        <div id="2" className={`item ${item2Active}`} style={{ height: `${this.props.bottomContainerHeight - 20}px` }}>
                            <MobileViewDetails valueType={this.props.valueType} detailsData={this.props.detailsData}></MobileViewDetails>
                        </div>
                        {/* MOBILE COMMENT BOX */}
                        <div id="3" className={`item ${item3Active}`} style={{ height: `${this.props.bottomContainerHeight - 20}px` }}>
                            <MobileCommentBox comments={this.props.comments} commentsPackage={this.props.commentsPackage}></MobileCommentBox>
                        </div>
                    </div>

                    {/* <a className="carousel-control left" href="#myCarousel" data-slide="prev" onClick={e => this.onNavigateClick('prev',e)}>&lsaquo;</a>
                    <a className="carousel-control right" href="#myCarousel" data-slide="next" onClick={e => this.onNavigateClick('next',e)}>&rsaquo;</a> */}
                </div>
            </div>
        )
    }
}

export default Playground;
