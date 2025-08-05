const fs = require('fs');
const config = require('../config.json');

module.exports = {
  logAction(guild, text) {
    const logEntry = `[${new Date().toISOString()}] ${text}\n`;
    fs.appendFileSync('./logs/moderation.log', logEntry);

    const logChannel = guild.channels.cache.get(config.logChannelId);
    if (logChannel) {
      logChannel.send(`📝 ${text}`);
    }
  }
};