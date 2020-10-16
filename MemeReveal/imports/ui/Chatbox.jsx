import React from 'react';
import {ChatHistory} from './Chathistory';
import {ChatInput} from './Chatinput';
import { MessagesCollection } from '/imports/api/messages';

export default class Chatbox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            otherMsg:  MessagesCollection.find({user: 2}).fetch(),
            myMsg: MessagesCollection.find({user: 1}).fetch(),
        };
    }
    render () {
        return (
            <div className="chatbox">
                <ChatHistory otherMsg={this.state.otherMsg} myMsg={this.state.myMsg} />
                <ChatInput />
            </div>
        )
    }
}

