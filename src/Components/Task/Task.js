import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Task.css'

const Task = (props) => {
    const { title, code, image } = props.task;


    // console.log(code);
    return (
        <div className="col-md-3 col-sm-6 p-3">
            <Link className="img-link d-flex flex-column text-decoration-none justify-content-center text-reset" to={"/reg/" + title}>
                <img className="w-100 p-3" src={image} alt="" />
                <h3 className="text-center ">{title}</h3>
            </Link>
        </div>
    );
};

export default Task;