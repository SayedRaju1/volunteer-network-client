import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import Task from '../Task/Task';
import './Home.css'

const Home = () => {
    const [allTask, setAllTask] = useState([]);


    useEffect(() => {
        fetch('https://sleepy-tor-28884.herokuapp.com/tasks')
            .then(res => res.json())
            .then(data => setAllTask(data))
    }, [])
    // console.log(allTask);
    return (
        <div className="container-fluid">
            <h1 className="text-center headerText">PEOPLE GROW BY HELPING PEOPLE.</h1>
            {/* <InputGroup size="lg" className="p-3 m-auto">
                <FormControl
                    placeholder="Search...."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="primary">Search</Button>
                </InputGroup.Append>
            </InputGroup> */}
            <div className="row">
                {
                    allTask.map(task => <Task key={task.code} task={task}></Task>)
                }
            </div>


        </div>
    );
};

export default Home;