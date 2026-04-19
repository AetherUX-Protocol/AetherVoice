import express, { Request, Response } from 'express';
import { handleInterrogation } from '../agents/interrogation';

const router = express.Router();

/**
 * Vapi Webhook Handler
 * Receives real-time events from the voice bridge to trigger combat logic.
 */
router.post('/webhook', async (req: Request, res: Response) => {
  const { message } = req.body;
  const type = message?.type;

  console.log(`[AetherVoice] Received event: ${type}`);

  try {
    switch (type) {
      case 'transcript':
        // 1. Process real-time speech for immediate interrogation
        // Logic: Convert partial or final transcripts into combat triggers
        const interrogationResult = await handleInterrogation({
          transcript: message.transcript,
          behavioralSignals: message.metadata?.behavioral || {}
        });

        // 2. Dynamically update the agent's instructions if a scam is suspected
        if (interrogationResult.riskLevel === 'HIGH') {
          return res.json({
            response: {
              type: 'assistant-request',
              assistant: {
                model: {
                  messages: [{ role: 'system', content: interrogationResult.instruction }]
                }
              }
            }
          });
        }
        break;

      case 'function-call':
        // 3. Handle specific combat tools (e.g., checking a port registry)
        const { name, arguments: args } = message.functionCall;
        console.log(`[Combat Tool] Executing: ${name}`, args);
        // Add your logic to call external RAG or port APIs here
        break;

      case 'end-of-call-report':
        // 4. Log the final verdict and settle on-chain
        console.log(`[Final Verdict] Trust Score: ${message.analysis?.trustScore}`);
        // Trigger VerificationLog.sol call here
        break;

      default:
        // Standard events like 'speech-update' or 'call-started'
        break;
    }

    // Always respond within 7.5s to prevent Vapi timeouts
    return res.status(200).send();
  } catch (error) {
    console.error('[AetherVoice Error]', error);
    return res.status(500).send();
  }
});

export default router;
