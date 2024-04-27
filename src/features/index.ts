import TopAnimeScrape from './scrape.js'
import type { MyContext } from '#root/types/bot.js'

export default async function showTopAnime(ctx: MyContext) {
  await ctx.reply('Top 10 Anime this week:')
  const data = await TopAnimeScrape()
  let html = ``
  for (let i = 0; i <= 10; i++) {
    const item = data[i]
    html += `<b>${item.position}</b> - ${item.name} - ✨<i>${item.weeksAtTopTen}weeks</i>\n`
  }
  ctx.reply(html, { parse_mode: 'HTML' })
}
