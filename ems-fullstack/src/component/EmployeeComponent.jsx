import React, { useState } from 'react'
import { savedEmployee, updateDataEmployee, editEmployee } from '../service/EmployeeService'
import '../style/employeeform.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function EmployeeComponent() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()
    const { id } = useParams()


    function pageTitle() {
        if (id) {
            return <h4 className='title'>Update Employees</h4>
        } else {
            return <h4 className='title'>Add Employees</h4>
        }
    }

    useEffect(() => {
        if (id) {
            editEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            })
        }
    }, [id])

    function saveEmployee(e) {
        e.preventDefault()

        const employee = { firstName, lastName, email }
        if (firstName === "" || lastName === "" || email === "") {
            return;
        }
        if (id) {
            updateDataEmployee(id, employee).then((response) => {
                navigate('/')
            }).catch(error => {
                console.error(error);
            })
        } else {
            savedEmployee(employee).then((response) => {
            }).catch(error => {
                console.error(error);
            })
            navigate("/")
        }
    }

    return (
        <>
            <div className='st-ba'>
                <div className='container d-flex justify-content-center align-items-center '>
                    <div className="text-center card card-top" >
                        <div className='card-head'>
                            {
                                pageTitle()
                            }
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className='form-group mb-3'>
                                    <input
                                        type="text"
                                        placeholder='Enter FirstName'
                                        value={firstName}
                                        className='form-control'
                                        onChange={(e) => setFirstName(e.target.value)}
                                        id="validationCustom01"
                                        required
                                    />
                                </div>
                                <div className='form-group mb-3'>
                                    <input
                                        type="text"
                                        placeholder='Enter LastName'
                                        value={lastName}
                                        className='form-control'
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='form-group mb-3'>
                                    <input
                                        type="text"
                                        placeholder='Enter Email'
                                        value={email}
                                        className='form-control'
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <button className='btn btn-success' onClick={saveEmployee}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeComponent