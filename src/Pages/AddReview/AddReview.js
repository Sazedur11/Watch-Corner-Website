import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css'

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://ghastly-demon-70793.herokuapp.com/Services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Your Review Successfully.');
                    reset();
                }
            })
    };
    return (
        <div id="addreview" className="add-Review mb-5">
            <h5 className="mt-3">Add Your Review</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />
                <textarea {...register("description")} placeholder="Type Your Service" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;