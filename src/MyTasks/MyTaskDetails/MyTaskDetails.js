import React from 'react';
import './MyTaskDetails.css';

const MyTaskDetails = (props) => {
    return (
        <div className="col-md-3 col-6">
            <div className="bg-white rounded-lg d-flex justify-content-between border">
                <div>
                    <h4>{props.myTask.title}</h4>
                    <h6>Date: {props.myTask.date}</h6>
                </div>
                <div className="align-self-center">
                    <button onClick={() => props.handleCancelTask(props.myTask)} className="btn border">
                        cancel
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MyTaskDetails;