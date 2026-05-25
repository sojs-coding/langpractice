import React, { useState } from 'react';

export default function LangGraphChat({ goBack }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendAgentMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');

    try {
      const response = await fetch('http://localhost:8000/api/chat/langgraph', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { text: data.response, sender: 'agent' }]);
    } catch {
      setMessages(prev => [...prev, { text: 'Agent node resolution failed.', sender: 'agent' }]);
    }
  };

  return (
    <div className="chat-page-wrapper theme-agentic-dark">
      <button className="back-btn" onClick={goBack}>⚡ Exit Graph System</button>
      <h2>LangGraph State Network</h2>
      
      <div className="terminal-chat-window">
        {messages.map((m, i) => (
          <div key={i} className={`node-response ${m.sender}`}>
            <span className="node-badge">[{m.sender.toUpperCase()} NODE]</span>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
      
      <form onSubmit={sendAgentMessage} className="terminal-input-area">
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Execute graph sequence query..." />
        <button type="submit">Execute</button>
      </form>
    </div>
  );
}