const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/api/test", (req, res) => {
  res.json({
    status: "backend working",
    apiKey: process.env.OPENAI_API_KEY ? "✓ set" : "✗ missing",
  });
});

app.post("/api/generate", async (req, res) => {
  const { prompt, tone = "friendly" } = req.body;

  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: "Prompt es requerido" });
  }

  try {
    const greeting = "¡Hola! 😊 Soy Grecia de Barakaldo Vet Shop 🐾";
    const toneMap = {
      friendly:
        "amable, cercana y empática, como si fuera una amiga ayudando",
      professional:
        "profesional, clara y formal, como una ejecutiva de servicio al cliente",
      assertive:
        "directa y firme, pero siempre respetuosa y útil",
    };
    const toneDesc = toneMap[tone] || toneMap.friendly;

    const systemPrompt = `Eres Grecia, una experta en atención al cliente de Barakaldo Vet Shop. Tu tarea es generar mensajes de WhatsApp profesionales y naturales.

Instrucciones:
1. El mensaje SIEMPRE debe empezar con: "${greeting}"
2. Luego incluye un párrafo corto y natural (máximo 3 frases)
3. Finaliza con: "Gracias por tu comprensión."
4. Tono: ${toneDesc}
5. NO incluyas introducciones tipo "Te propongo un mensaje"
6. El mensaje debe ser directo y listo para copiar/pegar en WhatsApp
7. Si habla de un problema, ofrece solución o próximos pasos claros
8. Usa formato simple, sin asteriscos ni formato especial

El usuario te indicará qué necesita comunicar. Genera SOLO el mensaje listo para enviar.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: `Necesito un mensaje de WhatsApp para: ${prompt}`,
        },
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    const responseText = response.choices[0].message.content;

    return res.json({ message: responseText });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      error: error.message || "Error al generar el mensaje",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

