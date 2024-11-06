import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const handleOK = () => {
        setSubmitted(false)
        reset()
    }

    const onSubmit = async (data) => {
        const res = await axios.post('http://localhost:5173/api/contactform', data)

        if (res.status === 200) {
            setSubmitted(true)
            reset()
        }
    }


    if (submitted) {
        return (
            <div className="informationbox">
                <h1>Tack för ditt meddelande!</h1>
                <p>Vi återkommer till dig så snart vi kan.</p>
                <button className="btn-green" onClick={handleOK}>OK</button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="headline">
                <h1>SEND US A MESSAGE</h1>
                <p>Fill out this form to get in touch with us.</p>
            </div>
            <div className="body">
                <div className="form-group">
                    <input type="text" placeholder="Name" {...register('name', {required: 'The name field is required'})} />
                    <span>{errors.name && errors.name.message}</span>
                </div>
                
                <div className="form-group">
                    <input type="email" placeholder="Email" {...register('email', {required: 'The email field is required'})} />
                    <span>{errors.email && errors.email.message}</span>
                </div>
                <div className="form-group">
                    <textarea placeholder="Message" {...register('message', {required: 'The message field is required'})} ></textarea>
                    <span>{errors.message && errors.message.message}</span>
                </div>

                <button type="submit">SUBMIT</button>
            </div>
        </form>
        )
        }

        export default ContactForm