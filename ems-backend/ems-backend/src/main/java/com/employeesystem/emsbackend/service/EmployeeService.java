package com.employeesystem.emsbackend.service;

import com.employeesystem.emsbackend.entity.Employee;
import com.employeesystem.emsbackend.exception.ResourceNotFoundException;
import com.employeesystem.emsbackend.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee findEmployeeById(Long employeeId) {
        return employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceAccessException("Employee Id " + employeeId + " not found"));

    }
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }
    public Employee updateEmployee(Long id,Employee updatedEmployee){
        Employee emp = findEmployeeById(id);
        emp.setFirstName(updatedEmployee.getFirstName());
        emp.setLastName(updatedEmployee.getLastName());
        emp.setEmail(updatedEmployee.getEmail());
        employeeRepository.save(emp);
        return emp;
    }
    public void deleteEmployeeById(Long id){
        boolean exist = employeeRepository.existsById(id);
        if (!exist){
            throw new ResourceNotFoundException("Employee not found Id "+ id);
        }
        employeeRepository.deleteById(id);
    }
//    public Employee findFirstNameAndEmail(String firstname,String email){
//        return employeeRepository.findByFirstNameAndEmail(firstname,email);
//    }
    public Employee findEmployeeByEmail(String email){
       return employeeRepository.findByEmail(email);
    }
}
