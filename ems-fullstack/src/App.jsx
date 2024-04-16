import './App.css'
import Header from './component/Header'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeComponent from './component/EmployeeComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          <Route path='/emplist' element={<ListEmployeeComponent />}></Route>
          <Route path='/add-employee' element={<EmployeeComponent />}></Route>
          <Route path='/update-employee/:id' element={<EmployeeComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
