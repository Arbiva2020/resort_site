import React from 'react';
import Home from "./pages/Home.js";
import Rooms from './pages/Rooms.js';
import SingleRoom from './pages/SingleRoom.js';
import Error from './pages/Error.js';
import Navbar from './components/Navbar.js';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
<div className="App">
  <Navbar />
<Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/rooms/" element={<Rooms />} />
<Route exact path="/rooms/:slug" element={<SingleRoom />} />
<Route element={<Error />} />
</Routes>
</div>
  );
}

export default App;
