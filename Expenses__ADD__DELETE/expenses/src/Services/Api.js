import axios from 'axios';



const url='http://localhost:3003/users';

export const getUsers = async()=>{
    return await axios.get(url);
}

export const addData = async (user) =>{
    return await axios.post(url,user);
}
export const deleteData = async (id) =>{
    return await axios.delete(`${url}/${id}`)
}