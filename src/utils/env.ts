import Logger from '#root/utils/logger.js'
import store from '#root/databases/store.js'
import 'dotenv/config'

export default function initLocalEnv(): boolean {
  try {
    store.env = {
      bot_token: process.env.BOT_TOKEN!,
      user_chat_id: process.env.USER_CHAT_ID!,
      time_zone: process.env.TIME_ZONE!,
    }
    return true
  }
  catch (error) {
    Logger.logError(`FATAL: Error while initializing local environment, please check .env file under root directory.', ${error}`)
    return false
  }
}
