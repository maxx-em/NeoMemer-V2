import { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } from "discord.js";
import Premium from "../../models/PremiumUser";

export default {
  data: new SlashCommandBuilder()
    .setName("premium")
    .setDescription("All the premium commands that are available.")
    .addSubcommand((subcommand) =>
      subcommand.setName("view").setDescription("View all the premium users of in this server.")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("create")
        .setDescription("Create a new code for a user to redeem.")
        .addStringOption((option) =>
          option
            .setName("expiry")
            .setDescription("When the premium expires for that user.")
            .setRequired(true)
            .addChoices(
              {
                name: "1 day",
                value: "day"
              },
              {
                name: "1 week",
                value: "week"
              },
              {
                name: "1 month",
                value: "month"
              },
              {
                name: "6 months",
                value: "halfyear"
              },
              {
                name: "1 year",
                value: "year"
              }
            )
        )
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    if (interaction.options.getSubcommand() === "view") {
      try {
        const allPremiumUsers = await Premium.find({});

        return interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setColor("Green")
              .setAuthor({
                name: "NeoMemer",
                iconURL:
                  "https://media.discordapp.net/attachments/953476600421314601/964288523387678770/Screen_Shot_2022-04-14_at_3.15.10_PM.png?width=461&height=461"
              })
              .setTitle("💸 All Premium Users")
              .addFields(
                // @ts-nocheck
                allPremiumUsers.forEach((user) => {
                  return {
                    name: user.redeemedUser?.username,
                    value: "`" + user.redeemedUser?.id + "`",
                    inline: true
                  };
                })
              )
          ]
        });
      } catch (error) {}
    }
  }
};
