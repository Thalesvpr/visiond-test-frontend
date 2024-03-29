
import { ReactNode } from 'react';
import {Navigate} from 'react-router-dom'
import { isAuthenticated } from './AuthService';


interface Props {
    element: ReactNode
}
function PrivateRoute({element}: Props) {
  const ableToAccess = isAuthenticated();
  console.log(`ableToAccess ${ableToAccess}`)
  return ableToAccess ? element : <Navigate to="/login" replace />;
}


export default PrivateRoute;