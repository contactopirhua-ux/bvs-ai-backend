# Deploy Gemini en 5 minutos

## Paso 1: Obtén tu API Key (1 minuto)
1. Ve a https://aistudio.google.com/app/apikeys
2. Haz clic en "Create API Key in new project"
3. Copia la key que aparece

## Paso 2: Despliega en Vercel (2 minutos)

### Opción A: Con GitHub (Recomendado)
```bash
# En tu Mac:
cd /Users/grecia/ai-backend
git init
git add .
git commit -m "initial gemini backend"

# Sube a GitHub (crea un repo nuevo en https://github.com/new)
git remote add origin https://github.com/TU_USUARIO/bvs-ai-backend.git
git branch -M main
git push -u origin main
```

Luego:
1. Ve a https://vercel.com
2. Click "Add New" → "Project"
3. Selecciona tu repo de GitHub
4. En "Environment Variables":
   - `GOOGLE_API_KEY` = tu key
5. Click "Deploy"

### Opción B: Con Vercel CLI
```bash
npm install -g vercel
cd /Users/grecia/ai-backend
npm install
vercel
# Sigue los pasos
```

## Paso 3: Actualiza el HTML (2 minutos)

Después que Vercel termina, te dará una URL tipo:
`https://bvs-ai-backend-xxxxx.vercel.app`

Abre `/Users/grecia/Downloads/BVS_Plantillas_1.html` y reemplaza:
`https://bvs-ai-backend.vercel.app`

Con tu URL real.

Luego copia el archivo a la app:
```bash
cp '/Users/grecia/Downloads/BVS_Plantillas_1.html' '/Applications/BVS - Grecia.app/Contents/Resources/index.html'
```

## Listo

Abre la app y prueba el botón "✨ Generar". Debería funcionar.

¿Dudas? Los límites de Gemini son muy generosos (gratis).
