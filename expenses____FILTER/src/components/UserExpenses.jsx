import { getUsers } from '../Services/Api'
import { useEffect, useState } from 'react'
import Expenses from './Expenses'



function UserExpenses() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAlluser();
    }, [])

    const getAlluser = async () => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }
   
    return (
        
        <Expenses />       
        
    );

}
export default UserExpenses;