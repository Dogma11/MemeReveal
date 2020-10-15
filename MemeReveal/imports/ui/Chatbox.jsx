import React from 'react';
import {ChatHistory} from './Chathistory';
import {ChatInput} from './Chatinput';
import { MessagesCollection } from '/imports/api/messages';

export const Chatbox = () => {
    console.log(MessagesCollection.find());
    const otherMsg = MessagesCollection.find({
        user: 2
    }).fetch();
    const myMsg = MessagesCollection.find({
        user: 1
    }).fetch();
    console.log(otherMsg);
    return(
        <div className="chatbox">
            <ChatHistory otherMsg={otherMsg} myMsg={myMsg} />
            <ChatInput />
        </div>
    )
}
