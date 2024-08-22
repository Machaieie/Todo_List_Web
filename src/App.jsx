import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import AdminLayout from './layouts/AdminLayout';
import { AuthProvider } from './context/AuthContext';
import PublicLayout from './layouts/PublicLayout';
import PrivateRoute from './routes/PrivateRoutes';

const Dashboard = lazy(() => import('./screens/dashboard/Dashboard'));
const Task = lazy(() => import('./screens/task/Task'));
const Collaborators = lazy(() => import('./screens/collaborators/Collaborators'));
const Login = lazy(() => import('./screens/login/Login'));
const Signup = lazy(() => import('./screens/signup/Signup'));
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<PublicLayout />}>
            <Route index element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Route>

          {/* Rotas protegidas */}
          <Route path='/admin' element={<PrivateRoute />}>
            <Route path="" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="tasks" element={<Task />} />
              <Route path="colaborators" element={<Collaborators />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Suspense>
  );
};

export default App;