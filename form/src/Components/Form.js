import React,{useState} from "react";
import countries from "./countries";
import './Form.css';

const Form = () => {

    const [name,setName]= useState("");
    const [lname,setLname]= useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [country, setCountry] =useState("");
    const [acceptedTerms, setAcceptedTerms] =useState(false);

  
    const handleSubmit = (event) => {
      console.log(`
        FirstName:${name}
        LastName:${lname}
        Email: ${email}
        Password: ${password}
        Country: ${country}
        Accepted Terms: ${acceptedTerms}
      `);
  
      event.preventDefault();
    }
  




    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>

            <label>
                First Name:
                <input 
                    name="firstname"
                    type="text"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
            </label>
            <label>
                Last Name:
                <input 
                    name="lastname"
                    type="text"
                    value={lname}
                    onChange={e=>setLname(e.target.value)}
                />
            </label>

            <label>
                Email:
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
            </label>

            <label>
                Password:
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required />
            </label>

            <label>
                Country:
                <select
                    name="country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required>
                    <option key=""></option>
                    {countries.map(country => (
                        <option key={country}>{country}</option>
                    ))}
                </select>
            </label>

            <label>
                <input
                    name="acceptedTerms"
                    type="checkbox"
                    onChange={e => setAcceptedTerms(e.target.value)}
                    required />
                I accept the terms of service
            </label>

                        <div className="box">
                            <div className="btn">
                                <button>Submit</button>
                                <div className="bg"></div>
                                <div className="bg-gradient"></div>
                            </div>
                        </div>

        </form>


    )
}

export default Form;