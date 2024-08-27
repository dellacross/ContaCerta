import axios from "axios";

export const registerUser = async (name, email, password, nickname) => {

    try {
        const response = await axios.post('http://localhost:3333/register', 
            {  
                name: name,
                email: email,
                password: password,
                nickname: nickname
            }
        )    
        return response
    } catch (error) {
        return error
    }
}