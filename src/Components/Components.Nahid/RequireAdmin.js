import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from './Hooks/useAdmin';
import Loading from './Loading';

const RequireAdmin = ({ children }) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = UseAdmin(user);
    if (loading || adminLoading) {
      return <Loading />;
    }
    if (!user || !admin) {
        signOut(auth);
        localStorage.removeItem("accessToken")
      return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children;
  };
  
  export default RequireAdmin;