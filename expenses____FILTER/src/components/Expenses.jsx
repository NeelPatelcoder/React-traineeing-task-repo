import { TableCell, Table, TableBody, TableHead, TableRow, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getUsers } from "../Services/Api";
import items from '../DataBase/data.json';

const useStyles = makeStyles({
  table: {
    width: '70%',
    margin: '50px 0 0 180px'
  },
  thred: {
    '& > * ': {
      background: '#000000',
      color: '#FFFFFF',
      fontSize: 20
    }
  },
  row: {
    '& > *': {
      fontSize: 18
    }
  }
})


const ExpenseList = () => {

  const [users, setUsers] = useState([]);
  // const [money,setMoney]=useState(items)
  const classes = useStyles();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");


  const handleFilterChange = (e, filterType) => {
    switch (filterType) {
      case "min":
        setMin(e.target.value);
        break;
      case "max":
        setMax(e.target.value);
        break;
      default:
        break;
    }
  }


  useEffect(() => {
    
    let filteredProduct = items;

    if (min !== "") {
      filteredProduct = filteredProduct.filter(user => parseInt(user.expense) >= parseInt(min))
    }
    if (max !== "") {
      filteredProduct = filteredProduct.filter(user => parseInt(user.expense) <= parseInt(max))
    }
    setUsers(filteredProduct)
    console.log(filteredProduct)
    getAllUsers();
  }, [min, max])

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response);
    setUsers(response.data);
    
  }
  



  return (
    <div>
      <form style={{ margin: '50px 0 0 400px', display: "flex" }}>
        <h4 style={{ marginRight: 50 }}>Filter : </h4>
        <input typeof="number" style={{ marginRight: 30 }} name="minprice" onChange={(e) => handleFilterChange(e, "min")} placeholder="min price" />
        <input typeof="number" name="maxprice" onChange={(e) => handleFilterChange(e, "max")} placeholder="max value" />
      </form>
      <Table className={classes.table}>

        <TableHead>
          <TableRow className={classes.thred}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Item</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Expenses</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {
            users.map((user,key) => (
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

    </div>
  )
}
export default ExpenseList;