import React from 'react';
import './App.css';
import Employees from './Employees.json';
import { Link } from 'react-router-dom';

function Team() {
  return (
    <div>
        <div className="App">
            <h1>{Employees[0].name}</h1>
            <h2>{Employees[0].age}</h2>
            <h2>{Employees[0].state}</h2>
            <h2>{Employees[0].gender}</h2>
            <h2>{Employees[0].married}</h2>
            {console.log(Employees)}
            <h1>{Employees[1].name}</h1>
            <h2>{Employees[1].age}</h2>
            <h2>{Employees[1].state}</h2>
            <h2>{Employees[1].gender}</h2>
            <h2>{Employees[1].married}</h2>
            {/*  */}
            <h1>{Employees[2].name}</h1>
            <h2>{Employees[2].age}</h2>
            <h2>{Employees[2].state}</h2>
            <h2>{Employees[2].gender}</h2>
            <h2>{Employees[2].married}</h2>
        </div>
        <Link to="/other">
            <button>Other</button>
        </Link>
    </div>
  )
}

export default Team;