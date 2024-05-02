import React, { useState } from "react";

export const CreateTeam = () => {
    const [profilePicture, setProfilePicture] = useState('profile_picture_url');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
     const [answer4, setAnswer4] = useState('');

    return (
        <div style={{marginTop: '-30px'}}>
                    <div>
                            <h2 style = {{fontSize: '30px', fontWeight: 'bold'}}> SportsZone</h2>
                           
                    </div>
            
            <div className="auth-form-container">
                    <h3> Create New Team</h3>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label style={{ alignSelf: 'flex-start' }}>Team Name</label>
                            <input type="text" value={answer1} onChange={(e) => setAnswer1(e.target.value)} style={{ height: '30px', width: '300px' }} />
                            <label style={{ alignSelf: 'flex-start' }}># of Team Members</label>
                            <input type="text" value={answer2} onChange={(e) => setAnswer2(e.target.value)} style={{ height: '30px', width: '300px' }} />
                            <label style={{ alignSelf: 'flex-start'}}>Location</label>
                            <input type="text" value={answer3} onChange={(e) => setAnswer3(e.target.value)} style={{ height: '30px', width: '300px' }} />
                            <label style={{ alignSelf: 'flex-start' }}>Sport</label>
                            <input type="text" value={answer4} onChange={(e) => setAnswer4(e.target.value)} style={{ height: '30px', width: '300px' }} />
                            <label style={{ alignSelf: 'flex-start'}}>Team Captain</label>
                            <input type="text" value={answer4} onChange={(e) => setAnswer4(e.target.value)} style={{ height: '30px', width: '300px' }} />
                    </div>
                    <div>
                            <button style={{ color: 'white' }}>Log In</button> </div>
            </div>
    </div>
    );
};
