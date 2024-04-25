import { blueGrey } from "@mui/material/colors";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";

export const LandingPage = () => {
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');

    return (
        
        <div style={{marginTop: '-50px', backgroundColor: blueGrey}}>
            <div>
                <CiUser size={60} />
                <h2 style = {{fontSize: '30px'}}> {firstName} {lastName}</h2>
            </div>
        <div className="auth-form-container">
            <table style={{width: '100%', marginBottom: '10px', borderSpacing: '10px 20px'}}>
                <thead>
                    <tr>
                        <th style={{fontSize: '20px', color: "black", marginRight: '10px', fontWeight: 'bold'}}>Team Name</th>
                        <th style={{fontSize: '20px', color: "black", marginRight: '10px', fontWeight: 'bold'}}>Team Position</th>
                        <th style={{fontSize: '20px', color: "black", marginRight: '10px', fontWeight: 'bold'}}>Sport</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        ['Spartans', 'Team Player', 'Basketball'],
                        ['Chargers', 'Team Player', 'Soccer'],
                        ['Horses', 'Team Captain', 'Football']
                    ].map((team, index) => (
                        <tr key={index}>
                            <td style={{fontSize: '20px', color: "black", marginRight: '10px'}}>{team[0]}</td>
                            <td style={{fontSize: '20px', color: "black", marginRight: '10px'}}>{team[1]}</td>
                            <td style={{fontSize: '20px', color: "black", marginRight: '10px'}}>{team[2]}</td>
                            <td><button style={{fontSize: '12px', padding: '5px 30px', color: "white"}}>Leave</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            
            <div style={{textAlign: 'left'}}>
                <br/>
                <button style={{fontSize: '12px', color: "white", marginRight: '10px', padding: '5px 10px'}}> Join New Team</button>
                <button style={{fontSize: '12px', color: "white", padding: '5px 10px'}}> Create New Team</button>
            </div>
        </div>
     
        
    );
};
