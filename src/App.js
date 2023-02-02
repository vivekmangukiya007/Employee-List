import './emp-list.css';
import { useState } from 'react';
import Grid from './componets/Grid';
import { Routes, Route } from "react-router-dom"
import List from './componets/List';
import UserData from './UserContext';

function App() {
  
  const [value, setValue] = useState([]);
  return (
    <>
      <UserData.Provider value={{ value, setValue }}>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/grid" element={<Grid />} />
        </Routes>
      </UserData.Provider>
    </>
  )
}

export default App;
