import { CronJob } from 'cron'
import store from '#root/databases/store.js'
import Logger from '#root/utils/logger.js'
import showTopAnime from '#root/features/index.js'

export function initCrons() {
  try {
    const timeZone = store.env!.time_zone!
    new CronJob('30 7 * * 1', () => {
      showTopAnime()
    }, null, false, timeZone).start()

    Logger.logSuccess('Crons initialized')
  }
  catch (error) {
    Logger.logError(`Error while initializing crons', ${error}`)
  }
}
