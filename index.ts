import { Client, GatewayIntentBits } from "discord.js";
import { Bot } from "./src/core/Bot";
import mongoose from "mongoose";

export const bot = new Bot(
  new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.DirectMessages
    ]
  })
);

(async () => {
  await mongoose
    .connect(`mongodb+srv://jason:Jason123jc@cluster0.tqyhvyc.mongodb.net/main?retryWrites=true&w=majority`)
    .then(() => {
      console.log(`✅ MongoDB Status: Connected!`);
    })
    .catch((err) => {
      console.log(`❌ MongoDB Status: Error: ${err}`);
    });
})();
