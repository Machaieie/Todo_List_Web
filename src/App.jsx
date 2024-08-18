import React,{Suspense, Lazy} from 'react';
import {Routes, Route} from "react-router-dom"
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './screens/dashboard/Dashboard';
import Task from './screens/task/Task';
import Collaborators from './screens/collaborators/Collaborators';


const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path='/*' element={<AdminLayout/>}>
            <Route path="dashboard" element={<Dashboard/>}></Route>
            <Route path='tasks' element={<Task/>}></Route>
            <Route path='colaborators' element={<Collaborators/>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};


export default App;