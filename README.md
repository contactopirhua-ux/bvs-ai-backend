# BVS IA Backend

Backend simple para generar mensajes de WhatsApp/Email con Google Gemini (GRATIS).

## Requisitos

1. **API Key de Google Gemini** (TOTALMENTE GRATIS)
   - Ve a https://aistudio.google.com/app/apikeys
   - Haz clic en "Create API Key" 
   - Copia tu API key
   - **No tiene límite de uso significativo para tu caso**

2. **Vercel CLI** (opcional, pero recomendado)
   - Instala: `npm install -g vercel`

## Despliegue en Vercel (Recomendado - Gratis)

### Opción 1: Desde GitHub (Más fácil)

1. Crea un repositorio en GitHub con este código
2. Ve a https://vercel.com
3. Click en "Add New" → "Project"
4. Importa tu repo de GitHub
5. En "Environment Variables", añade:
   - `GOOGLE_API_KEY` = tu API key de Google Gemini
6. Deploy (tarda ~1 minuto)

### Opción 2: Con Vercel CLI

```bash
npm install -g vercel
vercel
# Sigue los pasos, cuando te pida ingresa tu GOOGLE_API_KEY
```

## Uso

El backend espera un POST a `/api/generate` con:

```json
{
  "prompt": "Lo que el usuario quiere comunicar",
  "tone": "friendly" // "friendly", "professional", o "assertive"
}
```

Respuesta:

```json
{
  "message": "¡Hola! 😊 Soy Grecia de Barakaldo Vet Shop 🐾\n\n..."
}
```

## Integración en el HTML

En `BVS_Plantillas_1.html`, reemplaza `https://bvs-ai-backend.vercel.app` con la URL que Vercel te dé después del deploy.

El botón "Generar" llamará al backend usando Google Gemini.

## Costo

**GRATIS** - Gemini tiene un límite generoso de uso gratuito que cubre miles de mensajes.
