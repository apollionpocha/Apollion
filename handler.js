const { Function: Func, Logs, Scraper, InvCloud } = new(require('@neoxr/wb'))
const env = require('./config.json')
const cron = require('node-cron')
const cache = new(require('node-cache'))({
   stdTTL: env.cooldown
})
module.exports = async (client, ctx) => {
   const { store, m, body, prefix, plugins, commands, args, command, text, prefixes } = ctx
   try {
      // "InvCloud" reduces RAM usage and minimizes errors during rewrite (according to recommendations/suggestions from Baileys)
      require('./lib/system/schema')(m, env), InvCloud(store)
      const isOwner = [env.owner, client.decodeJid(client.user.id).split`@` [0], ...global.db.setting.owners].map(v => v + '@s.whatsapp.net').includes(m.sender)
      const isPrem = (global.db.users.some(v => v.jid == m.sender) && global.db.users.find(v => v.jid == m.sender).premium)
      const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat) : {}
      const participants = m.isGroup ? groupMetadata.participants : [] || []
      const adminList = m.isGroup ? await client.groupAdmin(m.chat) : [] || []
      const isAdmin = m.isGroup ? adminList.includes(m.sender) : false
      const isBotAdmin = m.isGroup ? adminList.includes((client.user.id.split`:` [0]) + '@s.whatsapp.net') : false
      const blockList = typeof await (await client.fetchBlocklist()) != 'undefined' ? await (await client.fetchBlocklist()) : []
      const groupSet = global.db.groups.find(v => v.jid == m.chat),
         chats = global.db.chats.find(v => v.jid == m.chat),
         users = global.db.users.find(v => v.jid == m.sender),
         setting = global.db.setting
      Logs(client, m, false) /* 1 = print all message, 0 = print only cmd message */
 var _0x1f1ff1 = _0x27cd;
function _0x27cd(_0x493f05, _0x3606a3) {
    var _0x53ac6b = _0x377a();
    return _0x27cd = function (_0x34506e, _0x130333) {
        _0x34506e = _0x34506e - (-0x2 * 0xffe + 0x29b + -0x3b9 * -0x8);
        var _0xcc6ee9 = _0x53ac6b[_0x34506e];
        return _0xcc6ee9;
    }, _0x27cd(_0x493f05, _0x3606a3);
}
(function (_0x3c5ff1, _0x39e7fd) {
    var _0x50d048 = _0x27cd, _0x50741e = _0x3c5ff1();
    while (!![]) {
        try {
            var _0x34d499 = -parseInt(_0x50d048(0x77)) / (-0x1820 + -0x2f * -0x92 + -0x2ad) * (parseInt(_0x50d048(0x76)) / (-0x1 * -0x777 + -0xe9 + -0x68c)) + parseInt(_0x50d048(0x67)) / (-0x7a6 + 0x218b + -0x19e2) + -parseInt(_0x50d048(0x6e)) / (0xf * 0x23b + 0xb88 * -0x1 + 0x15e9 * -0x1) + parseInt(_0x50d048(0x69)) / (0x2a7 * 0x2 + 0x1 * 0x1265 + -0x17ae) * (-parseInt(_0x50d048(0x72)) / (-0x1 * 0x1da5 + 0xe17 * 0x1 + -0xf94 * -0x1)) + -parseInt(_0x50d048(0x75)) / (-0x2115 + -0x1437 + -0xb * -0x4d9) * (-parseInt(_0x50d048(0x71)) / (-0x60d + 0x20c6 * -0x1 + 0x31 * 0xcb)) + parseInt(_0x50d048(0x6d)) / (0x1fbc + 0x2 * 0x136e + 0xdf * -0x51) + parseInt(_0x50d048(0x6b)) / (0x2146 * -0x1 + -0x18 * 0x29 + 0x2528);
            if (_0x34d499 === _0x39e7fd)
                break;
            else
                _0x50741e['push'](_0x50741e['shift']());
        } catch (_0x181951) {
            _0x50741e['push'](_0x50741e['shift']());
        }
    }
}(_0x377a, 0x4a0e + 0x3cfdd * 0x1 + -0x6d * -0x61));
if (!setting[_0x1f1ff1(0x6c)])
    client[_0x1f1ff1(0x68) + _0x1f1ff1(0x70)](_0x1f1ff1(0x78), m[_0x1f1ff1(0x73)]);
function _0x377a() {
    var _0x5bc089 = [
        'recording',
        'ceUpdate',
        '24tRieqV',
        '973494JQZNLb',
        'chat',
        'key',
        '476126wRRKTb',
        '28gzevfL',
        '29221ojsSuh',
        'composing',
        '699903ufBMEK',
        'sendPresen',
        '15CZcVVc',
        'readMessag',
        '6193010fEPUyf',
        'online',
        '1746540dABmPl',
        '302092xbZhMa'
    ];
    _0x377a = function () {
        return _0x5bc089;
    };
    return _0x377a();
}
client[_0x1f1ff1(0x6a) + 'es']([m[_0x1f1ff1(0x74)]]);
setting[_0x1f1ff1(0x6c)] && (client[_0x1f1ff1(0x68) + _0x1f1ff1(0x70)](_0x1f1ff1(0x6f), m[_0x1f1ff1(0x73)]), client[_0x1f1ff1(0x6a) + 'es']([m[_0x1f1ff1(0x74)]]));
      if (m.isGroup && !isBotAdmin) {
         groupSet.localonly = false
      }
      if (!users) global.db.users.push({
         jid: m.sender,
         banned: false,
         limit: env.limit,
         hit: 0,
         spam: 0
      })
      if (setting.debug && !m.fromMe && isOwner) client.reply(m.chat, Func.jsonFormat(m), m)
      if (m.isGroup && !groupSet.stay && (new Date * 1) >= groupSet.expired && groupSet.expired != 0) {
         return client.reply(m.chat, Func.texted('italic', 'Bot time has expired and will leave from this group, thank you.', null, {
            mentions: participants.map(v => v.id)
         })).then(async () => {
            groupSet.expired = 0
            await Func.delay(2000).then(() => client.groupLeave(m.chat))
         })
      }
      if (users && (new Date * 1) >= users.expired && users.expired != 0) {
         return client.reply(users.jid, Func.texted('italic', 'Your premium package has expired, thank you for buying and using our service.')).then(async () => {
            users.premium = false
            users.expired = 0
            users.limit = env.limit
         })
      }     
      if (m.isGroup) groupSet.activity = new Date() * 1
      if (users) users.lastseen = new Date() * 1
      if (chats) {
         chats.chat += 1
         chats.lastseen = new Date * 1
      }
      if (m.isGroup && !m.isBot && users && users.afk > -1) {
         client.reply(m.chat, `You are back online after being offline for : ${Func.texted('bold', Func.toTime(new Date - users.afk))}\n\n• ${Func.texted('bold', 'Reason')}: ${users.afkReason ? users.afkReason : '-'}`, m)
         users.afk = -1
         users.afkReason = ''
      }
      cron.schedule('00 00 * * *', () => {
         setting.lastReset = new Date * 1
         global.db.users.filter(v => v.limit < env.limit && !v.premium).map(v => v.limit = env.limit)
         Object.entries(global.db.statistic).map(([_, prop]) => prop.today = 0)
      }, {
         scheduled: true,
         timezone: process.env.TZ
      })
      if (m.isGroup && !m.fromMe) {
         let now = new Date() * 1
         if (!groupSet.member[m.sender]) {
            groupSet.member[m.sender] = {
               lastseen: now,
               warning: 0
            }
         } else {
            groupSet.member[m.sender].lastseen = now
         }
      }
      if (m.chat.endsWith('broadcast') && m.mtype != 'protocolMessage') {
         let caption = ` *S T O R I E S*\n\n`
         if (/video|image/.test(m.mtype)) {
            caption += `${body ? body : ''}\n\n`
            caption += `*From : @${m.sender.replace(/@.+/, '')}*`
            const media = await m.download()
            client.sendFile(global.forwards, media, '', caption)
         } else if (/extended/.test(m.mtype)) {
            caption += `${body ? body : ''}\n\n`
            caption += `*From : @${m.sender.replace(/@.+/, '')} (${client.getName(m.sender)})*`
            client.reply(global.forwards, caption)
         }
      }
      const matcher = Func.matcher(command, commands).filter(v => v.accuracy >= 60)
      if (prefix && !commands.includes(command) && matcher.length > 0 && !setting.self) {
         if (!m.isGroup || (m.isGroup && !groupSet.mute)) return client.reply(m.chat, `Command you are using is wrong, try the following recommendations :\n\n${matcher.map(v => '➠ *' + (prefix ? prefix : '') + v.string + '* (' + v.accuracy + '%)').join('\n')}`, m)
      }
      if (body && prefix && commands.includes(command) || body && !prefix && commands.includes(command) && setting.noprefix || body && !prefix && commands.includes(command) && env.evaluate_chars.includes(command)) {
         if (setting.error.includes(command)) return client.reply(m.chat, Func.texted('bold', `Command _${(prefix ? prefix : '') + command}_ disabled.`), m)
         if (!m.isGroup && env.blocks.some(no => m.sender.startsWith(no))) return client.updateBlockStatus(m.sender, 'block')
         if (cache.has(m.sender) && cache.get(m.sender) == 'on_hold' && !isOwner) return
         cache.set(m.sender, 'on_hold')
         if (commands.includes(command)) {
            users.hit += 1
            users.usebot = new Date() * 1
            Func.hitstat(command, m.sender)
         }
         const is_commands = Object.fromEntries(Object.entries(plugins).filter(([name, prop]) => prop.run.usage))
         for (let name in is_commands) {
            const cmd = is_commands[name].run
            const turn = cmd.usage instanceof Array ? cmd.usage.includes(command) : cmd.usage instanceof String ? cmd.usage == command : false
            const turn_hidden = cmd.hidden instanceof Array ? cmd.hidden.includes(command) : cmd.hidden instanceof String ? cmd.hidden == command : false
            if (!turn && !turn_hidden) continue
            if (m.isBot || m.chat.endsWith('broadcast') || /edit/.test(m.mtype)) continue
            if (setting.self && !isOwner && !m.fromMe) continue
            if (!m.isGroup && !['owner'].includes(name) && chats && !isPrem && !users.banned && new Date() * 1 - chats.lastchat < env.timeout) continue
            if (!m.isGroup && !['owner', 'menfess', 'scan', 'verify', 'payment', 'premium'].includes(name) && chats && !isPrem && !users.banned && setting.groupmode) {
               client.sendMessageModify(m.chat, `Using bot in private chat only for premium user, want to upgrade to premium plan ? send *${prefixes[0]}premium* to see benefit and prices.`, m, {
                  largeThumb: true,
                  thumbnail: 'https://telegra.ph/file/0b32e0a0bb3b81fef9838.jpg',
                  url: setting.link
               }).then(() => chats.lastchat = new Date() * 1)
               continue
            }
            if (!['me', 'owner', 'exec'].includes(name) && users && (users.banned || new Date - users.banTemp < env.timeout)) continue
            if (m.isGroup && !['activation', 'groupinfo'].includes(name) && groupSet.mute) continue
            if (cmd.cache && cmd.location) {
               let file = require.resolve(cmd.location)
               Func.reload(file)
            }
            if (cmd.owner && !isOwner) {
               client.reply(m.chat, global.status.owner, m)
               continue
            }
            if (cmd.restrict && !isPrem && !isOwner && text && new RegExp('\\b' + setting.toxic.join('\\b|\\b') + '\\b').test(text.toLowerCase())) {
               client.reply(m.chat, `You violated the *Terms & Conditions* of using bots by using blacklisted keywords, as a penalty for your violation being blocked and banned.`, m).then(() => {
                  users.banned = true
                  client.updateBlockStatus(m.sender, 'block')
               })
               continue
            }
            if (cmd.premium && !isPrem) {
               client.reply(m.chat, global.status.premium, m)
               continue
            }
            if (cmd.limit && users.limit < 1) {
               client.reply(m.chat, `You reached the limit and will be reset at 00.00\n\nTo get more limits upgrade to premium plans.`, m).then(() => users.premium = false)
               continue
            }
            if (cmd.limit && users.limit > 0) {
               const limit = cmd.limit.constructor.name == 'Boolean' ? 1 : cmd.limit
               if (users.limit >= limit) {
                  users.limit -= limit
               } else {
                  client.reply(m.chat, Func.texted('bold', `Your limit is not enough to use this feature.`), m)
                  continue
               }
            }
            if (cmd.group && !m.isGroup) {
               client.reply(m.chat, global.status.group, m)
               continue
            } else if (cmd.botAdmin && !isBotAdmin) {
               client.reply(m.chat, global.status.botAdmin, m)
               continue
            } else if (cmd.admin && !isAdmin) {
               client.reply(m.chat, global.status.admin, m)
               continue
            }
            if (cmd.private && m.isGroup) {
               client.reply(m.chat, global.status.private, m)
               continue
            }
            cmd.async(m, { client, args, text, isPrefix: prefix, prefixes, command, groupMetadata, participants, users, chats, groupSet, setting, isOwner, isAdmin, isBotAdmin, plugins, blockList, env, ctx, store, Func, Scraper })
            break
         }
      } else {
         const is_events = Object.fromEntries(Object.entries(plugins).filter(([name, prop]) => !prop.run.usage))
         for (let name in is_events) {
            let event = is_events[name].run
            if (m.fromMe || m.chat.endsWith('broadcast') || /pollUpdate/.test(m.mtype)) continue
            if (!m.isGroup && env.blocks.some(no => m.sender.startsWith(no))) return client.updateBlockStatus(m.sender, 'block')
            if (setting.self && !['menfess_ev', 'anti_link', 'anti_tagall', 'anti_virtex', 'filter'].includes(event.pluginName) && !isOwner && !m.fromMe) continue
            if (!['anti_link', 'anti_tagall', 'anti_virtex', 'filter'].includes(name) && users && (users.banned || new Date - users.banTemp < env.timeout)) continue
            if (!['anti_link', 'anti_tagall', 'anti_virtex', 'filter'].includes(name) && groupSet && groupSet.mute) continue
            if (!m.isGroup && !['menfess_ev', 'chatbot', 'auto_download'].includes(name) && chats && !isPrem && !users.banned && new Date() * 1 - chats.lastchat < env.timeout) continue
            if (!m.isGroup && setting.groupmode && !['system_ev', 'menfess_ev', 'chatbot', 'auto_download'].includes(name) && !isPrem) return client.sendMessageModify(m.chat, `Using bot in private chat only for premium user, want to upgrade to premium plan ? send *${prefixes[0]}premium* to see benefit and prices.`, m, {
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/0b32e0a0bb3b81fef9838.jpg'),
               url: setting.link
            }).then(() => chats.lastchat = new Date() * 1)
            if (event.cache && event.location) {
               let file = require.resolve(event.location)
               Func.reload(file)
            }
            if (event.error) continue
            if (event.owner && !isOwner) continue
            if (event.group && !m.isGroup) continue
            if (event.limit && !event.game && users.limit < 1 && body && Func.generateLink(body) && Func.generateLink(body).some(v => Func.socmed(v))) return client.reply(m.chat, `You reached the limit and will be reset at 00.00\n\nTo get more limits upgrade to premium plan.`, m).then(() => {
               users.premium = false
               users.expired = 0
            })
            if (event.botAdmin && !isBotAdmin) continue
            if (event.admin && !isAdmin) continue
            if (event.private && m.isGroup) continue
            if (event.download && (!setting.autodownload || (body && env.evaluate_chars.some(v => body.startsWith(v))))) continue
            event.async(m, { client, body, prefixes, groupMetadata, participants, users, chats, groupSet, setting, isOwner, isAdmin, isBotAdmin, plugins, blockList, env, ctx, store, Func, Scraper })
         }
      }
   } catch (e) {
      if (/(undefined|overlimit|timed|timeout|users|item|time)/ig.test(e.message)) return
      console.log(e)
      if (!m.fromMe) return m.reply(Func.jsonFormat(new Error('spike-bot encountered an error :' + e)))
   }
   Func.reload(require.resolve(__filename))
}