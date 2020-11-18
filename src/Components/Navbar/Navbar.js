import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <div className="row p-5 w-100 ">
            <div className="col-md-4">
                <img className="img-fluid w-50" src="https://i.ibb.co/Wks0Lx1/Group-1329.png" alt="" />
            </div>
            <div className="d-flex pt-3 col-md-8 justify-content-around align-items-center">

                <Link className="text-decoration-none text-reset" to="/home"><p className="p-3">Home</p></Link>
                <p className="p-3">Donation</p>
                <p className="p-3">Event</p>
                {loggedInUser.email ?
                    <p className="p-3 px-5 text-primary border border-primary bg-white rounded-lg">{loggedInUser.name}</p> :
                    <p className="p-3 ">Blog</p>}
                {loggedInUser.email ?
                    <Link className="text-decoration-none" to="/myTasks"><p className="p-3  admBtn rounded-lg text-center text-white">My Tasks</p></Link>
                    :
                    <Link className="text-decoration-none" to="/login"><p className="p-3 regBtn rounded-lg text-center bg-primary text-white">Register</p></Link>}

                {/* <p className="p-3 admBtn rounded-lg text-center text-white">Admin</p> */}

            </div>
        </div>
    );
};

export default Navbar;