import React, { useEffect, useState } from 'react'
import syncicon from "../../assets/reply.png"
import sendicon from "../../assets/send.png"
import MessageReceived from '../../components/MessageReceived'
import MessageSend from '../../components/MessageSend'
const MESSAGE_ENUM = {
    RECEIVED: "RECEIVED",
    SENT: "SENT",
}
const initMessageObject = {
    messages: [
        { msg: "Hello", time: '10:26 PM', type: MESSAGE_ENUM.RECEIVED },
        { msg: "Hi there", time: '10:26 PM', type: MESSAGE_ENUM.SENT },
        { msg: "How are you ?", time: '10:26 PM', type: MESSAGE_ENUM.RECEIVED },
    ],
}
function Chat({
    receiver ={name: "-----",address : "-----"}
}) {
    const [chatMessages, setChatMessages] = useState(initMessageObject)
    const [progress, setProgress] = useState(false)
    const [checkProgress, setCheckProgress] = useState(false)
    const [inputMsg, setInputMsg] = useState("")
    const checkMessage = async () => {
        setCheckProgress(true)
        setTimeout(() => {
            setCheckProgress(false);
            const msg_body = { msg: "Dummy message come from receiver.", time: '11:55 AM', type: MESSAGE_ENUM.RECEIVED }
            setChatMessages({ ...chatMessages, messages: [...chatMessages.messages, msg_body] })
        }, 2000)
    }
    const submitMessage = (event) => {
        event.preventDefault();
        if(inputMsg){
            const msg_body = { msg: inputMsg, time: '10:26 PM', type: MESSAGE_ENUM.SENT }
            setChatMessages({ ...chatMessages, messages: [...chatMessages.messages, msg_body] })
            setInputMsg("")
        }else{
            alert('Please enter message first.')
        }
    }
    useEffect(() => {
        setProgress(true);
        let timeout = setTimeout(() => {
            setChatMessages(initMessageObject)
            setProgress(false);
        }, [])
    }, [])
    return (
        <div className="chat-container">
            <div style={{ padding: 20, borderBottom: '1px solid var(--light-grey)' }}  >
                <h1 className='title' >De - Chat</h1>
                <span className='rec-name' >Chatting with {receiver.name} </span>
                <span className='rec-add'>[ {receiver.address} ]</span> 
            </div>
            <div className="chat-messages">
                {
                    chatMessages.messages.map((msg, mi) => (
                        msg.type == MESSAGE_ENUM.RECEIVED ?
                            <MessageReceived key={mi} title={msg.msg} time={msg.time} />
                            :
                            <MessageSend key={mi} title={msg.msg} time={msg.time} />
                    ))
                }


                <div onClick={checkMessage} className="message received check-msg">
                    <div className="icon">
                        <img className={checkProgress ? 'spin' : ""} src={syncicon} alt="sync-icon" />
                    </div>
                    <div className="text">
                        Click to check new incoming message.
                    </div>
                </div>
            </div>
            <form onSubmit={submitMessage} className="chat-input">
                <input type="text" value={inputMsg} onChange={(e) => setInputMsg(e.target.value)} placeholder="Type your message" />
                <button >Send</button>
            </form>
        </div>

    )
}


export default Chat