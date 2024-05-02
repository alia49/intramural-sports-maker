
import React, { useState, useEffect } from 'react';
import './JoinTeamPage.css';

const JoinTeamPage = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");  // State to hold the input text

    useEffect(() => {
        const dummyMessages = [
            { id: 1, text: "Hi there, ready to join the team?", sender: "Team Admin", timestamp: "10:00 AM" },
            { id: 2, text: "Sure, what do I need to do?", sender: "New Member", timestamp: "10:01 AM" },
            { id: 3, text: "Just confirm your details and you're all set!", sender: "Team Admin", timestamp: "10:02 AM" }
        ];
        setMessages(dummyMessages);
    }, []);

    // Handler for input text change
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    // Handler for sending the message
    const handleSendClick = () => {
        setInputText("");  // Clear input after sending
        // Here you could also handle sending the message to a backend or displaying it
    };

    return (
        <div className="chat-page">
            <div className="chat-container">
                {messages.map(message => (
                    <div key={message.id} className={`message ${message.sender === "New Member" ? "own" : ""}`}>
                        <div className="sender">{message.sender}</div>
                        <div className="text">{message.text}</div>
                        <div className="timestamp">{message.timestamp}</div>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input 
                    type="text" 
                    value={inputText} 
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                    className="message-input"
                />
                <button onClick={handleSendClick} className="send-button">Send</button>
            </div>
        </div>
    );
};

export default JoinTeamPage;
