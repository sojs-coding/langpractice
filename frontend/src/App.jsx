import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LangChainChat from './pages/LangChainChat';
import LangGraphChat from './pages/LangGraphChat';
import './index.css';

export default function App() {
  // Simple state-based router ('landing', 'langchain', 'langgraph')
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div className="app-container">
      <header className="global-header">
        <h1 onClick={() => setCurrentPage('landing')} className="logo">
          Gemma 4 Playground
        </h1>
      </header>

      <main className="content-viewport">
        {currentPage === 'landing' && (
          <LandingPage navigate={setCurrentPage} />
        )}
        {currentPage === 'langchain' && (
          <LangChainChat goBack={() => setCurrentPage('landing')} />
        )}
        {currentPage === 'langgraph' && (
          <LangGraphChat goBack={() => setCurrentPage('landing')} />
        )}
      </main>
    </div>
  );
}