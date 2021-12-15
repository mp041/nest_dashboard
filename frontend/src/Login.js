import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        email:"",
        password: ""
    });

    let name,value;
    const handleInput = (e) => {
        name = e.target.name;
        value =  e.target.value;

        setUser({...user,[name]:value});
    }

    const DataPost = (e) => {
        e.preventDefault();


        const data = { username : user.email, password : user.password }
        console.log(data,"dataaaaaaaaa")
        Axios.post('http://localhost:5000/login', data).then((res) => {
            console.log(res.data.access_token,"ressssss")
            // alert(res.data.message);
            // if(res.data.message ){
                alert("user login successfully");

                sessionStorage.setItem("accessToken",res.data.access_token);
                history.push("/home")
            // }


                // window.alert("Invalid Registration")
                // console.log("INvalid");

                // history.push("/login")


        });

        // alert("user login success")
    }

    return (
        <div>
            <form className = "container mt-3" method="POST" onSubmit={DataPost} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleInput}  />
                    <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handleInput} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
