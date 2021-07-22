import {FormGroup,FormControl,InputLabel,Input,Button,Typography} from "@material-ui/core"
import './AddExpenses.css';
import { useState } from "react";
import {addData} from '../Services/Api';
import {useHistory} from 'react-router-dom';
import items from '../DataBase/data.json';


const initialValues = {
    name: '',
    item:'',
    date:'',
    expense: '',
}

const AddExpenses = () =>{
 const [user, setUser] = useState(initialValues)
 // destructuring 
 const {name, item, date, expense} = user ;

 //complete

 const history = useHistory();


 const onvalueChange= (e) => {
     setUser(
         {...user,[e.target.name]:e.target.value}         
     )
 }


 // post data 
 const addDatauser = async () =>{
     await addData(items);
     history.push('./');
 }

 return (
<FormGroup className='container'>
    <Typography variant='h4'>Add User</Typography>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={ (e) => onvalueChange(e)} name='name' value={name}/>
    </FormControl>
    <FormControl>
        <InputLabel>Item</InputLabel>
        <Input onChange={ (e) => onvalueChange(e)} name='item' value={item}/>
    </FormControl>
    <FormControl>
        <InputLabel>Date</InputLabel>
        <Input onChange={ (e) => onvalueChange(e)} name='date' value={date}/>
    </FormControl>
    <FormControl>
        <InputLabel>Expense</InputLabel>
        <Input onChange={ (e) => onvalueChange(e)} name='expense' value={expense}/>
    </FormControl>
    <Button onClick={ () => addDatauser()}>Add Expenses</Button>

</FormGroup>   
 );
}

export default AddExpenses;