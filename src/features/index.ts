import type { InputMediaPhoto } from 'grammy/types'
import TopAnimeScrape from './scrape.js'
import type { MyContext } from '#root/types/bot.js'

export default async function showTopAnime(ctx: MyContext) {
  const data = await TopAnimeScrape()
  let caption = ``
  const imgs: InputMediaPhoto[] = []

  for (let i = 0; i <= 9; i++) {
    const item = data[i]
    const hot = item.weeksAtTopTen > 3 ? ` 🔥 ${item.weeksAtTopTen} weeks` : ''
    caption += `<b>${item.position}</b>. ${item.name} ${hot}\n`
    if (i <= 5) {
      const img: InputMediaPhoto = {
        type: 'photo',
        media: item.images.large,
      }
      imgs.push(img)
    }
  }
  imgs[0].caption = caption
  imgs[0].parse_mode = 'HTML'

  ctx.replyWithMediaGroup(imgs)
}
