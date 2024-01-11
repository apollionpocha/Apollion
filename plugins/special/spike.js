exports.run = {
   usage: ['malik'],
   hidden: ['malik', 'spike', 'dead'],
   category: 'utilities',
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.reply(m.chat, `What Do You Want? -_- 🗿`, m)
   },
   error: false,
   cache: true,
   location: __filename
}