import type Command from '#root/types/commands.js'

export const commandList: Command[] = [
  { command: 'start', description: 'Welcome! Up and running.' },
  { command: 'help', description: 'Show help text' },
  { command: 'settings', description: 'Open settings' },
  { command: 'about', description: 'Show information about the bot' },
  { command: 'topanime', description: 'Show weekly anime ranking' },
  { command: 'topwaifu', description: 'Show weekly female characters ranking' },
  { command: 'tophusbando', description: 'Show weekly male characters ranking' },
]
