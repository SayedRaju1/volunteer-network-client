import React, { useContext, useEffect, useState } from 'react';
import './MyTaskDetails.css';

const MyTaskDetails = (props) => {


    console.log(props);



    return (
        <div className="ml-5 col-md-5">
            <div className=" bg-white  m-3 ml-5 px-5  rounded-lg d-flex justify-content-between border p-4">
                <div>
                    <h4>{props.myTask.title}</h4>
                    <h6>Date: {props.myTask.date}</h6>
                </div>
                <div className=" align-self-center">
                    <button onClick={() => props.handleCancelTask(props.myTask)} className="btn border">
                        cancel
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MyTaskDetails;