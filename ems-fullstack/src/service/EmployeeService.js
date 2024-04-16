import axios from "axios";

const URL = "http://localhost:8080/api/emp";

export const listEmployees = () =>  axios.get(URL);

export const savedEmployee = (employee) => axios.post(URL, employee);

export const editEmployee = (employeeid) => {
    return axios.get(URL + '/' + employeeid);
}

export const updateDataEmployee = (employeeid , employee) =>{
    return axios.put(URL + '/' + employeeid,employee);
}
export const deleteEmployee = (employeeId)=> axios.delete(URL + '/' + employeeId);