import axios from "axios";

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:3333/login', 
            {  
                email: email,
                password: password
            }
        )
        return response
    } catch (error) {
        return error
    }
}
