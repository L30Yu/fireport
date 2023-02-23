import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import { Grid } from "./component/Grid";
import { Error } from "./component/Error";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Grid/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
