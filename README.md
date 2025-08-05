# 🤖 Discord Moderation Bot

Willkommen zu deinem eigenen Discord Moderationsbot!  
Der Bot bietet dir eine Vielzahl von Moderationsfeatures für deinen Server – sicher, einfach und mit Slash Commands.

## 🚀 Features

- `/ban` ➡️ Bannt einen Benutzer
- `/kick` ➡️ Kickt einen Benutzer
- `/mute` ➡️ Schaltet einen Benutzer stumm
- `/unmute` ➡️ Hebt das Stummschalten auf
- `/delete` ➡️ Löscht Nachrichten
- `/autodelete` ➡️ Automatisches Löschen von Nachrichten in bestimmten Channels
- `/ticket` ➡️ Ticket-System für Support-Anfragen
- 🔍 **Logging:** Alle Aktionen werden protokolliert
- 🆘 `/help` ➡️ Zeigt alle verfügbaren Commands

## 💡 Weitere nützliche Funktionen (Vorschläge)

- **Warnsystem:** `/warn` und `/warnings`
- **Timeout:** `/timeout` für zeitlich begrenzte Sperren
- **Role Management:** `/addrole` und `/removerole`
- **Lock Channel:** `/lock` & `/unlock` für Channel-Sperrung
- **Nickname Change:** `/setnick`
- **Slowmode:** `/slowmode`
- **Welcome/Goodbye Nachrichten**

> **Du kannst diese Features einfach durch weitere Dateien im `commands/` Ordner ergänzen!**

## 🛠️ Installation

1. **Node.js installieren** (empfohlen v18+)
2. Bot-Repo klonen:
   ```sh
   git clone https://github.com/DEIN_USER/discord-moderation-bot.git
   cd discord-moderation-bot
   ```
3. Abhängigkeiten installieren:
   ```sh
   npm install
   ```
4. Konfiguration in `config.json` anpassen (Bot-Token, Logging-Channel, etc.)
5. Starte den Bot:
   ```sh
   node index.js
   ```

## 🗂️ Struktur

- **commands/** – Alle Slash Commands als einzelne Dateien
- **events/** – Event-Handler (z.B. Bot ready, Nachrichten, Interaktionen)
- **utils/** – Hilfsfunktionen (Logger, Ticket-System)
- **logs/** – Log-Dateien für Moderationsaktionen

## 📦 Konfiguration

Bearbeite die Datei `config.json`:
```json
{
  "token": "DEIN_DISCORD_BOT_TOKEN",
  "guildId": "DEINE_GUILD_ID",
  "logChannelId": "DEIN_LOG_CHANNEL_ID"
}
```

## 👨‍💻 Beitrag & Erweiterung

Du kannst jederzeit neue Commands hinzufügen! Einfach eine neue Datei im `commands/`-Ordner erstellen und im `index.js` registrieren.

---

**Made with ❤️ & [discord.js](https://discord.js.org)**