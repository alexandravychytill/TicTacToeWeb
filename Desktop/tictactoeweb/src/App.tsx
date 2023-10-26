import React from 'react';
import './App.css';
import { Home } from './home/Home';
import Game from './game/Game';
import {
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
          <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Game" element={<Game />} />
          </Routes>
  );
}
