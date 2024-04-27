export function getDateStamp(): string {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${month}-${day}`
}

// returns a string in the format of '2021-01-31'
export function getLocaleDateString(): string {
  const date = new Date()
  const timeZone = 'Asia/Shanghai'
  const localeDateString = date.toLocaleString('zh-CN', { timeZone })
  const formattedDate = localeDateString.split(' ')[0].replace(/\//g, '-')
  return formattedDate
}

export function getLocaleDateTimeString(): string {
  const date = new Date()
  const timeZone = 'Asia/Shanghai'
  const localeDateString = date.toLocaleString('zh-CN', { timeZone })
  return localeDateString
}
