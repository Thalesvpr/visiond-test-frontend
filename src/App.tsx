
import { Navigate, Outlet } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';

function App() {
    return (
    <>
    <NavBar/>
    <Outlet></Outlet>
    <Navigate to="/forms" replace={true}/>
    </>
  )
}

export default App
