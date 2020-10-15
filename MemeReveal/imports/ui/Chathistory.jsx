import React from 'react';
import {Message} from './Message';

export const ChatHistory = ( {otherMsg, myMsg} ) => {
    otherMsg = otherMsg || [];
    myMsg = myMsg || [];
    return (
        <div className="row">
            <div className="chat-other col-6">
                {otherMsg.forEach(element => {
                    <Message msg={element} />
                })}
            </div>
            <div className="chat-me col-6">
                {myMsg.forEach(element => {
                    <Message msg={element} />
                })}
            </div>
        </div>
    )
}