import axios from "axios";

export const registerUser = async (name, email, password) => {
    return await axios.post('http://localhost:3333/register', 
        {  
            name: name,
            email: email,
            password: password
        }
    )    
}