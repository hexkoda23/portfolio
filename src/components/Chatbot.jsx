import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I am Tife\'s Bot. Ask me anything about Adeleke Kehinde Boluwatife!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [knowledgeBase, setKnowledgeBase] = useState('');
  const messagesEndRef = useRef(null);

  // Load the knowledge base from the text file
  useEffect(() => {
    const fetchKnowledgeBase = async () => {
      try {
        const response = await fetch('/data/info.txt');
        if (response.ok) {
          const text = await response.text();
          setKnowledgeBase(text);
        } else {
          console.error('Failed to load knowledge base');
        }
      } catch (error) {
        console.error('Error loading knowledge base:', error);
      }
    };

    fetchKnowledgeBase();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
        throw new Error('API Key is missing. Please set VITE_GEMINI_API_KEY in .env file.');
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
        You are an AI assistant for Tife's portfolio website.
        Your goal is to answer questions about Tife based strictly on the provided context.
        
        Context:
        ${knowledgeBase}
        
        User Question: ${userMessage}
        
        Instructions:
        - Be friendly and professional.
        - Only answer based on the context provided. If the answer is not in the context, say you don't know but suggest contacting Tife.
        - Keep answers concise.
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'bot', text: text }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, something went wrong. Please check the API key or try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-slate-900 border border-slate-200 hover:bg-slate-100 rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <span className="text-2xl leading-none">🤖</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 sm:w-96 flex flex-col h-[500px] border border-slate-200 transition-all duration-300">
          {/* Header */}
          <div className="bg-white p-4 rounded-t-lg flex justify-between items-center text-slate-900 border-b border-slate-200">
            <h3 className="font-bold text-lg">Tife's Bot</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:text-slate-600 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-slate-100 text-slate-900 border border-slate-200 rounded-br-none'
                      : 'bg-white text-slate-900 border border-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-900 border border-slate-200 p-3 rounded-lg rounded-bl-none animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-200 bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask something..."
                className="flex-1 p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 bg-white text-slate-900"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className={`bg-white text-slate-900 border border-slate-200 p-2 rounded-md hover:bg-slate-100 transition-colors ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
