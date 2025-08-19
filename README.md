# Volleybal Educatie App

Een educatieve Progressive Web App voor ALO-studenten en docenten om de Volley Stars en Smashball methodieken te leren.

## Features

- 📚 **Volley Stars methodiek**: Alle 5 levels met spelregels, technieken en didactische tips
- 🔥 **Smashball/SMASH!**: Complete informatie voor 13-18 jaar methodiek
- 🎯 **Interactieve Quizzen**: Test je kennis per level met score tracking
- ⭐ **Favorieten & Notities**: Persoonlijke aantekeningen en snelle toegang
- 📝 **Docenten Opdrachten**: Docenten kunnen opdrachten plaatsen, studenten kunnen ze bekijken
- 🎬 **YouTube Video's**: Embedded video's met mogelijkheid voor docenten om eigen video's toe te voegen
- 💾 **Export/Import**: Backup en herstel van alle persoonlijke data
- 📱 **PWA**: Werkt offline en installeerbaar op mobiel/desktop
- 🎨 **Responsive Design**: Optimaal op alle apparaten

## Tech Stack

- **Frontend**: React 19 + Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v3
- **State Management**: Zustand met persistence
- **Icons**: Lucide React
- **PWA**: Vite PWA Plugin + Workbox

## Development

```bash
npm install
npm run dev
```

## Deployment

Voor productie deployment:

```bash
npm run build
```

De app is geoptimaliseerd voor deployment op Vercel, Netlify of andere static hosting providers.

## Methodieken

### Volley Stars (6-12 jaar)
1. **Level 1: Catch** - Vangen en gooien (2v2)
2. **Level 2: Bounce** - Bounce-set techniek (2v2) 
3. **Level 3: Pass** - Onderarms en bovenhandse pass (2v2)
4. **Level 4: Smash** - Aanval introduceren (3v3)
5. **Level 5: Ultimate** - Volledig volleybal (3v3)

### Smashball/SMASH! (13-18 jaar)
- Dynamische spelvariant met smash centraal
- 4v4 format met aangepaste regels
- Focus op explosiviteit en aanvallend spel

## Voor Docenten

- Schakel naar docent-modus in Opdrachten
- Voeg eigen YouTube video's toe per level
- Plaats opdrachten voor studenten
- Exporteer/importeer data via Instellingen

## Licentie

Ontwikkeld voor de HAN Academie voor Lichamelijke Opvoeding.