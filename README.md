# Zerops x Discord.js - Bun

Discord.js is a powerful module that allows you to interact with the Discord API very easily. This is the most bare-bones example of [Discord.js](https://zerops.io) bot running on Zerops Bun runtime with a single ping command running.

![discordjs](https://github.com/zeropsio/recipe-shared-assets/blob/main/covers/svg/cover-discordjs.svg)

<br/>

## Deploy to Zerops

You can either click the deploy button to deploy directly on Zerops, or manually copy the [import yaml](https://github.com/zeropsio/recipe-discord-bun/blob/main/zerops-project-import.yml) to the import dialog in the Zerops app.

<br/>

> [!WARNING]
> You'll encounter some runtime errors if `DISCORD_CLIENT_ID` and `DISCORD_TOKEN` are not set in the environment variables.

<br/>

[![Deploy on Zerops](https://github.com/zeropsio/recipe-shared-assets/blob/main/deploy-button/green/deploy-button.svg)](https://app.zerops.io/recipe/discord-bun)

<br/>

## Recipe features
Latest version of Discord.js running on a load balanced **Zerops Bun** service.

<br/>

[Click here](https://app.zerops.io/recipe/discord-bots) to test discord bot on available runtime examples 

## Setting up Environment Variables

The steps mentioned here are to be followed after deploying the app and will guide you on how to obtain the two required environment variables to run your Discord.js Bot.

1. Go to the [Discord Application Portal](https://discord.com/developers/applications). Create an application if you do not have one already.

- Copy the application ID from the General Information section (sidebar). This will be used for `DISCORD_CLIENT_ID`.
- Go to the Bot section (sidebar), reset the token, and copy the token. This will be used for `DISCORD_TOKEN`.

Now you have both environment variables.

2. Head to your service. If you have full mode, check your sidebar and click on Environment Variables. On that page, you will see an "edit multiple secret variables in .env format" button. Click on it, paste your environment variables in the format shown below, and click on Update Secret Variables. You will then see a button to commit your changes.

```env
# Note: These Environment Variables are already invalidated.
DISCORD_TOKEN=1226434606118965270 # Your token copied from the bot section
DISCORD_CLIENT_ID=MTIyNjQ3NDYwNjExODk2NTI3MA.GtSgOF.W7wLWibfGtP2tobLv_DsbFKdjlGmOwzxliTejI # Your application ID copied from the General Information section
```

## Production vs. development
This recipe is ready for production as is, and will scale horizontally by adding more containers in case of high traffic surges. If you want to achieve the highest baseline reliability and resiliace, start with at least two containers (add `minContainers: 2` in recipe YAML in the `bot` service section, or change the minimum containers in "Automatic Scaling configuration" section of service detail).

<br/>

## Changes made over the default installation
If you want to modify your existing Discord.js bot to efficiently run on Zerops, there are no changes needed in the codebase on top of the standard installation, just add [zerops.yml](https://github.com/zeropsio/recipe-discord-bun/blob/main/zerops.yml) to your repository and setup environment variables.

<br/>
<br/>

Need help setting your project up? Join [Zerops Discord community](https://discord.com/invite/WDvCZ54).
