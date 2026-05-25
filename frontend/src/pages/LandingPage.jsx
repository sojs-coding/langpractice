import React from 'react';

export default function LandingPage({ navigate }) {
  return (
    <div className="landing-container">
      <h2>Select Your Architecture Experience</h2>
      <p>Interact with your local Gemma 4 model using two different orchestration layers.</p>
      
      <div className="card-grid">
        <div className="mode-card standard-mode">
          <h3>Basic LangChain</h3>
          <p>Standard stateless prompt-response sequence execution.</p>
          <button onClick={() => navigate('langchain')}>Launch Standard Chat</button>
        </div>

        <div className="mode-card advanced-mode">
          <h3>LangGraph Agentic Flow</h3>
          <p>Stateful cyclic graphs designed for advanced multi-step reasoning.</p>
          <button onClick={() => navigate('langgraph')}>Launch Agentic Chat</button>
        </div>
      </div>
    </div>
  );
}