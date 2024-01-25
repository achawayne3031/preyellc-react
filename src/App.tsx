import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Verified from './pages/auth/Verified';
import MyOtp from './pages/auth/MyOtp';




import NotFound from './pages/NotFound';

/// Admin ///
import AdminLayer from './pages/admin/layout/AdminLayer';
import Dashboard from './pages/admin/pages/Dashboard';






function App() {
  return (
 
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<SignUp />} />
        </Route>

     
        {/* User */}
        <Route path="/auth">
          <Route index element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="verified" element={<Verified />} />
          <Route path="otp-verify" element={<MyOtp />} />
        </Route>

       


        {/* Admin */}
        <Route path="/dashboard" element={ <AdminLayer />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

       


        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
