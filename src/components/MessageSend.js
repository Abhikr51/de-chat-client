import React from 'react'

function MessageSend({
    title = '-----',
    time = "- : - ::"
}) {
    return (
        <div className="message sent">
            <p>{title}</p>
            <span className='time'>{time}</span>
        </div>
    )
}

export default MessageSend