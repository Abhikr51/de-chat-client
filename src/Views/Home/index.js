import React, {useState} from 'react'
import GetAddress from './GetAddress'
import Chat from './Chat'
const PANEL_ENUM = {
    GET_ADDRESS : "GET_ADDRESS",
    CHAT : "CHAT"
}
function Home() {
    const [activePanel , setActivePanel]= useState(PANEL_ENUM.GET_ADDRESS)
    const [receiver,setReceiver] = useState()
    const changePanelToChat = (add)=>{
        setReceiver({name: "Abhijit Kumar",address : add})
        setActivePanel(PANEL_ENUM.CHAT);
    }
    if(activePanel ==  PANEL_ENUM.CHAT){
        return <Chat receiver={receiver} />
        
    }else{
        return <GetAddress changePanel={changePanelToChat} />
    }
}


export default Home