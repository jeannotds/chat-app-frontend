import axios from "axios";

export const getUser = async(id) => {
   const user = await axios.get(`http://localhost:8001/api/user/${id}`);
   try {
    return user.data;
   }
   catch(err) {
    throw err;
   }
};