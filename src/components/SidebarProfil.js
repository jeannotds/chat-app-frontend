import React from 'react';
import profil from "../images/Jeannot.jpeg";


function SidebarProfil() {

    const userImage = {
        jack: ["images.jpg", "images.jpg", "images.jpg", "images.jpg", "images.jpg"],
        beni: ["images.jpg"],
    };
    // const userImage = ["images.jpg"];
    let val = 3;

  return (
        
    <div className="small-sidebar" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        fontWeight: "bold",
        fontSize: "12px",
    }}>
        <p>Jeannot Diambu</p>
            <div>
            <img
                src={profil}
                alt="profil"
                title="profil"

                style={{
                    width: '100px',
                    border: userImage.jack.length > 1 ? `${val}px solid red` : `${val * userImage.jack.length}px solid yellow`,
                    textAlign: 'center',
                    borderColor: "white",
                    margin: `0 auto`,
                    borderRadius: "100%",
                  }}
            />
            </div>
       </div>
  );
}

export default SidebarProfil;