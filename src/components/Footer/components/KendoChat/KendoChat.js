import React, { Component } from 'react';
import { Chat } from '@progress/kendo-react-conversational-ui';

function MessageTemplate(props) {
    return (
        <div className="k-bubble">
            <div>{props.item.text}</div>
        </div>
    );
}

class KendoChat extends Component {

    constructor(props) {
        super(props);
        this.user = {
            id: 1,
            name: "Cynthia Stoddard",
            avatarUrl: "https://via.placeholder.com/24/008000/008000.png"
        };
        this.state = {
            messages: [
                {author: {id: 2, name: "M.Appleton", avatarUrl: "https://via.placeholder.com/24/008000/008000.png"}, 
                text: "Are the metrics on this correct?", 
                timestamp: new Date(), selectionIndex: 0},
                {author: {id: 3, name: "J.Lennon", avatarUrl: "https://via.placeholder.com/24/008000/008000.png"}, 
                text: "Hi, Mike. let me double check, who can answer", 
                timestamp: new Date(), selectionIndex: 0}
            ]
        };
    }

    addNewMessage = (event) => {
        this.setState((prevState) => {
            return { messages: [...prevState.messages, event.message] };
        });
        console.log(this.state.messages);
    };

    render() {
        return (
            <div>
                <Chat user={this.user}
                    messages={this.state.messages}
                    onMessageSend={this.addNewMessage}
                    width={400}
                    messageTemplate={MessageTemplate}>
                </Chat>
            </div>
        );
    }
}

export default KendoChat;