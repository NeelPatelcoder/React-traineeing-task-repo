import './App.css';
import UserExpenses from './components/UserExpenses';
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import AddExpenses from './components/AddExpenses';



function App() {
  return (
    <>
    
    <BrowserRouter>

      <NavBar />
      <Switch>
        
        <Route exact path='/' component={UserExpenses} />
        <Route exact path='/addexpenses' component={AddExpenses} />
        
        
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
