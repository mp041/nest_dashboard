import React,{useState,useEffect} from 'react'
import { useHistory,useParams } from 'react-router-dom';
import Axios from 'axios';
import jwtDecode from 'jwt-decode';

const Profile = () => {


    const [user, setUser] = useState({
        firstName : "",
        lastName:"",
        email: "",
        phone : "",
        password: ""
    });

    let name,value;
    const handleInput = (e) => {
        name = e.target.name;
        value =  e.target.value;

        setUser({...user,[name]:value});
    }



    const tokens =  sessionStorage.getItem("accessToken")
    console.log(tokens)


    let {id} = useParams();
    console.log(id);

    const [profile, setProfile] = useState({});
    const history = useHistory();

    useEffect(() => {
        Axios.get(`http://localhost:5000/users/get/${id}`,{
        headers : {
            'Authorization': `Bearer ${tokens}`,
            accessToken : sessionStorage.getItem("accessToken"),
        }
         }).then((response) => {
        console.log(response.data.data[0].firstName)
        // console.log(response.data[0].firstName);
        if(response.data.error){
            console.log(response.data.error);
            alert("You Are not logged In!!!")

            history.push("/login")

        }else{
            console.log("getting token");
            setProfile(response.data.data[0]);


        }
    })
    }, [])

    const DataPost = (e) => {
      const token = sessionStorage.getItem('accessToken');

        e.preventDefault();
        const data = { firstName : user.firstName, lastName : user.lastName, email : user.email, phone : user.phone, password : user.password}
        console.log(data)
        Axios.put(`http://localhost:5000/users/${id}`, data).then((res) => {
            // alert(res.data.message);
            // if(res.data.message ){
                console.log(res);
                alert("user update successfully");
                history.push('/home');
                console.log(res);


        })
    }


    return (
        <>
        <div className="container mt-4 text-center">

            {sessionStorage.getItem('accessToken') ?
            <>
            <h1>Profile Page</h1>

            <form className = "container mt-3" method="POST" onSubmit={DataPost}  >
                <div className="mb-3">
                    <h3><label className="form-label">{profile.firstName}</label></h3>

                    <input type="text" className="form-control text-center" placeholder="Update your name" id="firstName" name="firstName" value={user.firstName} onChange={handleInput}  />

                </div>
                <div className="mb-3">
                    <h3><label className="form-label">{profile.lastName}</label></h3>

                    <input type="text" className="form-control text-center" placeholder="Update your name" id="lastName" name="lastName" value={user.lastName} onChange={handleInput}  />

                </div>
                <div className="mb-3">
                    <h3><label className="form-label">{profile.email}</label></h3>

                    <input type="email" className="form-control text-center" placeholder="Update your name" id="email" name="email" value={user.email} onChange={handleInput} readonly />

                </div>

                <div className="mb-3">
                <h3><label className="form-label">{profile.phone}</label></h3>
                    <input type="tel" className="form-control text-center" placeholder="Update your phone"  id="phone" name="phone" value={user.phone} onChange={handleInput} />
                </div>

                <div className="mb-3">
                <h3><label className="form-label">password</label></h3>
                    <input type="password" className="form-control text-center" placeholder="Update your Password"  id="password" name="password" value={user.password} onChange={handleInput} />
                </div>

                <button type="submit" className="btn btn-dark ">Update</button>
            </form>
            </> : <h1> Unauthorized : 404 </h1> }


        </div>
        </>
    )
}

export default Profile
