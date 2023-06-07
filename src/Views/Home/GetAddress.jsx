import axios from 'axios';
import React, { useState } from 'react'
import { baseURL, sign_upURL } from '../../constants';
import appStorage from '../../utils/appStorage';

function GetAddress({
    changePanel = () => { }
}) {
    const [address, setAddress] = useState("");
    const [progress ,setProgress] = useState(false)
    const saveUser = (address)=>{
        appStorage.setItem("active_receiver",address)
        changePanel(address)
    }
    const submitHandler = async(event) => {
        event.preventDefault();
        if (validate(address)) {
            setProgress(true);
            await axios.post(baseURL + sign_upURL,{
                accountAddress : address
            }).then(({data})=>{
                if(data.status){
                    saveUser(address)
                }else{
                    console.log("sign up err data : ",data);
                }
            }).catch(err=>{
                console.log("sign up err log : ",err);
            }).finally(()=>{
                setProgress(false);
                // below lines need to be remove in production
                saveUser(address)
            })
        } else {
            alert("Not a valid address !" + address)
        }
    }
    const validate = (hex) => {
        return typeof hex === 'string'
            && hex.length === 32
            && !isNaN(Number(hex))
        // Do things with isHex Boolean
    }
    //test id 0x12344399ffccac4678ccaabbbbbfff
    return (
        <div className="wrapper">
            <div className="room-box">
                <h1 className='title' >De - Chat</h1>
                <label htmlFor="">Enter your address</label>
                <form onSubmit={submitHandler}>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder='A hexcode address eg: ACV2344IIMM' />
                    <button className='btn'> {progress ? "Entering into chat room ..." : "Start chatting"} </button>
                </form>
            </div>
        </div>
    );
}

export default GetAddress