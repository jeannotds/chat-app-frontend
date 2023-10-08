// import axios from 'axios';
// import React, { useState } from 'react'
// import InputEmoji from "react-input-emoji";
// import "../styles/emojiinput.css";



// function FormInput({chatId, senderId, socket, chat}) {

//     const [text, setText] = useState("");
//     // const [receiver, setReceiver] = useState(null); 
//     const receiverUser = chat.members.find(id => id !== senderId);

//     console.log("socket ::: ", socket);

//     async function sendMessage() {

//         const message = { chatId : chatId , senderId : senderId, text: text };

//         //Send message
//         socket.current.emit("sendMessage", {
//           senderId : senderId,
//           receiverId: receiverUser,
//           text: text,
//         });
    
//         await axios({
//           method: "POST",
//           headers: {'X-Custom-Header': 'foobar'},
//           url: 'http://localhost:8001/api/message',
//           data: message,
//         })
//         .then((res) => {
//           const message = res.data;
//           console.log("message: ", message);
//         })
//         .catch((err) => {
//           throw err;
//         });
          
//       };


//   return (

//     <div >
//          <div className="inputEmoji" >
//             <InputEmoji 
//                 value={text}
//                 onChange={setText}
//                 cleanOnEnter
//                 onEnter={sendMessage}
//                 placeholder="Ecrire un message..."
//             />
//             <div className="button-msg" onSubmit={sendMessage} type="submit" >Send</div> 
//         </div>
//     </div>

// <FormInput socket={socket} chat={chat} chatId= {chat._id} senderId= {currentUser._id} />

//   );
// }

// export default FormInput;