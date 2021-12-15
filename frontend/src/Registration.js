import React, {useState} from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';


const Registration = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        phone : "",
        email : "" ,
        password : "",

    });

    let name,value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const DataPost = async(e) => {
        e.preventDefault();
        const data = { firstName : user.firstName,
            lastName : user.lastName,
            phone : user.phone,
            email : user.email,
            password : user.password,
          }

      Axios.post('http://localhost:5000/users', data).then((res) => {
            console.log(res);

              alert("Register Success");
              history.push("/login")


        });

        // const {name, email, password,  confirmPassword } = user;

        console.log("demo");

        // const fetch = await Axios.post('http://localhost:5000/auth/register')
        // console.log(fetch);
        // const resd = await fetch('http://localhost:5000/auth/register',{
        //     method:"POST",
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },

        //     body :JSON.stringify({name,email,password,confirmPassword})

        // });
        // return resd.json();
        // console.log("before data");
        // const data = await resd.json();
        // console.log(data);

        alert("register success")
        // setUser({name:"",email:"",password:"",cpassword:""});
    }

    return (
        <div>

            <form className="container mt-3" onSubmit={DataPost} method= "POST">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">firstName</label>
                    <input type="text" className="form-control" name="firstName" id="firstName" value={user.firsName} onChange={handleInput} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">lastName</label>
                    <input type="text" className="form-control" name="lastName" id="lastName" value={user.lastName} onChange={handleInput} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                    <input type="text" className="form-control" name="phone" id="phone" value={user.phone} onChange={handleInput} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" value={user.email} onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" value={user.password} onChange={handleInput}  />
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </div>
    )
}

export default Registration
