import {getUsers} from '../Services/Api'
import {useEffect,useState} from 'react'
import {Table,TableHead,TableBody,TableCell,TableRow} from '@material-ui/core'

const UserExpenses = ( ) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAlluser();
    }, [])

    const getAlluser = async () =>{
       const response = await getUsers();
       console.log(response.data);
       setUsers(response.data);
    }
    return (
        
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Expenses</TableCell>
                </TableRow>
                
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                       <TableRow key={user.id}>
                           <TableCell>{user.id}</TableCell>
                           <TableCell>{user.name}</TableCell>
                           <TableCell>{user.item}</TableCell>
                           <TableCell>{user.date}</TableCell>
                           <TableCell>{user.expense}</TableCell>
                       </TableRow>
                    ))
                }
            </TableBody>
        </Table>
       
    );
}

export default UserExpenses;