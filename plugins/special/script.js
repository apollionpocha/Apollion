exports.run = {
   usage: ['script', 'info'],
   hidden: ['sc'],
   category: 'special',
   async: async (m, {
      client,
      args,
      command
   }) => {
      if (command == 'info' || command == 'botinfo') return client.reply(m.chat, info(), m)
      if (command == 'tnc') return client.sendMessage(m.chat, tnc(), m, {
         largeThumb: false
      })
   },
   error: false,
   cache: true,
}

let script = () => {
   return `Sorry, the script is currently unavailable as the repository is undergoing management and is set to private. It will be made public soon. Stay tuned for updates, and feel free to follow me on [GitHub](https://github.com/kysage1) for the latest information`
}