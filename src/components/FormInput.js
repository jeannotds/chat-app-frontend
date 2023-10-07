import axios from 'axios';
import React, { useState } from 'react'
import InputEmoji from "react-input-emoji";
import "../styles/emojiinput.css";



function FormInput({chatId, senderId}) {

    const [text, setText] = useState("");

    async function sendMessage() {

        console.log('text');
    
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
         <form className="inputEmoji" onSubmit={sendMessage}>
            <InputEmoji 
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={sendMessage}
                placeholder="Ecrire un message..."
            />
        </form>
    </div>

        
    //     {/* <button type="submit" >Send</button> */}
  );
}

export default FormInput;