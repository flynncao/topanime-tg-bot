import Logger from '#root/utils/logger.js'
import store from '#root/databases/store.js'
import unsplash from '#root/modules/unsplash.js'
import type { MyContext } from '#root/types/bot.js'
import showTopAnime from '#root/features/index.js'

export default function registerCommandHandler() {
  const { env, bot, menus } = store
  if (env === null || bot === null || menus === null)
    return

  bot.command('start', async (ctx: MyContext) => {
    await ctx.reply('Welcome, up and running')
  })

  bot.command('about', async (ctx: MyContext) => {
    const me = await bot.api.getMe()
    ctx.reply(`<b>Hi!</b> <i>Welcome</i> to <a href="https://t.me/${me.username}">${me.first_name}</a><span class="tg-spoiler"> id:${me.id}</span>`, { parse_mode: 'HTML' })
  })

  bot.command('topanime', (ctx: MyContext) => {
    showTopAnime(ctx)
  })

  Logger.logSuccess('Command handler registered')
}
