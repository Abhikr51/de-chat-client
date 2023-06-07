import React from 'react'

function MessageReceived({
    title = '---',
    time = "- : - ::"
}) {
    return (
        <div className="message received">
            <p>{title}</p>
            <span className='time'>{time}</span>
        </div>
    )
}

export default MessageReceived