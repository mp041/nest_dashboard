import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { useHistory,useParams } from 'react-router';
import Axios from 'axios';
import jwt_decode from 'jwt-decode';


const Navbar = () => {


    const tokens =  sessionStorage.getItem("accessToken")
    // console.log(tokens);
    if(tokens){
        const decode = jwt_decode(tokens);
        console.log(decode);
        var demo = decode.sub;
        console.log(demo);

    }else{
        var demo = null;
    }
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjMxMTY1MzMwLCJleHAiOjE2Mzg5NDEzMzB9.Fwh0A4Wk6XddVUVQN8uV1kKS4GKYaSVDwzPqsSMICx4"
    // console.log("gew" + demo);

    let {id} = useParams();



    // console.log(id);

    const [profile, setProfile] = useState({});
    const history = useHistory();

    useEffect(() => {
      const token = sessionStorage.getItem('accessToken');


        Axios.get(`http://localhost:5000/users/get/${id}`,{
        headers : {
            'Authorization': `Bearer ${token}`,
            accessToken : sessionStorage.getItem("accessToken"),
        }
         }).then((response) => {
        // console.log(response.data[0].name);
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
    const handleLogut = () => {
        sessionStorage.removeItem("accessToken")
    }


    return (
        <div>
            {console.log("hello")}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
                {/* <NavLink className="navbar-brand" to="/Home"></NavLink> */}

                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">


                    <ul className="navbar-nav mr-auto">

                        {sessionStorage.getItem('accessToken') ?
                        <>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/home' >Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/profile/" + demo} >profile</NavLink>

                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" onClick={handleLogut} to='/login' >Logout</NavLink>
                        </li>
                        </>
                        :
                        <>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/login' >Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/register' >Register</NavLink>

                        </li>
                        </>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar







// <NavLink exact activeClassName="active_class" to="/" >
//         About US
//         </NavLink>
//         &nbsp;
//         <NavLink exact activeClassName="active_class" to="/contact" >
//         Contact Us
//         </NavLink>
