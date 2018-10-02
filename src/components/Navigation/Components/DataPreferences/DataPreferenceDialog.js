import React from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';

class DataPreferenceDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }; 
        this.toggleDialog = this.toggleDialog.bind(this);
    }

    toggleDialog() {
        this.setState({
            visible: !this.state.visible
        });
    }


    render() {
        return (
            <div>
                <button className="k-button" onClick={this.toggleDialog}>Open Dialog</button>
                {this.state.visible && 
                
                <Dialog >
                    <div>title bar</div>
                
                    <p style={{ margin: "25px", textAlign: "center" }}>Are you sure you want to continue?</p>
                    <DialogActionsBar>
                        <button className="k-button" onClick={this.toggleDialog}>No</button>
                        <button className="k-button" onClick={this.toggleDialog}>Yes</button>
                    </DialogActionsBar>
                </Dialog>}
            </div>
        );
    }
}

export default (DataPreferenceDialog);