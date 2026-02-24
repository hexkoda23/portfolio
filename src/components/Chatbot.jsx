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

  const kbMap = (kb) => {
    const map = {};
    kb.split(/\r?\n/).forEach(line => {
      const m = line.match(/^\s*([^:]+):\s*(.+)\s*$/i);
      if (m) map[m[1].trim().toLowerCase()] = m[2].trim();
    });
    return map;
  };

  const answerFromKB = (q, kb) => {
    const qm = q.toLowerCase();
    const m = kbMap(kb);
    if (/\bfull\s*name\b|who\s*is\b/.test(qm) && m['full name']) return `His full name is ${m['full name']}.`;
    if (/\bgender\b|male|female/.test(qm) && m['gender']) return `He is ${m['gender'].toLowerCase()}.`;
    if (/\buniversity\b|\bcollege\b|\buni\b/.test(qm) && m['university']) return `He attended ${m['university']}.`;
    if (/\bsecondary\b|\bschool\b|fstc/.test(qm) && m['secondary school']) return `He attended ${m['secondary school']}.`;
    if (/\bdegree\b|\bcourse\b|computer\s*science/.test(qm) && m['degree']) return `He studied ${m['degree']}.`;
    if (/\bcgpa\b|\bgpa\b/.test(qm) && m['cgpa']) return `His CGPA is ${m['cgpa']}.`;
    return null;
  };

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
      const kbAnswer = answerFromKB(userMessage, knowledgeBase);
      if (kbAnswer) {
        setMessages(prev => [...prev, { role: 'bot', text: kbAnswer }]);
        return;
      }
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
        throw new Error('API Key is missing. Please set VITE_GEMINI_API_KEY in .env file.');
      }

      const API_VERSIONS = ["v1", "v1beta"];
      const PREFERRED = [
        "gemini-1.5-flash-latest",
        "gemini-1.5-flash-002",
        "gemini-1.5-flash",
        "gemini-pro"
      ];

      const prompt = `
        You are an AI assistant for Tife's portfolio website.
        Use male pronouns for Tife (he/him). Tife’s full name is Adeleke Kehinde Boluwatife.
        Answer strictly based on the provided context.
        
        Context:
        ${knowledgeBase}
        
        User Question: ${userMessage}
        
        Instructions:
        - Be friendly and professional.
        - If the answer is not in the context, say you don't know and suggest contacting Tife.
        - Keep answers concise.
      `;

      let text = '';
      let lastErr = null;
      let selected = null;
      for (const ver of API_VERSIONS) {
        try {
          const listRes = await fetch(`https://generativelanguage.googleapis.com/${ver}/models`, {
            headers: {
              'Content-Type': 'application/json',
              'x-goog-api-key': apiKey
            }
          });
          if (!listRes.ok) {
            const errBody = await listRes.json().catch(() => ({}));
            const code = errBody?.error?.code || listRes.status;
            const msg = errBody?.error?.message || listRes.statusText;
            if (code === 401 || code === 403) throw new Error(`Permission error (${code}): ${msg}`);
            continue;
          }
          const modelsData = await listRes.json();
          const models = modelsData?.models || modelsData?.data || [];
          const byId = {};
          for (const m of models) {
            const name = m?.name || m?.id || '';
            if (name) byId[name] = m;
          }
          for (const id of PREFERRED) {
            const matchedKey = Object.keys(byId).find(k => k.endsWith(id));
            if (matchedKey) {
              const supported = byId[matchedKey]?.supportedGenerationMethods || byId[matchedKey]?.capabilities || [];
              const ok = Array.isArray(supported)
                ? supported.includes('generateContent') || supported.includes('text') || supported.includes('generate')
                : true;
              if (ok) {
                selected = { ver, id: matchedKey.split('/').pop() };
                break;
              }
            }
          }
          if (!selected && models.length) {
            const any = models.find(m => {
              const supported = m?.supportedGenerationMethods || m?.capabilities || [];
              const hasGen = Array.isArray(supported)
                ? supported.includes('generateContent') || supported.includes('text') || supported.includes('generate')
                : true;
              const name = m?.name || '';
              return hasGen && /gemini/i.test(name);
            });
            if (any) {
              selected = { ver, id: (any?.name || '').split('/').pop() };
            }
          }
          if (selected) {
            const res = await fetch(`https://generativelanguage.googleapis.com/${ver}/models/${selected.id}:generateContent`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': apiKey
              },
              body: JSON.stringify({
                contents: [
                  {
                    role: 'user',
                    parts: [{ text: prompt }]
                  }
                ]
              })
            });
            if (!res.ok) {
              const errBody = await res.json().catch(() => ({}));
              const code = errBody?.error?.code || res.status;
              const msg = errBody?.error?.message || res.statusText;
              if (code === 401 || code === 403) throw new Error(`Permission error (${code}): ${msg}`);
              if (code === 429) {
                const m = String(msg).match(/retry in ([\d.]+)s/i);
                const waitSec = m ? m[1] : null;
                throw new Error(
                  waitSec
                    ? `Rate limit reached. Please try again in ${waitSec}s.`
                    : `Rate limit reached. Please try again later.`
                );
              }
              if (code === 404 || String(msg).includes('not found')) {
                lastErr = new Error(msg);
                selected = null;
                continue;
              }
              throw new Error(`API error (${code}): ${msg}`);
            }
            const data = await res.json();
            text =
              data?.candidates?.[0]?.content?.parts?.[0]?.text ||
              data?.candidates?.[0]?.content?.parts?.[0]?.inline_data?.data ||
              '';
            if (!text) throw new Error('Empty response');
            break;
          }
        } catch (err) {
          lastErr = err;
        }
      }
      if (!text) {
        const msg = String(lastErr?.message || 'Model selection failed');
        throw new Error(`All attempts failed. ${msg}`);
      }

      setMessages(prev => [...prev, { role: 'bot', text: text }]);
    } catch (error) {
      console.error('Error generating response:', error);
      const safeMsg = typeof error?.message === 'string' ? error.message : 'Unexpected error';
      setMessages(prev => [
        ...prev,
        { role: 'bot', text: `Sorry, something went wrong: ${safeMsg}. Please verify your API key and domain restrictions.` }
      ]);
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
                aria-label="Send"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.27 3.61c.18-.47.72-.7 1.19-.52l16.2 6.3a.75.75 0 0 1 0 1.38l-16.2 6.3a.75.75 0 0 1-1-.44.75.75 0 0 1-.02-.27L4.8 12 3.14 4.36a.75.75 0 0 1 .13-.75zM4.8 12l7.2 2.88L12 12l0-2.88L4.8 12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
