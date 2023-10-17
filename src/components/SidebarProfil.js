import React from 'react';
import profil from "../images/Jeannot.jpeg";


function SidebarProfil() {

    const userImage = {
        jack: ["images.jpg", "images.jpg", "images.jpg", "images.jpg", "images.jpg"],
        beni: ["images.jpg"],
    };
    // const userImage = ["images.jpg"];
    let val = 2;

    const borderImage = {
        backgroundImage: 'linear-gradient(to right, red 50%, blue 50%)',
        borderImageSlice: '1',
        borderImageRepeat: 'round',
      };

  return (

    <div className="status-container">
      <div className="status">
        <div className="status-icon">
          <img src={profil} style={{width: "60px" , borderRadius: "100%"}} alt="status icon" />
        </div>
        <div className="status-info">
          <h4 className="status-title">John Doe</h4>
          <p className="status-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  
        
//     <div className="small-sidebar">
//             <img
//                 src={profil}
//                 alt="profil"
//                 title="profil"

//                 style={{
//                     width: '100px',
//                     ...borderImage,
//                     // border: userImage.jack.length > 1 ? `${val}px solid red` : `${val * userImage.jack.length}px solid yellow`,
//                     textAlign: 'center',
//                     margin: `1px auto`,
//                     borderRadius: "100%",
//                   }}
//             />

//             {/* <img
//                 src={profil}
//                 alt="profil"
//                 title="profil"
//                 style={userImage.beni.length > 1 ? 
//                     {   
//                         width: '100px',
//                         border: `${val}px solid red`,
//                         textAlign: 'center',
//                         margin: `1px auto`,
//                         borderRadius: "100%"
//                     } : {
//                         width: '100px',
//                         border: `${val}px solid yellow`,
//                         textAlign: 'center',
//                         margin: `1px auto`,
//                         borderRadius: "100%",
//                     }
//                 }
//             /> */}
//        </div>


  )
}

export default SidebarProfil;