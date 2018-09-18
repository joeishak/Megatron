import React, { Component } from 'react';
import styles from './footerBar.css';

// Redux
import { connect } from 'react-redux';
import * as actions from 'actions';

class Footer extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="footerContainer" onClick={this.props.onSelected}>

                <div className="footer">
                    <div className="chatWindowCollapsed">
                        <p>{this.props.selectedSquare.header} comments</p>
                    </div>
                </div>
            </div>
        );
    }
}

// export default Footer;

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, actions)(Footer);

