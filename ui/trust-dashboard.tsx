import React, { useState, useEffect } from 'react';
import { Orb } from './components/Orb'; // A sleek, pulsing 3D orb for visual feedback

const TrustDashboard = () => {
  const [trustScore, setTrustScore] = useState(100);
  const [interrogationLogs, setInterrogationLogs] = useState([]);
  const [isInterrogating, setIsInterrogating] = useState(false);

  // 1. Live Interrogation Feed
  // Visualizes the "Combat Logic" as it happens
  const addLog = (message: string, type: 'info' | 'warning' | 'alert') => {
    setInterrogationLogs(prev => [{ message, type, time: new Date().toLocaleTimeString() }, ...prev]);
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen p-8 font-sans">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight">AetherVoice // Trust Dashboard</h1>
        <div className="px-4 py-2 bg-purple-600 rounded-full text-sm font-mono">
          BNB_CHAIN_STATUS: CONNECTED
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 2. The Interrogation Core */}
        <div className="lg:col-span-2 bg-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
          <Orb state={isInterrogating ? 'active' : 'idle'} color="#8b5cf6" />
          <div className="mt-8 text-center">
            <p className="text-slate-400 uppercase tracking-widest text-xs mb-2">Live Status</p>
            <h2 className="text-2xl font-semibold">
              {isInterrogating ? 'Interrogating Suspect...' : 'System Ready'}
            </h2>
          </div>
        </div>

        {/* 3. Real-Time Risk Analysis */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
          <h3 className="text-lg font-medium mb-4">Risk Assessment</h3>
          <div className="flex items-baseline gap-2 mb-6">
            <span className={`text-6xl font-black ${trustScore < 40 ? 'text-red-500' : 'text-green-400'}`}>
              {trustScore}
            </span>
            <span className="text-slate-500 uppercase text-xs">Trust Score / 100</span>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase text-slate-500 font-bold">Interrogation Logs</h4>
            <div className="h-64 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
              {interrogationLogs.map((log, i) => (
                <div key={i} className={`p-3 rounded-lg text-sm border-l-4 ${
                  log.type === 'alert' ? 'bg-red-900/20 border-red-500' : 'bg-slate-700/50 border-slate-500'
                }`}>
                  <span className="opacity-50 text-[10px] block mb-1">{log.time}</span>
                  {log.message}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustDashboard;
