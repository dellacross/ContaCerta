import axios from "axios";

export const loginUser = async (email, password) => {
    return await axios.post('http://localhost:3333/login', 
        {  
            email: email,
            password: password
        }
    )    
}