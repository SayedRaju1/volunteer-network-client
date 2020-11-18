import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Registration.css'

const Registration = () => {
    const { title } = useParams();
    const [allTask, setAllTask] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()

    useEffect(() => {
        fetch('https://sleepy-tor-28884.herokuapp.com/tasks')
            .then(res => res.json())
            .then(data => setAllTask(data))
    }, []);
    // let selectedTask = {};
    // selectedTask = allTask.find(task => task.title === title);
    // // console.log(selectedTask);


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        fetch('https://sleepy-tor-28884.herokuapp.com/addTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Registration Done')
                    history.push("/")
                }
            })
    }

    return (
        <div className="reg d-flex justify-content-center">
            <form className="w-50 border rounded-lg p-5 bg-white reg-form" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" className="form-control my-3" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                {errors.name && <span className="error">Name is required</span>}

                <input name="email" className="form-control my-3" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                {errors.email && <span className="error">Email is required</span>}

                <input name="date" className="form-control my-3" type="date" ref={register({ required: true })} placeholder="Date" />
                {errors.address && <span className="error">Address is required</span>}

                <input name="Desicription" className="form-control my-3" ref={register({ required: true })} placeholder="Desicription" />
                {errors.phone && <span className="error">Desicription is required</span>}

                <input name="title" className="form-control my-3" defaultValue={title} ref={register({ required: true })} placeholder="Voluteer Task Title" />
                {errors.phone && <span className="error">Voluteer Task Title is required</span>}

                <input className="btn btn-primary w-100" type="submit" />
            </form>
            {/* <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)} className="w-50 border rounded-lg p-5 bg-white d-flex justify-content-center flex-column">
                    <input name="name" defaultValue={loggedInUser.name} placeholder="Full Name" className="form-control my-3" />
                    <input name="email" defaultValue={loggedInUser.email} placeholder="Username or Email" className="form-control my-3" />
                    <input type="date" placeholder="Date" className="form-control my-3" required />
                    <input type="text" placeholder="Desicription" className="form-control my-3" />
                    <input type="text" defaultValue={title} placeholder="Organize books at the library" className="form-control my-3" />
                    <input className="btn btn-primary w-100" type="submit" />
                </form>
            </div> */}
        </div>


    );
};

export default Registration;