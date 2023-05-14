import { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("ping").setDescription("Check the bot's ping!"),
  execute(interaction: ChatInputCommandInteraction) {
    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Green")
          .setAuthor({
            name: "NeoMemer",
            iconURL:
              "https://media.discordapp.net/attachments/953476600421314601/964288523387678770/Screen_Shot_2022-04-14_at_3.15.10_PM.png?width=461&height=461"
          })
          .setDescription(`💻 NeoMemer's ping is ${Math.round(interaction.client.ws.ping)}ms.`)
      ]
    });
  }
};
