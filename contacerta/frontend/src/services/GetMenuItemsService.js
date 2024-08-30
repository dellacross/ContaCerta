import axios from "axios";

export const GetMenuItemsService = async () => {
    const token = localStorage.getItem('token')
    
    return await 
    axios
    .get('http://localhost:3333/pages', 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}