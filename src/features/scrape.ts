import * as fs from 'node:fs'
import { join } from 'node:path'
import { writeFile } from 'node:fs'
import cheerio from 'cheerio'
import Logger from '#root/utils/logger.js'
import { getDateStamp } from '#root/utils/time.js'
import fetcher from '#root/utils/fetcher.js'
import type { TopAnime } from '#root/types/topanime.js'

const TOP_ANIME_URL = 'https://www.anitrendz.com/charts/top-anime'
const dataScrape: TopAnime[] = []
async function TopAnimeScrape(): Promise<any> {
  try {
    const nowDate = getDateStamp()
    const localJSONData = JSON.parse(fs.readFileSync(join(process.cwd(), 'data/topAnime.json'), 'utf-8'))
    if ('date' in localJSONData && localJSONData.date === nowDate)
      return Promise.resolve(localJSONData.list)

    const getUrl = await fetcher(TOP_ANIME_URL)
    const response = getUrl
    if (response.status === 200) {
      const html = response.data
      const $ = cheerio.load(html, { xmlMode: true })
      const originStr = $('script:not([src])')[0].children[0].data.trim()
      const origin = JSON.parse(originStr)
      const aniTopList = origin.props.pageProps.charts[0].choices
      fs.writeFileSync(join(process.cwd(), 'data/topAnime.json'), JSON.stringify({ date: getDateStamp(), list: aniTopList }), {
        encoding: 'utf-8',
      })
      Logger.logSuccess('Top anime data written successfully')

      return Promise.resolve(aniTopList)
    }
  }
  catch (e: any) {
    return Promise.reject(e)
  }
}

export default TopAnimeScrape
