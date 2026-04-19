<img width="1024" height="559" alt="AetherVoice for Fraud Detection" src="https://github.com/user-attachments/assets/205e399d-f79c-472e-8689-bc8b4e674928" />

🎙️ AetherVoice: The Voice of the Agentic Economy
The AI That Talks to Scammers — and Exposes Them in Real Time.
One Pager:https://docs.google.com/document/d/1OU_HwHUwUjIwgTYON9mIDvEkbJjYu1c4yNc4zUnMvAo/edit?usp=sharing
Demo Video: https://www.youtube.com/watch?v=vr-wfbLC5tE
📖 Overview
AetherVoice is an autonomous AI voice agent designed to eliminate the $100B in annual friction caused by fraudulent actors in global trade and DeFi. Unlike passive scanners, AetherVoice actively engages with suspicious entities, using high-reasoning dialogue to probe for inconsistencies, analyze behavioral red flags, and deliver an immutable on-chain trust verdict.

🛠️ How It's Built (Technical Architecture)
AetherVoice uses a modular, low-latency stack to ensure the "Interrogation" feels human and high-pressure:

Reasoning Engine: GPT-4o / Gemini handles complex dialogue orchestration and fraud probing logic.

Voice Stack: Vapi & ElevenLabs provide ultra-low latency (<200ms) human-like vocal nuance.

Combat Logic: A dual-layer system using TypeScript for adaptive questioning and Python for behavioral signal analysis.

Blockchain Layer: BNB Chain for immutable fraud logging (ERC-8004) and autonomous service fee settlement (ERC-8183).

Data Layer: RAG System containing known scam patterns and verified global port/logistics registries.

🚀 Key Features
Adaptive Interrogation: Dynamically pivots questions based on detected evasiveness or technical contradictions.

Behavioral Intelligence: Analyzes vocal cadence, hesitation, and pitch to identify psychological red flags.

Real-Time Trust Scoring: Generates a 0–100 Trust Score with "Plain-English" reasoning for users.

Autonomous Settlement: The agent earns fees in USDC/BNB and pays for its own compute costs.

📂 Repository Structure
/aethervoice-core
├── /agents           # Adaptive questioning & behavioral analyst logic
├── /voice-bridge     # Vapi/ElevenLabs webhook orchestration
├── /contracts        # Solidity code for BNB Chain verification logs
├── /intelligence     # RAG sources: Scam patterns & Port registries
├── /ui               # React Trust Dashboard & Interrogation Orb
└── README.md         # You are here
🚦 Getting Started
1. Prerequisites Node.js (>= v18.18) Python 3.x API Keys: Vapi, ElevenLabs, and your chosen LLM (Gemini/GPT-4o) 2. Environment Setup To protect your sensitive data, AetherVoice uses environment variables. Follow these steps to configure your local environment:Locate the .env.example file in the root directory.Create a new file named .env by copying the template:
 cp .env.example .env
Open the .env file and fill in your unique API keys and configuration details.⚠️ Security Note: Never commit your .env file to version control. It is already included in the .gitignore to prevent accidental exposure of your private keys
3. Installation
4. git clone https://github.com/AetherUX-protocol/aethervoice.git
cd aethervoice
npm install
pip install -r requirements.txt
3. Environment Setup
Create a .env file in the root directory:
VAPI_API_KEY=your_key
GEMINI_API_KEY=your_key
BNB_PRIVATE_KEY=your_key
4. Running the Interrogation Agent
5. npm run start:bridge
python agents/behavior-analyst.py
