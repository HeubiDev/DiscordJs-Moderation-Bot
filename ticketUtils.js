const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  async createTicket(interaction) {
    const guild = interaction.guild;
    const user = interaction.user;

    // Ticket-Channel erstellen
    const channel = await guild.channels.create({
      name: `ticket-${user.username}`,
      type: 0, // Text Channel
      permissionOverwrites: [
        {
          id: guild.id,
          deny: [PermissionFlagsBits.ViewChannel]
        },
        {
          id: user.id,
          allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]
        },
        {
          id: interaction.client.user.id,
          allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]
        }
      ]
    });

    await channel.send(`🎟️ Ticket eröffnet von <@${user.id}>. Bitte schildere dein Anliegen.`);
    await interaction.reply({ content: `🎟️ Dein Ticket wurde erstellt: <#${channel.id}>`, ephemeral: true });
  }
};