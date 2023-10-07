import axios from 'axios';
import React, { useState } from 'react'
import InputEmoji from "react-input-emoji";
import "../styles/emojiinput.css";



function FormInput({chatId, senderId}) {

    const [text, setText] = useState("");

    async function sendMessage() {
    
          await axios({
            method: "POST",
            headers: {'X-Custom-Header': 'foobar'},
            url: 'http://localhost:8001/api/message',
            data: { chatId : chatId , senderId : senderId, text: text },
          })
          .then((res) => {
            const message = res.data;
            console.log("message: ", message);
          })
          .catch((err) => {
            throw err;
          });
          
      };


  return (

    <div >
         <div className="inputEmoji" >
            <InputEmoji 
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={sendMessage}
                placeholder="Ecrire un message..."
            />
            <div className="button-msg" onSubmit={sendMessage} type="submit" >Send</div> 
        </div>
    </div>

        
  );
}

export default FormInput;