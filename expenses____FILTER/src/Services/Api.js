import axios from 'axios';



const url='http://localhost:3003/users';


//fetch data

export const getUsers = async()=>{
    return await axios.get(url);
}

export const addData = async (items) =>{
    return await axios.post(url,items);
}
export const deleteUser = async(id) => {
    return await axios.delete(`${url}/${id}`)
}