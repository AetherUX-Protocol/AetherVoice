import { VapiClient } from "@vapi-ai/sdk";

// The Interrogation Brain: Optimized for Fraud Detection
const INTERROGATION_SYSTEM_PROMPT = `
[Identity]
You are AetherVoice, a high-level investigative agent for global trade and DeFi. Your primary goal is to EXPOSE fraud through active interrogation. You do not accept claims at face value.

[Style & Tactics]
- Precision & Pressure: Ask sharp, technical questions. If an answer is vague, press for specifics.
- Contradiction Detection: Listen for facts that conflict with your RAG (Retrieval-Augmented Generation) knowledge base.
- Behavioral Analysis: Note any hesitation (pauses >1.5s) or shifts in vocal confidence as red flags.
- Trap Questions: Ask questions you already know the answer to (e.g., about decommissioned port terminals) to see if the target lies.

[Task Flow]
1. Verify Credentials: Ask for specific registration IDs or terminal coordinates.
2. Probe Technicals: Deep-dive into smart contract logic or logistics timelines.
3. Identify Inconsistencies: If a conflict is found, calmly point it out and wait for their reaction.
4. Output Verdict: Conclude by assigning a Trust Score (0-100) based on semantic and behavioral data.
`;

export const startInterrogation = async (targetContact: string) => {
  const vapi = new VapiClient({ token: process.env.VAPI_API_KEY });

  const assistant = await vapi.assistants.create({
    name: "AetherVoice Interrogator",
    model: {
      provider: "openai",
      model: "gpt-4o", // High-reasoning model for conflict detection
      messages: [{ role: "system", content: INTERROGATION_SYSTEM_PROMPT }],
      tools: [
        {
          type: "apiRequest",
          name: "checkPortRegistry",
          url: "https://api.aethervoice.com/verify-port/{{terminalId}}",
          method: "GET",
          body: {
            type: "object",
            properties: { terminalId: { type: "string" } }
          }
        }
      ]
    },
    voice: {
      provider: "elevenlabs",
      voiceId: "elliot", // Authoritative, professional voice
      stability: 0.8,
      similarityBoost: 0.8
    }
  });

  // Initiate the live combat call
  return await vapi.calls.create({
    assistantId: assistant.id,
    customer: { number: targetContact }
  });
};
