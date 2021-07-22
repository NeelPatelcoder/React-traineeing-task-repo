import {AppBar,Toolbar} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
const NavBar = () =>{
    return (
        <AppBar className="appbar" >
            <Toolbar className="appbar">
                
                <NavLink to='./' exact >UserExpenses</NavLink>
                <NavLink to='./addexpenses' exact >Add Expenses</NavLink>
                
            </Toolbar>
        </AppBar>
    )
}

export default NavBar