import { Client, CommandInteraction, GatewayIntentBits, type Interaction } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";
import { deployCommands } from "./deploy-commands";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
  ],
});

client.once("ready", () => {
  console.log("Discord bot is ready! 🤖");

  client.user?.setActivity({
    name: "on zerops.io"
  });
  client.user?.setStatus("online");
});

client.on("guildCreate", async (guild) => {
  await deployCommands({ guildId: guild.id });
});

client.on("interactionCreate", async (interaction: Interaction) => {
  if (!interaction.isCommand()) {
    return;
  }

  const commandInteraction = interaction as CommandInteraction;

  const { commandName } = commandInteraction;
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(commandInteraction);
  }
});

client.login(config.DISCORD_TOKEN);
