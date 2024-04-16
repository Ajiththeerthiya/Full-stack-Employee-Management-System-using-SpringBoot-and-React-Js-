import React, { useState, useEffect } from 'react'
import { listEmployees, deleteEmployee } from '../service/EmployeeService.js'
import { useNavigate } from 'react-router-dom'


function ListEmployeeComponent() {
    const navigate = useNavigate();

    const [employee, setEmployee] = useState([])

    useEffect(() => {
        getAllEmployee()
    }, [])

    function getAllEmployee() {
        listEmployees().then((response) => {
            setEmployee(response.data)
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigate('/add-employee')
    }
    function updatehandler(id) {
        navigate(`/update-employee/${id}`)
    }
    function deletehandler(id) {
        deleteEmployee(id).then((response) => {
            getAllEmployee()
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <>
            <div className='container'>
                <h3 className='text-center mt-3'>List Of Employees</h3>
                <button className='btn btn-danger mb-2' onClick={addNewEmployee}>Add Employee</button>
                <table className='table table-success table-striped table-bordered table-hover'>
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope='col'>Update</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            employee.map(item =>
                                <tr key={item.id} className='text-center'>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td><button className='btn btn-success' onClick={() => updatehandler(item.id)}>Update</button></td>
                                    <td><button className='btn btn-primary' onClick={() => deletehandler(item.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListEmployeeComponent