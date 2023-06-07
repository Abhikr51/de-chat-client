import React, { useState } from 'react'

function GetAddress({
    changePanel = ()=>{}
}) {
    const [address, setAddress] = useState("");
    const submitHandler = (event) => {
        event.preventDefault();
        if (validate(address)) {
            changePanel(address)
        } else {
            alert("Not a valid address !" + address)
        }
    }
    const validate = (value) => {
        var regex = /^[0-9a-fA-F]+$/;
        var isRegEX =  regex.test(value);
        console.log(isRegEX , value);
        return isRegEX;
        // Do things with isHex Boolean
    }
    return (
        <div className="wrapper">
            <div className="room-box">
                <h1 className='title' >De - Chat</h1>
                <label htmlFor="">Enter your address</label>
                <form onSubmit={submitHandler}>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder='A hexcode address eg: ACV2344IIMM' />
                    <button className='btn'>Start chatting</button>
                </form>
            </div>
        </div>
    );
}

export default GetAddress