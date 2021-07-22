import { getUsers,deleteData } from '../Services/Api'
import { useEffect, useState } from 'react'
import { Table, TableHead, TableBody, TableCell, TableRow, Button } from '@material-ui/core'



const UserExpenses = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAlluser();

    }, [])

    const getAlluser = async () => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

    const deleteHandler = async(id) => {
        await deleteData(id);
        getAlluser();
    }

    return (

        <Table>
            <TableHead>
                <TableRow>

                    <TableCell >Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell sortDirection='desc'>Expenses</TableCell>

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
                            <TableCell sortDirection='desc'>{user.expense}</TableCell>
                            <Button variant="contained" color="secondary" onClick={()=>deleteHandler(user.id)}>
                                Delete
                            </Button>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    );
}

export default UserExpenses;