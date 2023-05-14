import { ChatInputCommandInteraction } from "discord.js";

export default function CheckForRole(interaction: ChatInputCommandInteraction, roleId: string) {
  const member = interaction.guild?.members.fetch(interaction.user.id);

  return member.
}
