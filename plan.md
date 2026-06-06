# Umsetzungsplan: KI-Marketing-Funnel & Voice-Cloning Webseite

Dieses Dokument dient als Arbeitsgrundlage und Backlog für den Sub-Agenten in `workspace:3`. Die Webseite soll im modernen, hochgradig ästhetischen Stil von `wittmann.one` (Dunkles Theme, minimalistischer Kontrast, Typografie mit "Syne" und "Manrope") entwickelt werden.

---

## 🎨 Design-Spezifikationen (Stil: wittmann.one)

1. **Farbpalette:**
   - Hintergrund: HSL(0 0% 3%) (Tiefschwarz mit subtilem, dunklem Radialgradienten oben)
   - Vordergrund: HSL(0 0% 98%) (Reinweiß für Texte)
   - Karten/Container: HSL(0 0% 5%) mit einer hauchdünnen weißen Border `border-white/5` und `backdrop-blur-xl` (Glassmorphismus)
   - Akzent/Selektion: HSL(0 0% 98%) (Weiß) bzw. HSL(0 0% 60%) (Muted-Grau)
2. **Typografie:**
   - Überschriften (`h1`, `h2`, `h3`): Schriftart **'Syne'**, sans-serif (Breit, modern, ausdrucksstark)
   - Fließtext: Schriftart **'Manrope'** oder **'Inter'**, sans-serif (Klar lesbar, geometrisch)
3. **Interaktionen:**
   - Weiche Hover-Effekte auf Links und Buttons.
   - Dezente Einblend- und Slide-Animationen (z. B. `fadeInUp`).
   - Keine überladenen Frameworks, sauberer Code.

---

## 📂 Seitenstruktur & Sektionen

Die Seite soll als reaktionsschnelle Single-Page-App (oder mehrseitig, je nach Framework-Wahl) aufgebaut sein und folgende Sektionen umfassen:

### 1. Hero Sektion
- **Überschrift (Syne):** Radikale Prozess-Automatisierung für Creator & Brands.
- **Subtext:** Vollautomatisierte Instagram-to-Telegram Funnels mit integriertem Voice-Cloning. Maximale Conversion, 24/7-Betrieb, 0% manueller Aufwand.
- **CTA-Buttons:** "Funnel ansehen" & "Preise berechnen" (Scrollt sanft zu den jeweiligen Sektionen).

### 2. Interaktiver Vergleich: Konventionell vs. KI-Funnel (Slider oder Switch)
- **Komponente:** Ein interaktiver Schieberegler (Slider) oder eine Side-by-Side-Vergleichskarte.
- **Vergleichspunkte:**
  - *Konventioneller Funnel:* Manuelle Beantwortung von DMs, hoher Zeitverzug, Verlust von Leads im Chat, starre Link-in-Bio Klicks, statische Sprachnachrichten.
  - *KI-Funnel (Unser System):* Sofortige Reaktion auf Instagram DMs, automatisierte Weiterleitung auf Telegram, 5 psychologisch optimierte Follow-Up-Nachrichten per KI, dynamisches Voice-Cloning für personalisierte Sprachnachrichten, finaler OnlyFans-Link-Drop nach Vertrauensaufbau.

### 3. Der vollautomatisierte Funnel-Ablauf (Visualisierung)
Ein interaktiver Workflow-Graph oder ein visualisierter Ablauf:
```
[Instagram DM / Kommentar] 
       │ (Auto-Reply per Instack/API)
       ▼
[Einladung zu Telegram per personalisiertem Link]
       │
       ▼
[Automatisierte Telegram-Sequenz: 5 structured messages]
       │ (Inkl. Voice-Cloning Sprachnachrichten des Creators)
       ▼
[OnlyFans Link-Drop & Konvertierung]
```

### 4. Voice-Cloning Services
Vorstellung unserer Audio-Kloning-Modelle:
- **Simple Voice Cloning:** Ideal für schnelle Sprachnotizen und einfache Prompts.
- **Professional Voice Cloning:** Studio-Qualität, lippensynchrones Wording, Emotionen und Akzent-Anpassung.

### 5. Preistabelle
Eine übersichtliche Preismatrix:
- **Instagram-to-Telegram Funnel-Setup:** Auf Anfrage / Individuell nach Creator-Größe.
- **Voice Cloning Modelle (Einmalig):**
  - *Simple Voice Cloning:* **100,00 €** pro Modell.
  - *Professional Voice Cloning:* **500,00 €** pro Modell.
- **Generierungsgebühr (Nutzung):**
  - **0,25 €** pro angefangene Minute (gilt für beide Modelltypen).

---

## 🛠️ Technische Umsetzung (für den Sub-Agenten in workspace:3)

1. **Framework:** Nutze Vite mit React & TypeScript (analog zu wittmann.one).
2. **Styling:** CSS-in-JS oder TailwindCSS (siehe `index.css` Vorlage).
3. **SEO:** Title-Tags, Meta-Descriptions und semantische HTML5-Elemente setzen.
4. **No Placeholders:** Wenn Grafiken benötigt werden, nutze das `generate_image` Tool für fotorealistische Mockups oder UI-Karten und binde diese direkt ein.

---

## 📋 To-Do Liste für den Sub-Agenten (task.md)

- [ ] **1. Projekt initialisieren:** Struktur aufbauen, `package.json` und Tailwind-Konfiguration prüfen/erstellen.
- [ ] **2. Core Design System:** CSS-Klassen und Farbvariablen in `index.css` anlegen.
- [ ] **3. Layout & Komponenten:**
  - [ ] Hero-Bereich & Navigation implementieren.
  - [ ] Interaktiven Vergleichs-Slider (Conventional vs. AI) programmieren.
  - [ ] Funnel-Visualisierung erstellen (z. B. mit SVG-Kurven oder CSS-Animationen).
  - [ ] Preistabelle mit Kalkulator (z. B. Minuten-Regler für Sprachnachrichten) umsetzen.
- [ ] **4. Build & Validierung:** `npm run build` ausführen, um Kompilierungsfehler auszuschließen.
