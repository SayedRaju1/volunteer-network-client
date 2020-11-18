import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import MyTaskDetails from './MyTaskDetails/MyTaskDetails';
import './MyTasks.css'

const MyTasks = () => {
    const [myTasks, setMyTasks] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const myTasksFiltered = myTasks.filter(myTasksList => myTasksList.email === loggedInUser.email);
    const history = useHistory()






    useEffect(() => {
        fetch('https://sleepy-tor-28884.herokuapp.com/myTasks')
            .then(res => res.json())
            .then(data => setMyTasks(data))
        // console.log(myTasks);
    }, [])

    const handleCancelTask = (myTask) => {
        const id = myTask._id;
        console.log(id);
        fetch(`https://sleepy-tor-28884.herokuapp.com/cancelTask/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    // alert('Task Canceled')
                    history.push("/")
                    history.push("/myTasks")
                    console.log(result);
                }
            })
    }

    return (
        <div className="row myTask m-5 ">
            {
                myTasksFiltered.map(myTask => <MyTaskDetails
                    myTask={myTask}
                    handleCancelTask={handleCancelTask}
                ></MyTaskDetails>)
            }
        </div>
    );
};

export default MyTasks;