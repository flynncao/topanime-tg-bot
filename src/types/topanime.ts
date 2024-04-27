interface Stats {
  peak: number
  previously: string | number
  weeksOnTop: number
  status: string
  stat: string
}

interface CoupleImages {
  imageUrlOne: string
  imageUrlTwo: string
}

export interface Couple {
  names: Array<string>
  anime: string
  coupleImages: CoupleImages
  rank: number
  stats: Stats
}

export interface OstSongs {
  title: string
  artists: Array<string>
  imageUrl: string
  rank: number
  stats: Stats
}

export interface Character {
  name: string
  anime: string
  imageUrl: string
  rank: number
  stats: Stats
}

export interface TopAnime {
  title: string
  imageUrl: string
  studio: string
  rank: number
  stats: Stats
}

export interface Data {
  code: number
  message: string
  totalItems: number
  data: Array<TopAnime>
  | Array<Character>
  | Array<OstSongs>
  | Array<Couple>
}

export interface DataError {
  code: number
  status: string
  message: string
}
