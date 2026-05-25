import React, { useState } from 'react';

export default function LangChainChat({ goBack }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      // Connects to your Python FastAPI backend
      const response = await fetch('http://localhost:8000/api/chat/langchain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { text: data.response, sender: 'bot' }]);
    } catch {
      setMessages(prev => [...prev, { text: 'Backend connectivity error.', sender: 'bot' }]);
    }
  };

  return (
    <div className="chat-page-wrapper theme-classic">
      <button className="back-btn" onClick={goBack}>← Back to Home</button>
      <h2>LangChain Direct Interface</h2>
      
      <div className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.sender}`}>{m.text}</div>
        ))}
      </div>
      
      <form onSubmit={sendMessage} className="input-area">
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask Gemma via LangChain..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}